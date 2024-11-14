import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './navbar.css'

export default function Topbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>

        <Navbar.Brand href="#intro" className="d-flex align-items-center">
          <a href="#intro" className="logo">Portfolio</a>
        </Navbar.Brand>
        <div className="d-flex align-items-center">
          <div className="itemContainer d-flex align-items-center me-3">
          <PhoneIcon className="icon me-1" style={{ color: 'white' }}/>
            <span>+91 9956618961</span>
          </div>
          <div className="itemContainer d-flex align-items-center">
            <EmailIcon className="icon me-1" style={{ color: 'white' }} />
            <span>asthakt7@gmail.com</span>
          </div>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#intro">About Me</Nav.Link>
            <Nav.Link href="#qualifications">Qualifications</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';

// const Header = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
//       <Container>
//         <Navbar.Brand href="#home">Name</Navbar.Brand>
        
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#about">About Me</Nav.Link>
//             <Nav.Link href="#projects">Projects</Nav.Link>
//             <Nav.Link href="#skills">Skills</Nav.Link>
//             <Nav.Link href="#testimonials">Testimonials</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

