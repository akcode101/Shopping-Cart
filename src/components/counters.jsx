import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters-rendered");
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onNewCounter
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        <button onClick={onNewCounter} className="btn btn-primary btn-sm m-2">
          Add new counter!
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            // value={counter.value}
            // id={counter.id}
            // selected={counter.selected}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onNewCounter={onNewCounter}
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
//selected attribute not needed
