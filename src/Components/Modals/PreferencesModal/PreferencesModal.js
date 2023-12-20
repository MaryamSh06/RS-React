import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import "./Preferencesstyle.css";
import PrivacyScreen from "./PrivacyScreen";
import ExpertScreen from "./ExpertScreen";
import ProxyScreen from "./ProxyScreen";
import RecordingScreen from "./RecordingScreen";
import TroubleShootingScreen from "./TroubleShootingScreen";

const PreferencesModal = ({ openPreferences, setOpenPreferences }) => {

  useEffect(() => {
    window?.ipcRendererApi?.openOfflineModal('open-preferences-modal', () => {setOpenPreferences(true);});

    return () => {
      window?.ipcRendererApi?.removeEventListener("modal-opened");
    }
  }, []);
  return (
    <>
      <Modal
        show={openPreferences}
        onHide={() => setOpenPreferences(false)}
        animation={true}
        centered
        dialogClassName="preference-modal"
      >
        <div className="modal-head">
          <Modal.Header
            closeButton
            className="preference-header"
            style={{ padding: "4px", border: "none" }}
          >
            <Modal.Title className="modal-head-title">
              Application Preferences
            </Modal.Title>
          </Modal.Header>
        </div>
        <Modal.Body style={{ backgroundColor: "white" }}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="privacy">
            <Row style={{ height: "60vh" }}>
              <Col sm={3} style={{ background: "white" }}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="privacy">Privacy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="appearance">Appearance</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="printing">Printing</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="proxy">Proxy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="recording">Recording</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="troubleshooting">
                      Troubleshooting
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="expert">Expert</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col
                sm={9}
                style={{ border: "1px solid #cccccc", borderLeft: "none" }}
              >
                <Tab.Content>
                  <Tab.Pane className="custom-tab-content" eventKey="privacy">
                    <PrivacyScreen />
                  </Tab.Pane>
                  <Tab.Pane
                    className="custom-tab-content"
                    eventKey="appearance"
                  >
                    <div className="appearance-checkbox-container">
                      <input
                        type="checkbox"
                        className="privacy-custom-checkbox"
                      />
                      <label className="privacy-label-text">
                        Allow VNC Viewer to close while keeping current
                        connection open
                      </label>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane className="custom-tab-content" eventKey="printing">
                    <div className="appearance-checkbox-container">
                      <input
                        type="checkbox"
                        className="privacy-custom-checkbox"
                      />
                      <label className="privacy-label-text">
                        Share my default printer
                      </label>
                    </div>
                    <div className="printing-checkbox-container">
                      <input
                        type="checkbox"
                        className="privacy-custom-checkbox"
                      />
                      <label className="privacy-label-text">
                        Make it the default printer on VNC Server
                      </label>
                    </div>
                    <p className="printing-paragraph">
                      There is no default printer
                    </p>
                    <p className="privacy-label-text">
                      Printing will not be available unless you install a
                      printer before you connect to VNC Server{" "}
                    </p>
                  </Tab.Pane>
                  <Tab.Pane className="custom-tab-content" eventKey="proxy">
                    <ProxyScreen />
                  </Tab.Pane>
                  <Tab.Pane className="custom-tab-content" eventKey="recording">
                    <RecordingScreen />
                  </Tab.Pane>
                  <Tab.Pane
                    className="custom-tab-content"
                    eventKey="troubleshooting"
                  >
                    <TroubleShootingScreen />
                  </Tab.Pane>
                  <Tab.Pane className="custom-tab-content" eventKey="expert">
                    <ExpertScreen />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Modal.Body>
        <hr />
        <Modal.Footer className="preference-modal-bottom-container">
          <Button
            className="next-button"
            onClick={() => setOpenPreferences(false)}
          >
            Apply
          </Button>
          <Button
            className="cancel-button"
            onClick={() => setOpenPreferences(false)}
          >
            Cancel
          </Button>
          <Button
            className="cancel-button"
            onClick={() => setOpenPreferences(false)}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PreferencesModal;
