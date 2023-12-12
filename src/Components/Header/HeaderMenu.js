import React, { useState } from 'react'
import { Navbar, Nav,  Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewConnectionModal from '../Modals/NewConnectionModal/NewConnectionModal';
import SigninModal from '../Modals/SigninModal.js/SigninModal';
import OfflineLicenseModal from '../Modals/offlineLicenseModal/OfflineLicenseModal';
import ImportConnectionModal from '../Modals/ImportConnectionModal/ImportConnectionModal';
import PreferencesModal from '../Modals/PreferencesModal/PreferencesModal';
const HeaderMenu = () => {
  const [show, setShow] = useState(false);
  const [showConnectionModal, setShowConnectionModal] = useState(false);
  const [offlineModal, setOfflineModal]=useState(false)
  const [importModal, setImportModal]=useState(false)
  const [openPreferences, setOpenPreferences]=useState(false)
  
  return (
   <>
  
  <Navbar bg="secondary" expand="lg" fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
          <Nav className="mr-auto ms-4">
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} id="file-dropdown" style={{ color: 'white', fontSize:"14px" }}>
                File
              </Dropdown.Toggle>
              <Dropdown.Menu style={{fontSize:"13px", background:"#d8d8d8"}} >
                <Dropdown.Item onClick={()=>setShowConnectionModal(true)}>New connection</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
                <Dropdown.Item >Rename</Dropdown.Item>
                <Dropdown.Item>Delete</Dropdown.Item>
                <Dropdown.Item>Duplicate</Dropdown.Item>
                <Dropdown.Item >Properties</Dropdown.Item>
                <Dropdown.Item onClick={()=>setImportModal(true)} >Import connection</Dropdown.Item>
                <Dropdown.Item >Export connection</Dropdown.Item>
                <Dropdown.Item onClick={()=>setOfflineModal(true)} >Apply offline license</Dropdown.Item>
                <Dropdown.Item onClick={()=>setOpenPreferences(true)}>preferences</Dropdown.Item>
                <Dropdown.Item >Exit</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} id="view-dropdown" style={{ color: 'white', fontSize:"14px" }}>
                View
              </Dropdown.Toggle>
              <Dropdown.Menu style={{fontSize:"13px", background:"#d8d8d8"}}>
                <Dropdown.Item >Icons</Dropdown.Item>
                <Dropdown.Item >Details</Dropdown.Item>
                <Dropdown.Item >Sort by</Dropdown.Item>
                <Dropdown.Item >Filter</Dropdown.Item>
                <Dropdown.Item >Refresh</Dropdown.Item>
                <Dropdown.Item >Show sidebar</Dropdown.Item>
                <Dropdown.Item >Show status bar</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} id="help-dropdown" style={{ color: 'white', fontSize:"14px" }}>
                Help
              </Dropdown.Toggle>
              <Dropdown.Menu style={{fontSize:"13px", background:"#d8d8d8"}} >
                <Dropdown.Item >Real VNC on web</Dropdown.Item>
                <Dropdown.Item>Technical support</Dropdown.Item>
                <Dropdown.Item >Servic status</Dropdown.Item>
                <Dropdown.Item >Help connecting</Dropdown.Item>
                <Dropdown.Item >About</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>


   <NewConnectionModal showConnectionModal={showConnectionModal} setShowConnectionModal={setShowConnectionModal} />
   <OfflineLicenseModal show={offlineModal} setShow={setOfflineModal} />
   <ImportConnectionModal importModal={importModal} setImportModal={setImportModal} />
   <PreferencesModal  openPreferences={openPreferences}  setOpenPreferences={setOpenPreferences} />
   </>
  )
}

export default HeaderMenu