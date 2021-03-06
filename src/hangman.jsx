import React from "react";
import "./App.css";
import stage1 from "./hangmanPics/Stage1.png";
import stage2 from "./hangmanPics/Stage2.png";
import stage3 from "./hangmanPics/Stage3.png";
import stage4 from "./hangmanPics/Stage4.png";
import stage5 from "./hangmanPics/Stage5.png";
import stage6 from "./hangmanPics/Stage6.png";
import stage7 from "./hangmanPics/Stage7.png";
import sound from "./BackgroundMusic.mp3";

class Hangman extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      guessed: [],
      mistake: 0
    };
  }
  addToGuessed = letter => {
    let arr = this.state.guessed;
    let guessCount = this.state.mistake;
    arr.push(letter);
    if (!this.props.answer.includes(letter)) guessCount += 1;

    this.setState({ guessed: arr, mistake: guessCount });
  };

  render() {
    let man = stage1;
    if (this.state.mistake === 1) man = stage2;
    if (this.state.mistake === 2) man = stage3;
    if (this.state.mistake === 3) man = stage4;
    if (this.state.mistake === 4) man = stage5;
    if (this.state.mistake === 5) man = stage6;
    if (this.state.mistake === 6) man = stage7;

    return (
      <div>
        <div>
          <audio src={sound} autoPlay className="music" />
        </div>
        {this.state.mistake === 6 ? (
          <div>
            <img src={stage7} alt="stage7" />
            <div className="answerBoard">
              {this.props.answer.map(letter => (
                <div className="answerLetter">{letter}</div>
              ))}
            </div>
            <div className="losing">YOU LOST!</div>
            <button
              onClick={this.props.replay}
              className="againButton"
              style={{
                display: "block",
                marginRight: "auto",
                marginLeft: "auto"
              }}
            >
              Play Again?
            </button>
          </div>
        ) : (
          <div>
            <img src={man} alt="stage1" id="image" />

            <div className="answerBoard">
              {this.props.answer.map(letter => (
                <div className="answerLetter">
                  {this.state.guessed.includes(letter) ? (
                    <div>{letter}</div>
                  ) : (
                    <div style={{ fontWeight: "bolder" }}>__</div>
                  )}
                </div>
              ))}
            </div>
            {this.props.answer.every(letter =>
              this.state.guessed.includes(letter)
            ) ? (
              <div className="winning">
                <div>YOU WON!</div>
                <button onClick={this.props.replay} className="againButton">
                  Play Again?
                </button>
              </div>
            ) : (
              <div className="letterBoard">
                {this.state.letters.map(letter => (
                  <div key={letter} className="letterWrapper">
                    {this.state.guessed.includes(letter) ? null : (
                      <div
                        onClick={() => this.addToGuessed(letter)}
                        className="boardLetter"
                      >
                        {letter}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Hangman;
