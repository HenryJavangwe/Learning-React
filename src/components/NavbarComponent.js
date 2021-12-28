import { Navbar, Container, Nav } from 'react-bootstrap';
import '../css/navbar.css'
import { BsGithub, BsLinkedin } from "react-icons/bs";

const NavbarComponent = () => {
    return ( 
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container className="justify-content-around text-light">
                <Navbar.Brand href="#home">亨利 | Henry </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse className="justify-content-around wrapper"  id="basic-navbar-nav " style={{maxWidth: "800px"}}>
                    <Nav className="justify-content-start" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3" > Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <ul className='social_links' style={{listStyleType:"none", display:"flex"}}>
                        <li style={{margin:"5px", paddingTop:"8px"}}>
                            <a href="./GitHub"> <BsGithub/> </a>
                        </li>
                        <li style={{margin:"5px", paddingTop:"8px"}}>
                            <a href="./GitHub"><BsLinkedin/> </a>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavbarComponent;