import React, { Component } from "react";
import "./style.css";

function Form(props) {
  return (
    <div>
        <form className="form">
          <div className="input-group input-group-sm">
            <input
              className="form-control"
              aria-describedby="basic-addon1"
              name="search"
              onChange={props.handleInputChange}
              type="text"
              placeholder="Search by name"
            />
          </div>
          
        </form>
      </div>
  )
}

<<<<<<< HEAD
=======

>>>>>>> parent of a955d6f... Updates
export default Form;
