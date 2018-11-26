import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import { Transition } from 'react-spring';

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
            leave={{ opacity: 0, height: 0 }}
          >

            {status === 'error' || status === 'success'
              ? s => (
                <div style={s}>
                  <div className="message">
                    <h3 className="messageText">
                      {status === 'error'
                        ? 'Sorry, there was a problem subscribing to this list.'
                        : 'Thanks for subscribing!'}
                    </h3>
                  </div>
                </div>
              )
              : s => (
                <div style={s}>
                  <style jsx>
                    {`
                      .heading {
                        font-weight: 700;
                        font-size: 1.1rem;
                        text-transform: uppercase;
                      }

                      .subscribe {
                        margin: 0 auto 5rem;
                        max-width: 30rem;
                        text-align: center;
                      }
                      
                      .paragraph {
                        color: #3E445B;
                      }
                      
                      .form {
                        margin-top: 3rem;
                      }
                      
                      .inputWrapper {
                        display: flex;
                        background-color: #fff;
                        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                        border-radius: 0.25rem;
                        overflow: hidden;
                      }
                      
                      .input {
                        flex: 1 1 70%;
                        min-width: 0;
                        font-size: 1.1rem;
                        padding: 1.2rem 1.4rem;
                        border: none;
                      }

                      .input:active, .input:focus {
                        outline: none;
                      }
                      
                      .submit {
                        flex: 0 0 8rem;
                        padding: 0.75rem 1.1rem;
                        border: none;
                        background-color: transparent;
                        color: #6b60e9;
                        font-weight: 600;
                        font-size: .85rem;
                        text-transform: uppercase;
                        transition: all 0.3s ease;
                      }

                      .submit:hover, .submit:active, .submit:focus {
                        outline: none;
                        background-color: transparentize(#6b60e9, 0.8);
                      }
                      
                      .message {
                        margin: 0 auto 5rem;
                        max-width: 30rem;
                        text-align: center;
                        transition: 0.5s;
                        opacity: 1;
                        visibility: visible; 
                      }
                      
                      .messageText {
                        min-width: 30rem;
                        min-height: 3rem;
                        color: #6b60e9;
                      }                  
                    `}
                  </style>
                  <div className="subscribe">
                    <h2 className="heading">
                      {'Stay Up To Date'}
                    </h2>
                    <p className="paragraph">
                      {'We sometimes send out important updates regarding CameraKit. Provide your email if you are interested in very infrequent messages about progress, improvements, and changes.'}
                    </p>
                    <form
                      className="form"
                      onSubmit={(event) => {
                        event.preventDefault();
                        subscribe({ EMAIL: this.email.value });
                      }}
                    >
                      <div className="inputWrapper">
                        <input ref={(input) => { this.email = input; }} name="email" placeholder="you@domain.com" className="input" type="email" required />
                        <button className="submit" type="submit">
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
