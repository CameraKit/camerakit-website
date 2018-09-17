import React from 'react';
import isomorphicFetch from 'isomorphic-unfetch';

import styles from '../styles/contact-form.scss';
import intro from '../styles/intro.scss';
import global from '../styles/styles.global.scss';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      complete: false,
      message: '',
    }
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
      })
    }).then( (response) => {
      console.log(response);
      if (response.ok) {
        this.setState({ complete: true, message: 'Success! Email Sent.' });
      } else {
        this.setState({ complete: true, message: 'Sorry, we could not process your request.'})
      }
    });
  }

  render() {
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
            onSubmit={this.handleSubmit.bind(this)}>
            <div className={styles.container}>
              <div className={styles.contactWrapper}>
                <input className={styles.input}
                  ref={input => { this.name = input; }}
                  placeholder="Name"
                  name="name" type="text" required />
              </div>
              <div className={styles.contactWrapper}>
                <input className={styles.input}
                  ref={input => { this.email = input; }}
                  placeholder="Email"
                  name="email" type="email" required />
              </div>
              <div className={styles.contactWrapper}>
                <input className={styles.input}
                  ref={input => { this.company = input; }}
                  placeholder="Company"
                  name="company" type="text" required />
              </div>
              <div className={`${styles.contactWrapper} ${styles.textAreaWrapper}`}>
                <textarea className={`${styles.input} ${styles.textArea}`}
                  ref={input => { this.message = input; }}
                  placeholder="Message"
                  name="message" type="textarea" required />
              </div>
              <button className={styles.submitButton} type="submit">
                Submit
              </button>
            </div>
            {(this.state.complete) && (
                <p className={styles.message}>
                  {this.state.message}
                </p>
              )}
          </form>
        </div>
      </section>
    )
  }
}

export default ContactForm;