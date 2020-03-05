import React from "react";
import "./App.css";
import Header from "./header";
import Hangman from "./hangman";
import Form from "./form";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWord: "",
      game: false,
      warning: false
    };
  }
  changeWord = e => {
    this.setState({ currentWord: e.target.value });
  };

  startGame = () => {
    if (
      this.state.currentWord.includes(" ") ||
      this.state.currentWord.length === 0
    )
      this.setState({ warning: true });
    else {
      let word = this.state.currentWord;
      word = word.toUpperCase().split("");
      this.setState({ currentWord: word, game: true });
    }
  };

  render() {
    return (
      <div className="App">
        <Header started={this.state.game} />
        {this.state.game ? (
          <Hangman answer={this.state.currentWord} />
        ) : (
          <Form changeWord={this.changeWord} startGame={this.startGame} />
        )}
      </div>
    );
  }
}

export default App;
