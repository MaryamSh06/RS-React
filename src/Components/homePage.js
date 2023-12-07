import React, { useState } from "react";
import "./Header/HomePage.css";
import { LiaDesktopSolid } from "react-icons/lia";
<<<<<<< HEAD
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
=======
>>>>>>>  Modifying the new connection module into react-bootstrap instead of html css


<<<<<<< HEAD
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

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
=======
const HomePage = () => {
>>>>>>>  Modifying the new connection module into react-bootstrap instead of html css

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={true} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <div className="signin-wrapper">
            <p>Sign in to your remote software account</p>
            <FaUser size={35} fill="#858d96" />
          </div>
<<<<<<< HEAD
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
            <Button variant="primary" onClick={handleShow1} className="signin-btn">Sign in with your organization</Button>
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
      <Modal show={show1} onHide={handleClose1} animation={true} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign in: Organization identifier</Modal.Title>
        </Modal.Header>
          <div className="content-container">
            <div className="signin-heading">
              <span>Please provide your organization's OIDC indetifier - contact your system administrator for more information</span>
            </div>
            <div >
              <div className="fields-wrapper">
                <input type="text" placeholder="e.g user@exmaple.com" />
              </div>
            </div>
          </div>
        <Modal.Footer>
          <span></span>
          <div>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            OK
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
=======
        </div>
      </div>    
    </div>
>>>>>>>  Modifying the new connection module into react-bootstrap instead of html css
  );
  // render(<Example/>)
}

export default HomePage;
