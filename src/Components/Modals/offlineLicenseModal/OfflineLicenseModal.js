import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OfflineLicensestyle.css";
import VncLogo from "../../../Vnc.png"
const OfflineLicenseModal = ({ show, setShow }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        animation={true}
        centered
        className="offline-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Apply Offline License</Modal.Title>
        </Modal.Header>
        <div className="offline-header">
          <p>Apply an offline license to VNC viewer</p>
          <img src={VncLogo} alt="logo" width={40} height={40} />
        </div>
        <hr></hr>
        <div className="content-container">
          <div className="offline-subheading">
            <p>
             To license VNC Viewer offline, donwload the offline license file found on the Deployment page of your RealVNC account and apply it below.
            </p>
          </div>
          <div>
            <div className="fields-wrapper">
              <label>Choose offline license file:</label>
              <div>
                <input type="text"/>
                <Button className="cancel-button">Browse</Button>
              </div>
            </div>
          </div>

          <div className="bottom-content">
            <p className="bottom-headings">By licensing VNC Viewer you accept the <a href="#">T&C</a> and <a href="#">privacy policy.</a>  </p>
            <p className="bottom-headings" >Please note that we may attempt to verify your license by contacting RealVNC services</p>
          </div>
        </div>
    
         <hr />
        <Modal.Footer  className='offline-modal-bottom-container'>
            <Button className="next-button" onClick={() => setShow(false)}>
              Next
            </Button>
            <Button className="cancel-button" onClick={() => setShow(false)}>
              Cancel
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OfflineLicenseModal;
