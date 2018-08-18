import React from 'react';

import globalStylesheet from 'styles/styles.global.scss';
import styles from './login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { };

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  login() {
    fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ email: this.email.value, password: this.password.value }),
    }).then(response => {
        response.json().then(json => {
            if(json.message) {
              this.setState({ status: json.message });
            } else {
              this.setState({ status: "Logged in! Token: " + json.accessToken });
            }

        });
    });
  }

  register() {
    fetch('http://localhost:3001/auth/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ email: this.email.value, password: this.password.value }),
    }).then(response => {
        response.json().then(json => {
            if(json.message) {
                this.setState({ status: json.message });
              } else {
                this.setState({ status: "Registered as" + json.email + "!" });
              }
        });
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

export default Login;
