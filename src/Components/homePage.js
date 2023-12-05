import React, { useState } from "react";
import "./Header/HomePage.css";
import { LiaDesktopSolid } from "react-icons/lia";
import Modal from 'react-modal';
import Sidebars from "./Header/Sidebar";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color:"red",
    background:"black"
  },
};

const HomePage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Set the height of the container to the full viewport height
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "200px", height: "200px" }}>
          <LiaDesktopSolid size={200} />
        </div>

        <div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "serif" }}>
              There are no computers in your address book at present.
            </p>{" "}
            <br />
            <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
              Sign in to your RealVNC account to automatically discover team
              computers.
            </p>{" "}
            <br />
            <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
              Alternatively, enter the VNC Server IP address or hostname in the
              Search bar to connect directly
            </p>
          </div>
        </div>
      </div>
    </div>





    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
      
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 >Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
    
    </>
  );
};

export default HomePage;
