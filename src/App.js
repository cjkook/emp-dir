import React from "react";
import "./App.css";
import EmpCard from "./components/EmpCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Form from "./components/Form";
import TabMenu from "./components/TabMenu";
import Cartoons from "./Cartoons.json";
import CardColumns from "react-bootstrap/CardColumns";
import { Container } from "react-bootstrap";

// determine number of tabs/networks

class App extends React.Component {
  state = {
    search: "",
    Cartoons,
    results: [],
    networks: (function () {
      let networks = [];
      Cartoons.forEach((entry) => {
        if (!networks.includes(entry.network)) {
          networks.push(entry.network);
        }
      });
      return networks;
    })(),
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    console.log("mounted");
    console.log(this.state);
    this.setState({ results: Cartoons });
  }

  handleDelete = (id) => {
    const remainCartoons = this.state.Cartoons.filter((emp) => emp.id !== id);
    console.log(remainCartoons);
    this.setState({ Cartoons: remainCartoons, results: remainCartoons }, () => {
      console.log(this.state);
    });
  };

  handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    console.log(e.target);

    // Updating the input's state
    // * match up name attribute to state property
    this.setState(
      {
        [name]: value,
      },
      this.handleFilterName // pass function without calling
    );
  };

  handleFilterName = () => {
    let data = [];
    this.state.Cartoons.forEach((entry) => {
      if (entry.name.toLowerCase().includes(this.state.search.toLowerCase())) {
        data.push(entry);
      }
    });
    this.setState({ results: data });
  };

  handleFilterNetwork = (k) => {
    this.setState({ results: Cartoons }, () => {
      if(k !== "All") {
        this.setState({
          results: this.state.results.filter((entry) => entry.network === k),
        });
      }
    });
  };

  render() {
    return (
      <>
        <Title>Cartoons</Title>
        <TabMenu
          networks={this.state.networks}
          handleFilterNetwork={this.handleFilterNetwork}
        />
        <Wrapper>
          <Form
            search={this.state.search}
            handleInputChange={this.handleInputChange}
          />
        </Wrapper>

        <Container>
          <CardColumns>
            {this.state.results.map((toon) => (
              <EmpCard
                name={toon.name}
                image={toon.image}
                job={toon.occupation}
                home={toon.location}
                network={toon.network}
                key={toon.id}
                handleDelete={() => this.handleDelete(toon.id)}
              />
            ))}
          </CardColumns>
        </Container>
      </>
    );
  }
}

export default App;
