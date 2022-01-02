import { Navbar, Container, Nav } from 'react-bootstrap';
import '../css/navbar.css';
import { BsGithub, BsLinkedin } from "react-icons/bs";

const NavbarComponent = () => {
    return ( 
        <Navbar fixed="top" variant="dark" expand="lg">
            <Container className="justify-content-around text-light">
                <Navbar.Brand href="./">亨利 | Henry </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse className="justify-content-around wrapper"  id="basic-navbar-nav " style={{maxWidth: "800px"}}>
                    <Nav className="justify-content-start" >
                        <Nav.Item>
                            <Nav.Link href="./about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="./blogs">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="./portfolio">Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="./contact" > Contact</Nav.Link>
                        </Nav.Item>
                        <ul className='social_links'>
                            <li style={{margin:"5px", paddingTop:"8px"}}>
                                <a target="_blank" href="https://github.com/HenryJavangwe" rel="noopener noreferrer"> <BsGithub/> </a>
                            </li>
                            <li style={{margin:"5px", paddingTop:"8px"}}>
                                <a target="_blank" href="https://www.linkedin.com/in/henry-javangwe-portfolio/" rel="noopener noreferrer"><BsLinkedin/> </a>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavbarComponent;