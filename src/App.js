import React, { Component } from "react";

import NavBar from "./components/navbar";
import "./App.css";
import Counter from "./components/counter";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    possibleId: 5,
    totalCost: 0
  };

  // constructor(props) {
  //   super(props);
  //   console.log("App-Constructor", this.props);
  // }

  constructor() {
    super();
    console.log("App-Constructor");
  }

  componentDidMount() {
    //Ajax call
    //this.setState({movie})
    console.log("App-Mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    var cost = this.state.totalCost;
    cost++;
    this.setState({ counters: counters, totalCost: cost });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    var cost = this.state.totalCost;
    cost--;
    this.setState({ counters: counters, totalCost: cost });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: counters, totalCost: 0 });
  };

  handleDelete = counterId => {
    //console.log("Event Handler Called", counterId);
    const correctCounter = this.state.counters.find(c => c.id == counterId);
    const currentCost = this.state.totalCost;
    const removedCost = correctCounter.value;
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({ counters: counters, totalCost: currentCost - removedCost }); //{counters}
  };

  handleNew = () => {
    const counters = this.state.counters;
    counters.push({ id: this.state.possibleId, value: 0 });
    const newId = this.state.possibleId + 1;
    this.setState({ counters: counters, possibleId: newId });
  };
  render() {
    console.log("App-rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          fullCost={this.state.totalCost}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onNewCounter={this.handleNew}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
