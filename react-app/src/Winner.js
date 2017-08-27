import React, { Component } from 'react';

class Winner extends Component {
  render() {
    return (
      <div className="winMessage">
        Congratulations {this.props.teamName}!
      </div>
    );
  }
}

export default Winner;
