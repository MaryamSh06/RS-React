import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import GeneralTab from "../../TabsScreens/GeneralTab";
import "./NewConnectionstyle.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import OptionsTabScreen from "../../TabsScreens/OptionsTabScreen";
import ExpertTabScreen from "../../TabsScreens/ExpertTabScreen";

const NewConnectionModal = ({
  showConnectionModal,
  setShowConnectionModal,
}) => {
  const modalBodyStyle = {
    height: "42rem",
    overflow: "auto",
  };

  const [activeTab, setActiveTab] = useState("general");
  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };
  return (
    <>
      <Modal
        show={showConnectionModal}
        onHide={() => setShowConnectionModal(false)}
        animation={true}
        centered
        className="modal-connection"
      >
        <Modal.Header closeButton style={{ padding: "4px" }}>
          <Modal.Title>Properties</Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalBodyStyle}>
          <Tabs
            activeKey={activeTab}
            onSelect={handleTabSelect}
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="general" title="General" tabClassName="custom-tab">
              <GeneralTab />
            </Tab>
            <Tab eventKey="options" title="Options" tabClassName="custom-tab">
              <OptionsTabScreen />
            </Tab>
            <Tab eventKey="expert" title="Expert" tabClassName="custom-tab">
              <ExpertTabScreen />
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer className="modal-bottom-container">
          <Button
            className="cancel-button"
            onClick={() => setShowConnectionModal(false)}
          >
            Cancel
          </Button>
          <Button className="ok-button">OK</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewConnectionModal;
