import React, { Component } from 'react';

class Instructions extends Component {
  render() {
    return (
      <div className="instructionContainer">
        <Instruction instructionText={this.props.team1Name + ": Space Bar"}/>
        <Instruction instructionText="Undo: Backspace"/>
        <Instruction instructionText={this.props.team2Name + ": Enter"}/>
      </div>
    );
  }
}

class Instruction extends Component {
  render() {
    return (
      <div className="instruction">
        {this.props.instructionText}
      </div>
    );
  }
}

export default Instructions;
