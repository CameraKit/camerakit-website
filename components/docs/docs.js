import React from 'react';

class Docs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <section>
        <div>
          <h1>
            {'Welcome to our new Docs'}
          </h1>
          <h3>
            {'Documentation for all version of CameraKit coming soon.'}
          </h3>
        </div>
      </section>
    );
  }
}

export default Docs;
