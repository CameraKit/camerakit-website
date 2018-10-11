import React from 'react';
import isomorphicFetch from 'isomorphic-unfetch';
import { Transition } from 'react-spring';

import styles from '../styles/contact-form.scss';
import intro from '../styles/intro.scss';
import global from '../styles/styles.global.scss';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
      message: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    isomorphicFetch('/processForm', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.name.value,
        email: this.email.value,
        company: this.company.value,
        message: this.message.value,
      }),
    }).then((response) => {
      if (response.ok) {
        this.clearInputs();
        this.setState({ success: true, message: 'Thanks. Your feedback has been recieved. We\'ll get back to you shortly.' });
      } else {
        this.setState({ success: false, message: 'Sorry, we could not process your request.' });
      }
    }).catch((err) => {
      console.error(err);
    });
  }

  clearInputs() {
    this.name.value = '';
    this.email.value = '';
    this.company.value = '';
    this.message.value = '';
  }

  render() {
    const { message, success } = this.state;

    return (
      <section className={styles.intro}>
        <div className={`${global.container} ${global['container--large']}`}>
          <div className={intro.content}>
            <h2 className={`${global['heading--large']} ${intro.subheading}`}>
              {'Contact Us'}
            </h2>
          </div>
        </div>
        <div className={global.container}>
          <Transition
            from={{ opacity: 0, height: 0 }}
            enter={{ opacity: 1, height: 400 }}
            leave={{ opacity: 0, height: 0 }}
          >
            {success === false
              ? style => (
                <div style={style}>
                  <form
                    className={styles.form}
                    onSubmit={this.handleSubmit.bind(this)}
                  >
                    <div className={styles.container}>
                      <div className={styles.contactWrapper}>
                        <input
                          className={styles.input}
                          ref={(input) => { this.name = input; }}
                          placeholder="Name"
                          name="name"
                          type="text"
                          required
                        />
                      </div>
                      <div className={styles.contactWrapper}>
                        <input
                          className={styles.input}
                          ref={(input) => { this.email = input; }}
                          placeholder="Email"
                          name="email"
                          type="email"
                          required
                        />
                      </div>
                      <div className={styles.contactWrapper}>
                        <input
                          className={styles.input}
                          ref={(input) => { this.company = input; }}
                          placeholder="Company"
                          name="company"
                          type="text"
                          required
                        />
                      </div>
                      <div className={`${styles.contactWrapper} ${styles.textAreaWrapper}`}>
                        <textarea
                          className={`${styles.input} ${styles.textArea}`}
                          ref={(input) => { this.message = input; }}
                          placeholder="Message"
                          name="message"
                          type="textarea"
                          required
                        />
                      </div>
                      <button className={styles.submitButton} type="submit">
                        {message && success === false
                          ? 'Try Again'
                          : 'Submit'
                        }
                      </button>
                    </div>
                  </form>
                </div>
              )

              : style => (
                <div style={style}>
                  <p className={styles.successMessage}>
                    {message}
                  </p>
                </div>
              )
            }
          </Transition>
        </div>
        <p className={`${styles.message} ${message && success === false ? styles.show : ''}`}>
          {message}
        </p>
      </section>
    );
  }
}

export default ContactForm;
