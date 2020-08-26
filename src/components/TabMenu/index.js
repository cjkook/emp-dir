import React from "react";
import "./style.css";
import { Tabs, Tab } from "react-bootstrap";

function TabMenu(props) {
  return (
    <Tabs defaultActiveKey="All" onSelect={(k) => {
      props.handleFilterNetwork(k)
    }}>
      <Tab eventKey="All" title="All"></Tab>
      {props.networks.map((network, i) => (
        <Tab 
          eventKey={network} 
          title={network} 
          key={i}
        />
      ))}
    </Tabs>
  );
}

export default TabMenu;
