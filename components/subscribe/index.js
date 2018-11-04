import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import { Transition } from 'react-spring';

import styles from './subscribe.scss';


const url = 'https://wonderkiln.us12.list-manage.com/subscribe/post?u=45b5c2055f100d913f074055b&amp;id=ec9df2ad9a';

class Subscribe extends React.Component {
  render() {
    return (
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status }) => (
          <Transition
            from={{ opacity: 0, height: 0 }}
            enter={{ opacity: 1, height: 220 }}
            leave={{ opacity: 0, height: 0 }}>

            {status === 'error' || status === 'success'
              ? s => (
                <div style={s}>
                  <div className={styles.message}>
                    <h3 className={styles.messageText}>
                      {status === 'error'
                        ? 'Sorry, there was a problem subscribing to this list.'
                        : 'Thanks for subscribing!'}
                    </h3>
                  </div>
                </div>
              )
              : s => (
                <div style={s}>
                  <div className={styles.subscribe}>
                    <h2 className={global['heading--small']}>
                      {'Stay Up To Date'}
                    </h2>
                    <p className={styles.paragraph}>
                      {'We sometimes send out important updates concerning CameraKit. Provide your email if you are interested in receiving emails from us.'}
                    </p>
                    <form
                      className={styles.form}
                      onSubmit={(event) => {
                        event.preventDefault();
                        subscribe({ EMAIL: this.email.value });
                      }}
                    >
                      <div className={styles.inputWrapper}>
                        <input ref={(input) => { this.email = input; }} name="email" placeholder="you@domain.com" className={styles.input} type="email" required />
                        <button className={styles.submit} type="submit">
                          {status === 'sending' ? 'Sending...' : 'Subscribe'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )
            }
          </Transition>
        )}
      />
    );
  }
}

export default Subscribe;
