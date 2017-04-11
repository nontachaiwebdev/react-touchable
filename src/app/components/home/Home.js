import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <article>
          <p>
            This starter kit contains all the build tooling and configuration you
            need to kick off your next universal React project, whilst containing a
            minimal project set up allowing you to make your own architecture
            decisions (Redux/Mobx etc).
          </p>
        </article>
        {this.props.children}
      </div>
    );
  }
}