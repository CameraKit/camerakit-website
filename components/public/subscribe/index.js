import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styles from './subscribe.scss';

import global from '../../../styles/styles.global.scss';

const url = 'https://wonderkiln.us12.list-manage.com/subscribe/post?u=45b5c2055f100d913f074055b&amp;id=ec9df2ad9a';

class Subscribe extends React.Component {
  render() {
    return (
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <div className={styles.subscribe}>
            <h2 className={global['heading--small']}>
              {'Stay Up To Date'}
            </h2>
            <p className={styles.paragraph}>
              {'We sometimes send out important updates concerning CameraKit. Provide your email if you are interested in receiving emails from us.'}
            </p>
            <form
              className={styles.form}
              onSubmit={event => {
                event.preventDefault();
                subscribe({ EMAIL: this.email.value });
              }}
            >
              <div className={styles.inputWrapper}>
                <input ref={input => { this.email = input; }} name="email" className={styles.input} type="email" required />
                <button className={styles.submit} type="submit">
                  {status === 'sending' ? 'Sending...' : 'Subscribe'}
                </button>
              </div>
              {(status === 'error' || status === 'success') && (
                <p className={styles.message}>
                  {message}
                </p>
              )}
            </form>
          </div>
        )}
      />
    );
  }
}

export default Subscribe;
