import React from "react";
import "./style.css";
import { Tabs, Tab } from "react-bootstrap";

function TabMenu({ networks, handleFilterNetwork }) {
  return (
    <Tabs defaultActiveKey="All" onSelect={handleFilterNetwork}>
      <Tab eventKey="All" title="All"></Tab>
      {networks.map((network, i) => (
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
