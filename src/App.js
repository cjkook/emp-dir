import React from "react";
import "./App.css";
import EmpCard from "./components/EmpCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Form from "./components/Form";
import employees from "./employees.json";


class App extends React.Component {
  state = {
    employees,
  };

  handleDelete = (id) => {
    const remainEmployees = this.state.employees.filter((emp) => emp.id !== id);
    console.log(remainEmployees)
    this.setState({ employees: remainEmployees });
  };

  handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    console.log(e.target);

    // Updating the input's state
    // * match up name attribute to state property
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <Title>Employees</Title>
        <Wrapper>
          <Form />
        </Wrapper>
        <Wrapper>
          {/* this is going to use conditional searches  */}
          {/* must reference the state  */}
          {this.state.employees.map((emp) => (
            <EmpCard
              name={emp.name}
              image={emp.image}
              job={emp.occupation}
              home={emp.location}
              key={emp.id}
              handleDelete={() => this.handleDelete(emp.id)}
            />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default App;
