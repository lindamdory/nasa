import { Navbar, Nav } from "react-bootstrap";
import logo from "../styles/logo.png";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const HeaderComponent = () => {
  return (
    <>
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#">
          <img
            alt="logo"
            src={logo}
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Discover</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <FaFacebookF />
            </Nav.Link>
            <Nav.Link href="#">
              <FaLinkedinIn />
            </Nav.Link>
            <Nav.Link href="#">
              <FaInstagram />
            </Nav.Link>
            <Nav.Link href="#">
              <FaTwitter />
            </Nav.Link>
            <Nav.Link href="#">
              <FaYoutube />
            </Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h4 className="title">I NEED MY</h4>
      <h2 className="space">SPACE</h2>
      <h4 className="subtitle">Astronomy Picture of the Day</h4>
    </>
  );
};

export default HeaderComponent;
