import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <div className="scoreboard">
        <div className="teamName">
          {this.props.teamName}
        </div>
        <div className="score">
          {this.props.score}
        </div>
      </div>
    );
  }
}

export default Team;
