import React from 'react';

import styles from '../styles/contact-form.scss';
import intro from '../styles/intro.scss';
import global from '../styles/styles.global.scss';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    // Send contact email
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
          </form>
        </div>
      </section>
    )
  }
}

export default ContactForm;