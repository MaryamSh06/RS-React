import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser } from "react-icons/fa6";
import { CiCircleQuestion } from "react-icons/ci";
import { IoMdEyeOff } from "react-icons/io";
import "./SigninModalstyle.css";

const SigninModal = () => {
  const [subModal, setSubModal] = useState(false);

    
  return (
   <>
   
      <Modal
      //  show={show} 
      // onHide={()=>setShow(false)} animation={true} 
      centered className='signin-modal'>
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
            <Button variant="primary" onClick={()=>setSubModal(true)} className="signin-btn">Sign in with your organization</Button>
          </div>
        <Modal.Footer>
          <a>Don't have an account?</a>
          <div>
          <Button variant="secondary"
          //  onClick={()=>setShow(false)}
           >
            Close
          </Button>
          <Button variant="primary" 
          // onClick={()=>setShow(false)}
          >
            Sign in
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal show={subModal} onHide={()=>setSubModal(false)} animation={true} centered>
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
          <Button variant="secondary" onClick={()=> setSubModal(false)}>
            Close
          </Button>
          <Button variant="primary" >
            OK
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default SigninModal