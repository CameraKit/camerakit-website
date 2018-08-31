import isomorphicFetch from 'isomorphic-unfetch';
import * as BluebirdPromise from 'bluebird';
import { setCookie, getCookie, removeCookie } from './cookies';

export default class AuthService {
  constructor() {
    this.api = 'http://localhost:3001';
    this.callApi = this.callApi.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.location = 'AuthService';
  }

  login(email, password) {
    return new BluebirdPromise(resolve => isomorphicFetch(`${this.api}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(res => res.json().then(json => {
      this.setToken(json.accessToken);
      return this.callApi(`${this.api}/users`, {
        method: 'GET',
      });
    })).then(res => {
      this.setProfile(res);
      return resolve(res);
    }));
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token;
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
    return new BluebirdPromise(resolve => isomorphicFetch(`${this.api}/users/sponsor`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(res => res.json().then(json => {
      this.setToken(json.accessToken);
      return this.callApi(`${this.api}/users`, {
        method: 'GET',
      });
    })).then(res => {
      this.setProfile(res);
      return resolve(res);
    }));
  }

  logout() {
    removeCookie('nest_auth_cookie');
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

  callApi(url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (this.loggedIn()) {
      headers.Authorization = `Bearer ${this.getToken()}`;
    }

    return isomorphicFetch(url, {
      headers,
      ...options,
    })
      .then(this.checkStatus)
      .then(response => response.json());
  }
}
