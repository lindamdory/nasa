// import { Navbar, Nav } from "react-bootstrap";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaRegEnvelope,
  FaPhone,
} from "react-icons/fa";

const FooterComponent = () => {
  return (
    <>
      <footer className="footer">
        <FaRegEnvelope />
        <FaPhone />
        <FaFacebookF />
        <FaLinkedinIn />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </footer>
      {/* <Navbar
        className="footer"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Nav className="mr-auto">
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
        </Nav>
      </Navbar> */}
    </>
  );
};

export default FooterComponent;
