import React, { Component } from 'react';
import './App.css';
import Team from './Team';
import Winner from './Winner';
import Instructions from './Instructions'

class App extends Component {
  constructor() {
    super();

    this.state = {
      team1Name: "Red Team",
      team2Name: "Blue Team",
      history: [{
        team1Score: 6,
        team2Score: 6,
      }]
    };
  }

  currentScores = () => {
    return this.state.history[this.state.history.length - 1];
  }

  decrementTeam(teamNumber) {
    const oldScores = this.state.history[this.state.history.length - 1];

    if (this.gameOver()) {
      return;
    }

    let newScores = {}
    if (teamNumber === 1) {
      newScores = {
        team1Score: oldScores.team1Score - 1,
        team2Score: oldScores.team2Score,
      }
    } else if (teamNumber === 2) {
      newScores = {
        team1Score: oldScores.team1Score,
        team2Score: oldScores.team2Score - 1,
      }
    }

    this.setState((prevState, props) => ({
      history: prevState.history.concat(newScores)
    }));
  }

  undo() {
    if (this.state.history.length <= 1) {
      return;
    }

    this.setState((prevState, props) => ({
      history: this.state.history.slice(0, this.state.history.length - 1)
    }));
  }

  gameOver() {
    const scores = this.currentScores();
    return scores.team1Score <= 0 || scores.team2Score <= 0;
  }

  handleKeyup = (event) => {
    // Space decrements team 1's score
    if (event.keyCode === 32) {
      this.decrementTeam(1);
    }

    // Enter decrements team 2's score
    else if (event.keyCode === 13) {
      this.decrementTeam(2);
    }

    // backspace undoes the last move
    else if (event.keyCode === 8) {
      this.undo();
    }
  };

  // When this component is mounted, the whole page should listen for key
  // presses
  componentDidMount() {
    document.addEventListener("keyup", this.handleKeyup, false);
  };
  componentWillUnmount() {
    document.removeEventListener("keyup", this.handleKeyup, false);
  };

  render() {
    return (
      <div className="App">
        <h1>Beer Pong 2.0</h1>
        <Team teamName={this.state.team1Name} score={this.currentScores().team1Score}/>
        <Team teamName={this.state.team2Name} score={this.currentScores().team2Score}/>
        <Instructions team1Name={this.state.team1Name} team2Name={this.state.team2Name}/>
        {this.gameOver() &&
          <Winner teamName={this.currentScores().team1Score === 0 ?
            this.state.team1Name : this.state.team2Name}/>
        }
      </div>
    );
  }
}

export default App;
