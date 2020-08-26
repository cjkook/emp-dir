import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form className="form">
          <div className="input-group input-group-sm">
            {/* <span className="input-group-addon" id="sizing-addon1">
              Position
            </span> */}
            <input
              className="form-control"
              aria-describedby="basic-addon1"
              name="search"
              onChange={this.props.handleInputChange}
              type="text"
              placeholder="Search by name"
            />
          </div>
          
        </form>
      </div>
    );
  }
}

export default Form;
