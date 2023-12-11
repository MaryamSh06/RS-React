import React, { useState } from 'react'
import GeneralTab from '../../TabsScreens/GeneralTab'
import Modal from "react-modal";
import "../NewConnectionModal/Connectionstyle.css"
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "600px",
    right: "auto",
    height: "80vh",
    overflowY: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "lightgrey", // Set the background color to black
    padding: "0px", // Adjust the padding
    borderRadius:"10px"
  },
  overlay: {
    // Add overlay background color
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
};



const NewConnectionModal = () => {
    const [isOpen, setIsOpen] = useState(false);
const [activeTab, setActiveTab] = useState("general");

function openModal() {
  setIsOpen(true);
}

function closeModal() {
  setIsOpen(false);
}

  return (
   <>
   
   
   
   <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
          <div className="modal-content">
            <div class="modal-header">
              <div className="header-content">
                <p>Properties</p>
              </div>
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
            </div>

            <div className="tabs">
              <button
                onClick={() => setActiveTab("general")}
                className={activeTab === "general" ? "active" : ""}
              >
                General
              </button>
              <button
                onClick={() => setActiveTab("options")}
                className={activeTab === "options" ? "active" : ""}
              >
                Options
              </button>
              <button
                onClick={() => setActiveTab("expert")}
                className={activeTab === "expert" ? "active" : ""}
              >
                Expert
              </button>
            </div>
            <div className="tab-content">
              {activeTab === "general" && <GeneralTab />}
              {activeTab === "options" && (
                <div>
                  <p>Content for Tab 2</p>
                </div>
              )}
              {activeTab === "expert" && (
                <div>
                  <p>Content for Tab 3</p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button  onClick={closeModal} className="cancel-button">Cancel</button>
              <button className="ok-button">OK</button>
            </div>
          </div>
        </Modal>
      </div>
   </>
  )
}

export default NewConnectionModal