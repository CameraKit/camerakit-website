import isomorphicFetch from 'isomorphic-unfetch';
import * as BluebirdPromise from 'bluebird';
import { setCookie, getCookie, removeCookie } from './cookies';
import { reject } from 'any-promise';

export default class AuthService {
  constructor() {
    this.api = 'http://localhost:3001';
    this.callApi = this.callApi.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.location = 'AuthService';
  }

  login(email, password) {
    return new BluebirdPromise(resolve => this.callApi(`${this.api}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }, true).then(json => {
      this.setToken(json.accessToken);
      return this.callApi(`${this.api}/users`, {
        method: 'GET',
      }, true);
    }).then(res => {
      this.setProfile(res);
      return resolve(res);
    }).catch(error => BluebirdPromise.reject(error.message)));
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && token !== 'undefined';
  }

  setProfile(profile) {
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  getProfile() {
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(localStorage.profile) : {};
  }

  setToken(idToken) {
    setCookie('token', idToken);
  }

  getToken() {
    return getCookie('token');
  }

  register(email, password) {
    return new BluebirdPromise(resolve => this.callApi(`${this.api}/users`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    }, true).then(json => {
      this.setToken(json.accessToken);
      return this.callApi(`${this.api}/users/${email}`, {
        method: 'GET',
      }, true);
    }).then(res => {
      this.setProfile(res);
      return resolve(res);
    }).catch(error => BluebirdPromise.reject(error.message)));
  }

  logout() {
    removeCookie('token');
    localStorage.removeItem('profile');
  }

  checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  callApi(url, options, json) {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (this.loggedIn()) {
      headers.Authorization = `Bearer ${this.getToken()}`;
    }

    if (json) {
      return isomorphicFetch(url, {
        headers,
        ...options,
      })
        .then(this.checkStatus)
        .then(response => response.json())
        .catch(error => error);
    }
    return isomorphicFetch(url, {
      headers,
      ...options,
    })
      .then(this.checkStatus)
      .catch(error => error);
  }
}
