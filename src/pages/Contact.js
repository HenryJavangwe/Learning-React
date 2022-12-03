import { Container, Row, Col } from "react-bootstrap";
import {IconContext } from 'react-icons'
import {BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
import '../css/contact.css';

const Contact = () => {
    return ( 
        <Container fluid className="Contact_Hero mt-5">
            <div className="Contact_Hero_inner py-5">
                <h1>
                    Let's Connect!
                </h1>
                <Container className="text-center">
                    <div className="social_profiles text-center ">
                        <IconContext.Provider value={{ style: { fontSize: "25px" }, className: "mt-5 global-class-name" }}>
                            <Row>
                                <Col sm={12} md={4} lg={4}> 
                                    <a target="_blank" href="https://www.linkedin.com/in/henry-javangwe-portfolio/" rel="noopener noreferrer"><BsLinkedin  /></a>
                                </Col>
                                <Col sm={12} md={4} lg={4}>  
                                    <a target="_blank" href="https://github.com/HenryJavangwe" rel="noopener noreferrer"><BsGithub /> </a>
                                </Col>
                                <Col sm={12} md={4} lg={4}> 
                                    <a target="_blank" href="https://twitter.com/HenryJavangwe" rel="noopener noreferrer"><BsTwitter/> </a>
                                </Col>
                            </Row>
                        </IconContext.Provider>
                    </div>
                    <Row className="contact_info text-center"> 
                        <Col sm={12} md={6} lg={6} className="email_box">
                            <h5> Email me</h5>
                            <p >
                                henrysparks1@gmail.com
                            </p>
                        </Col>
                        <Col sm={12} md={5} lg={5} className="call_box">
                            <h5> Call me</h5>
                            <p >
                                (+27 ) 84 241 2298
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
}
 
export default Contact;