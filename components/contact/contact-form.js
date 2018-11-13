import React from 'react';
import isomorphicFetch from 'isomorphic-unfetch';
import { Transition } from 'react-spring';

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
        this.setState({ success: true, message: 'Thanks. Your message has been recieved. We\'ll get back to you shortly.' });
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
      <section className="intro">
        <style jsx>{`
          .intro {
            display: flex;
            flex-direction: column;
            position: relative;
            min-height: 100vh;
            padding-top: 8rem;
            text-align: center;
            background-image: linear-gradient(to bottom, #CCCFEA 0%, #FFFFFF 100%);
          }

          .heading {
            font-size: 2.4rem;
            font-weight: 300;
          }

          .container-small {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 15vh;
          }
          
          .container {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 45vh;
          }
          
          .flexWrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
          
          .contactWrapper {
            background-color: #fff;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            border-radius: 6px;
            overflow: hidden;
            margin: 0 auto;
            width: 70%;
            max-width: 500px;
          }
          
          .textAreaWrapper {
            height: 7rem; 
          }
          
          .input {
            min-width: 0;
            width: 100%;
            font-size: 1.1rem;
            padding: 1.2rem 1.4rem;
            border: none;
          }

          .input:active, .input:focus {
            outline: none;
          }
          
          .textArea {
            height: 100%;
            resize: none;
          }
          
          .submitButton {
            background-color: #fff;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            border-radius: 6px;
            margin: 0 auto;
            padding: 0px;
            width: 150px;
            height: 50px;
            font-size: 1rem;
            font-weight: 600;
            color: #6b60e9;
            text-transform: uppercase;
            transition: all .3s ease;
            outline: none;
            border: none;
          }
          
          .submitButton:hover, .submitButton:active, .submitButton:focus {
            outline: none;
            background-color: transparentize(#6b60e9, 0.8);
            cursor: pointer;
          }

          .message {
            margin-top: 0.5rem;
            font-weight: 400;
            font-size: 1.2rem;
            color: #3E445B;
            transition: .3s ease;
            opacity: 0;
          }
          
          .successMessage {
            margin-top: 6rem;
            margin: 6rem auto auto auto;
            max-width: 30rem;
            font-weight: 400;
            font-size: 1.5rem;
            color: #3E445B;
            transition: .3s ease;
            opacity: 1;
          }
          
          .show {
            opacity: 1;
          }
          
          @media (min-width: 48em) {
            .intro {
              padding: 20rem 0;
            }
          }
        `}</style>
        <div className="container-small">
          <div className="content">
            <h1 className="heading">
              {'Contact Us'}
            </h1>
          </div>
        </div>
        <div className="container">
          <Transition
            from={{ opacity: 0, height: 0 }}
            enter={{ opacity: 1, height: 400 }}
            leave={{ opacity: 0, height: 0 }}
          >
            {success === false
              ? style => (
                <div>
                  <form
                    className="form"
                    onSubmit={this.handleSubmit.bind(this)}
                  >
                    <div className="container">
                      <div className="contactWrapper">
                        <input
                          className="input"
                          ref={(input) => { this.name = input; }}
                          placeholder="Name"
                          name="name"
                          type="text"
                          required
                        />
                      </div>
                      <div className="contactWrapper">
                        <input
                          className="input"
                          ref={(input) => { this.email = input; }}
                          placeholder="Email"
                          name="email"
                          type="email"
                          required
                        />
                      </div>
                      <div className="contactWrapper">
                        <input
                          className="input"
                          ref={(input) => { this.company = input; }}
                          placeholder="Company"
                          name="company"
                          type="text"
                          required
                        />
                      </div>
                      <div className="contactWrapper textAreaWrapper">
                        <textarea
                          className="input textArea"
                          ref={(input) => { this.message = input; }}
                          placeholder="Message"
                          name="message"
                          type="textarea"
                          required
                        />
                      </div>
                      <button className="submitButton" type="submit">
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
                  <p className="successMessage">
                    {message}
                  </p>
                </div>
              )
            }
          </Transition>
        </div>
        <p className={`message ${message && success === false ? 'show' : ''}`}>
          {message}
        </p>
      </section>
    );
  }
}

export default ContactForm;
