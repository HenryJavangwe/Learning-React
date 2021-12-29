import { Container,Row, Col, ProgressBar } from "react-bootstrap";
import '../css/about.css';

const About = () => {
    return (  
        <Container fluid className="py-5 About_Hero"> 
            <div className="About_inner container text-center">
                <h1>
                    About Me
                </h1>
                <p>
                    Before my career, I am dad first to the most beautiful being on earth...my son.
                </p>
                <p>
                    Some of my greatest joys lie in savouring and capturing warm moments as well as wild and fast paced one. <br />
                    I enjoy my fair share of the outdoors, hiking and going on walks etc, also find great pleasure in tranquil spaces and lastly I appreciate art, whether its visual arts, literature, perfomance or abstract etc.
                </p>
                <p>
                    By profession, I am a Frontend Developer with a significant amount of experience developing beautiful, responsive, and stable functional Websites and Web Apps that satisfy high standards of web design and user experience best practices, as well as excelling in a fast-paced and highly collaborative work environment.
                </p>
                <p>
                    To give the best customer service and satisfaction, I enjoy identifying and responding to difficulties by designing and developing solutions, turning those solutions into code, and working across various third-party integrations, databases, and version control technology.
                </p>
                <p>
                    I am proficient in HTML, CSS, JavaScript, Bootstrap, Node.js, React and PHP, among other technologies.
                </p>
            </div>
            <div className="text-center container skills">
                    <h2>Skills</h2>
                    <Row>
                        <Col sm={6} md={6}  lg={6}>
                            <ProgressBar animated now={80} label={"HTML : 80%"}  />
                        </Col>
                        <Col sm={6} md={6}  lg={6}>
                            <ProgressBar animated now={80} label={"CSS : 80%"}  />
                        </Col>
                        <Col sm={6} md={6}  lg={6}>
                            <ProgressBar animated now={80} label={"JavaScript : 80%"}  />
                        </Col>
                        <Col sm={6} md={6}  lg={6}>
                            <ProgressBar animated now={70} label={"Node.JS : 70%"}  />
                        </Col>
                        <Col sm={6} md={6}  lg={6}>
                            <ProgressBar animated now={70} label={"React : 70%"}  />
                        </Col>
                        <Col sm={6} md={6}  lg={6}>
                            <ProgressBar animated now={70} label={"PHP : 70%"}  />
                        </Col>
                    </Row>
                    {/* <p>CSS</p>
                    <p>JavaScript</p>
                    <p>Bootstrap</p>
                    <p>Node</p>
                    <p>React</p>
                    <p>PHP</p> */}

            </div>
        </Container>
    );
}
 
export default About;