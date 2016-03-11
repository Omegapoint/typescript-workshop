import React = require("react");

class Counter extends React.Component<{}, {value: number}> {
  state = {value: 0};

  decrement() {
    this.setState({value: this.state.value - 1});
  }

  increment() {
    this.setState({value: this.state.value + 1});
  }

  render() {
    return (
      <div className="panel panel-default" style={{textAlign: "center"}}>
        <div className="panel-heading">
          <h3 className="panel-title">Counter</h3>
        </div>
        <div className="panel-body">
          <button type="button" className="btn btn-default" onClick={() => this.decrement()}>-</button>
          <span style={{fontWeight: "bold", margin: "12px"}}>{this.state.value}</span>
          <button type="button" className="btn btn-default" onClick={() => this.increment()}>+</button>
        </div>
      </div>
    );
  }
}

export = Counter;
