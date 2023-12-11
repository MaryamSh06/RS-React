import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import GeneralTab from "../TabsScreens/GeneralTab";
import "../Modals/TestModalConnectionstyle.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const TestModalConnection = () => {
  const [activeTab, setActiveTab] = useState("home");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton style={{ padding: "4px" }}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            activeKey={activeTab}
            onSelect={handleTabSelect}
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              {activeTab === "home" && <GeneralTab />}
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <p>Tab content for Profile</p>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <p>Tab content for Contact</p>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TestModalConnection;
