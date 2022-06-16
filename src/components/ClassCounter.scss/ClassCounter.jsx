import React from 'react';

export class ClassCounter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  handleReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div className="block">
        <h2 className="content likes">Значення лічильника(Класовий компонент):</h2>
        <h2 className="content likes">{this.state.count}</h2>
        <button
          onClick={this.handleIncrement}
          className="button is-success"
        >
          Count++
        </button>
        <button
          onClick={this.handleDecrement}
          className="button is-success"
        >
          Count--
        </button>
        <button
          onClick={this.handleReset}
          className="button is-success"
        >
          Reset
        </button>
      </div>
    );
  };
};