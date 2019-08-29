import React, { Component } from "react";
import Price from "./counter";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value
  //     //imageUrl: "https://picsum.photos/200",
  //     //tags: ["tag1", "tag2", "tag3"]
  //   };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  componentDidUpdate(prevProps, prevState) {
    console.log("previous props", prevProps);
    console.log("previous state", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }

  componentWillUnmonut() {
    console.log("Component will unmount");
  }

  styles = {
    fontSize: "10",
    fontWeight: "bold"
  };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   handleIncrement = product => {
  //     //console.log("Button was incremented!", this);
  //     console.log(product);
  //     this.setState({ value: this.state.value + 1 });
  //   };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    //console.log("props", this.props);
    //console.log(this.props);
    console.log("Counter-rendered");
    let classes = this.getBadgeClasses();
    return (
      <div>
        {/* {this.props.children} */}
        <price className="m-10"> </price>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          //onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment Price ($)
        </button>
        {/*
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
        */}
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement Price ($)
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete Item
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = " badge m-2 badge-";
    classes += this.props.counter.value <= 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    //return value === 0 ? <h1>Zero</h1> : value;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
