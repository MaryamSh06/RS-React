import React, { useState } from "react";
import "./Header/HomePage.css";
import { LiaDesktopSolid } from "react-icons/lia";
// import Modal from 'react-modal';
import Sidebars from "./Header/Sidebar";
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser } from "react-icons/fa6";
import { CiCircleQuestion } from "react-icons/ci";
import { IoMdEyeOff } from "react-icons/io";

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
  // const [modalIsOpen, setIsOpen] = useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }



  // function closeModal() {
  //   setIsOpen(false);
  // }

  // return (
  //   <>
  //     <div
  //     style={{
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       height: "100vh", // Set the height of the container to the full viewport height
  //     }}
  //   >
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //       }}
  //     >
  //       <div style={{ width: "200px", height: "200px" }}>
  //         <LiaDesktopSolid size={200} />
  //       </div>

  //       <div>
  //         <div style={{ textAlign: "center" }}>
  //           <p style={{ fontFamily: "serif" }}>
  //             There are no computers in your address book at present.
  //           </p>{" "}
  //           <br />
  //           <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
  //             Sign in to your RealVNC account to automatically discover team
  //             computers.
  //           </p>{" "}
  //           <br />
  //           <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
  //             Alternatively, enter the VNC Server IP address or hostname in the
  //             Search bar to connect directly
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>





  //   <div>
  //     <button onClick={openModal}>Open Modal</button>
  //     <Modal
  //       isOpen={modalIsOpen}

  //       onRequestClose={closeModal}
  //       style={customStyles}
  //       contentLabel="Example Modal"
  //     >
  //       <h2 >Hello</h2>
  //       <button onClick={closeModal}>close</button>
  //       <div>I am a modal</div>
  //       <form>
  //         <input />
  //         <button>tab navigation</button>
  //         <button>stays</button>
  //         <button>inside</button>
  //         <button>the modal</button>
  //       </form>
  //     </Modal>
  //   </div>

  //   </>
  // );








// }



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <div className="signin-wrapper">
            <p>Sign in to your remote software account</p>
            <FaUser size={35} fill="#858d96" />
          </div>
          <hr></hr>
          <div className="content-container">
            <div className="signin-heading">
              <p>Sign in using the email address that you used to create  your remote software account online.</p>
              <CiCircleQuestion size={23} fill="#323030" />
            </div>
            <div >
              <div className="fields-wrapper">
                <label>Email</label>
                <input type="text" placeholder="e.g user@exmaple.com" />
              </div>
              <div className="fields-wrapper">
                <label>Password</label>
                <div>
                <input type="text" placeholder="e.g ***********" />
                <IoMdEyeOff size="25" />
                </div>
              </div>
              <div className="forget-pass">
                <a>Forget password?</a>
              </div>
            </div>
            <div className="or">--------- or ---------</div>
            <button className="signin-btn">Sign in with your organization</button>
          </div>
        <Modal.Footer>
          <a>Don't have an account?</a>
          <div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign in
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
  // render(<Example/>)
}

export default HomePage;
