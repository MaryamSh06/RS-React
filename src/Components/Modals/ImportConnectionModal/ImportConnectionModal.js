import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImportModalstyle.css";
import VncLogo from "../../../Vnc.png"

const ImportConnectionModal = ({importModal,setImportModal}) => {
  return (
   <>
   
   <Modal
        show={importModal}
        onHide={() => setImportModal(false)}
        animation={true}
        centered
        className="import-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Import Connections</Modal.Title>
        </Modal.Header>
        <div className="import-header">
          <p>Choose import directory</p>
          <img src={VncLogo} alt="logo" width={40} height={40} />
        </div>
        <hr></hr>
        <div className="content-container">
          <div>
            <div className="fields-wrapper">
              <label>Choose offline license file:</label>
              <div>
                <input type="text"/>
                <Button className="cancel-button">Browse</Button>
              </div>
            </div>
          </div>
        </div>
    
         <hr />
        <Modal.Footer  className='import-modal-bottom-container'>
            <Button className="next-button" onClick={() => setImportModal(false)}>
              Next
            </Button>
            <Button className="cancel-button" onClick={() => setImportModal(false)}>
              Cancel
            </Button>
        </Modal.Footer>
      </Modal>
   
   </>
  )
}

export default ImportConnectionModal