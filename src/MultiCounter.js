import React from "react";

class MultiCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterA: 0,
      counterB: 0,
      counterC: 0
    };
  }

  render() {
    let result =
      this.state.counterA + this.state.counterB + this.state.counterC;
    let btn1 = (
      <button
        onClick={() => {
          this.setState({
            counterA: this.state.counterA + 1
          });
        }}
      >
        +
      </button>
    );

    let btn2 = (
      <button
        onClick={() => {
          this.setState({ counterA: this.state.counterA - 1 });
        }}
      >
        -
      </button>
    );

    if (this.state.counterA >= 10) btn1 = null;

    if (this.state.counterA <= 0) btn2 = null;

    let btn3 = (
      <button
        onClick={() => {
          this.setState({
            counterB: this.state.counterB + 1
          });
        }}
      >
        +
      </button>
    );

    let btn4 = (
      <button
        onClick={() => {
          this.setState({ counterB: this.state.counterB - 1 });
        }}
      >
        -
      </button>
    );

    if (this.state.counterB >= 10) btn3 = null;

    if (this.state.counterB <= 0) btn4 = null;

    let btn5 = (
      <button
        onClick={() => {
          this.setState({
            counterC: this.state.counterC + 1
          });
        }}
      >
        +
      </button>
    );

    let btn6 = (
      <button
        onClick={() => {
          this.setState({ counterC: this.state.counterC - 1 });
        }}
      >
        -
      </button>
    );

    if (this.state.counterC >= 10) btn5 = null;

    if (this.state.counterC <= 0) btn6 = null;

    if (result === 18) btn1 = btn3 = btn5 = null;

    return (
      <div className="MultiCounter">
        <div className="MultiCounter--item">
          <span>counterA: {this.state.counterA}</span>
          {btn1}
          {btn2}
        </div>
        <div className="MultiCounter--item">
          <span>counterB: {this.state.counterB}</span>
          {btn3}
          {btn4}
        </div>
        <div className="MultiCounter--item">
          <span>counterC: {this.state.counterC}</span>
          {btn5}
          {btn6}
        </div>
        <div className="MultiCounter--result">sum: {result}</div>
      </div>
    );
  }
}
export default MultiCounter;
