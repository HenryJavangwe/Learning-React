import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import LoginButton from "../auth/login";
import LogoutButton from "../auth/logout";
import { useAuth0 } from "@auth0/auth0-react";

import "../css/navbar.css";

const NavbarComponent = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Navbar fixed="top" variant="dark" expand="lg">
      <Container className="justify-content-around text-light">
        <Navbar.Brand as={Link} to="./">
          亨利 | Henry{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          className="justify-content-around "
          id="basic-navbar-nav "
          style={{ maxWidth: "800px" }}
        >
          <Nav className="justify-content-start">
            <Nav.Item>
              <Nav.Link as={Link} to="./about">
                About
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link as={Link} to="./blogs">
                Blog
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link as={Link} to="./portfolio">
                Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="./contact">
                {" "}
                Contact
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav style={{"padding":"8px"}}>
              <span style={{"marginLeft": "10px"}}><a
                  target="_blank"
                  href="https://github.com/HenryJavangwe"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <BsGithub />{" "}
                </a></span>
                <span style={{"marginLeft": "10px"}}><a
                  target="_blank"
                  href="https://www.linkedin.com/in/henry-javangwe-portfolio/"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin />{" "}
                </a></span>
              </Nav>
            </Nav.Item>
            {isAuthenticated && (
              <Nav.Item style={{ textAlign: "end"}}>
                <Nav.Link>
                  <Link to={"/profile"} className="profile">
                    Profile
                  </Link>
                </Nav.Link>
              </Nav.Item>
            )}
            {isAuthenticated ? (
              <Nav.Item style={{ textAlign: "end", minWidth: "120px" }}>
                <Nav style={{"padding":"0px"}}>
                  <LogoutButton />
                </Nav>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Nav style={{"padding":"0px"}}>
                  <LoginButton />
                </Nav>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
