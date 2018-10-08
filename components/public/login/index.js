import React from 'react';
import globalStylesheet from 'styles/styles.global.scss';
import AuthService from 'utils/auth';
import Router from 'next/router';

import styles from './login.scss';

const Auth = new AuthService();

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = { status: '' };

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  login() {
    Auth.login(this.email.value, this.password.value).then(error => {
      if (error && error.message) {
        this.setState({ status: error.message });
      } else {
        Router.push('/dashboard');
      }
    });
  }

  register() {
    Auth.register(this.email.value, this.password.value).then(error => {
      if (error) {
        this.setState({ status: error.message != null ? error.message : error });
      } else {
        this.setState({ status: 'registration successful' });
      }
    });
  }

  render() {
    const { status } = this.state;
    return (
      <section className={styles.login}>
        <div className={globalStylesheet.container}>
          <div className={styles.container}>
            <div>
              <div>
                <span>
                  {'Email'}
                </span>
                <input ref={ref => { this.email = ref; }} />
              </div>
              <div>
                <span>
                  {'Password'}
                </span>
                <input type="password" ref={ref => { this.password = ref; }} />
              </div>
            </div>
            <div className={styles.submit}>
              <div className={styles.submitText} onClick={this.register} onKeyDown={this.register} tabIndex={0} role="button">
                {'Register'}
              </div>
            </div>
            <div className={styles.submit}>
              <div className={styles.submitText} onClick={this.login} onKeyDown={this.login} tabIndex={0} role="button">
                {'Login'}
              </div>
            </div>
            <div>
              {status}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginForm;
