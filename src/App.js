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
    this.setState({
      currentWord: e.target.value
    });
  };

  startGame = () => {
    let word = this.state.currentWord;
    word = word.toUpperCase().split("");
    if (
      word.some(letter =>
        [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(letter)
      ) ||
      word.length === 0
    )
      this.setState({ warning: true });
    else {
      this.setState({ currentWord: word, game: true, warning: false });
    }
  };

  replayGame = () => {
    this.setState({ currentWord: "", game: false });
  };

  render() {
    return (
      <div className="App">
        <Header started={this.state.game} />
        {this.state.warning ? (
          <div
            style={{
              fontSize: "170%",
              color: "red",
              fontFamily: "'Comic Sans MS'",
              fontWeight: "bolder"
            }}
          >
            No numbers or spaces buckaroo!
          </div>
        ) : null}
        {this.state.game ? (
          <Hangman answer={this.state.currentWord} replay={this.replayGame} />
        ) : (
          <Form changeWord={this.changeWord} startGame={this.startGame} />
        )}
      </div>
    );
  }
}

export default App;
