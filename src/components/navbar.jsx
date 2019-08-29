import React, { Component } from "react";

const NavBar = ({ totalCounters, fullCost }) => {
  console.log("Navbar-rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          Total Number of Items: {totalCounters} ; Total Cost of Items: $
          {fullCost}
        </span>
      </a>
    </nav>
  );
};
// class NavBar extends Component {
//   //state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
