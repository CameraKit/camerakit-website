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
      complete: false,
      message: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    isomorphicFetch(`${process.env.API_URL}/contact`, {
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
    }).then(response => {
      if (response.ok) {
        this.clearInputs();
        this.setState({ complete: true, message: 'Success! Email sent.' });
      } else {
        this.setState({ complete: true, message: 'Sorry, we could not process your request.' });
      }
    });
  }

  clearInputs() {
    this.name.value = '';
    this.email.value = '';
    this.company.value = '';
    this.message.value = '';
  }

  render() {
    const { complete, message } = this.state;
    return (
      <section className={styles.intro}>
        <div className={`${global.container} ${global['container--large']}`}>
          <div className={intro.content}>
            <div className={intro.phone} />
            <h2 className={`${global['heading--large']} ${intro.subheading}`}>
              {'Contact Us'}
            </h2>
          </div>
        </div>
        <div className={global.container}>
          <form
            className={styles.form}
            onSubmit={this.handleSubmit.bind(this)}
          >
            <div className={styles.container}>
              <div className={styles.contactWrapper}>
                <input
                  className={styles.input}
                  ref={input => { this.name = input; }}
                  placeholder="Name"
                  name="name"
                  type="text"
                  required
                />
              </div>
              <div className={styles.contactWrapper}>
                <input
                  className={styles.input}
                  ref={input => { this.email = input; }}
                  placeholder="Email"
                  name="email"
                  type="email"
                  required
                />
              </div>
              <div className={styles.contactWrapper}>
                <input
                  className={styles.input}
                  ref={input => { this.company = input; }}
                  placeholder="Company"
                  name="company"
                  type="text"
                  required
                />
              </div>
              <div className={`${styles.contactWrapper} ${styles.textAreaWrapper}`}>
                <textarea
                  className={`${styles.input} ${styles.textArea}`}
                  ref={input => { this.message = input; }}
                  placeholder="Message"
                  name="message"
                  type="textarea"
                  required
                />
              </div>
              <Transition
                from={{ opacity: 0, height: 0 }}
                enter={{ opacity: 1, height: 40 }}
                leave={{ opacity: 0, height: 0 }}
              >
                {complete
                  ? s => (
                    <div style={s}>
                      <p className={styles.message}>
                        {message}
                      </p>
                    </div>
                  )
                  : s => (
                    <div style={s}>
                      <button className={styles.submitButton} type="submit">
                        Submit
                      </button>
                    </div>
                  )
                }
              </Transition>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ContactForm;
