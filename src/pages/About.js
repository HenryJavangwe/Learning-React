import { Container,Row, Col, ProgressBar } from "react-bootstrap";
import '../css/about.css';

const About = () => {
    return (  
        <Container fluid className="py-5 About_Hero mt-5"> 
            <div className="About_inner container text-center">
                <h1>
                    About Me
                </h1>
                <p>
                    Before my career, I am dad first to the most beautiful being on earth...my beautiful daughter.
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
                            <ProgressBar animated variant="primary" now={90} label={"HTML : 90%"}  />
                        </Col>
                        <Col sm={6} md={6}  lg={6}>
                            <ProgressBar animated variant="primary" now={90} label={"CSS : 90%"}  />
                        </Col>
                        <Col sm={6} md={6}  lg={6}>
                            <ProgressBar animated variant="primary" now={90} label={"JavaScript : 90%"}  />
                        </Col>
                        <Col sm={6} md={6}  lg={6}>
                            <ProgressBar animated variant="primary" now={80} label={"Node.js : 80%"}  />
                        </Col>
                        <Col sm={6} md={6}  lg={6}>
                            <ProgressBar animated variant="primary" now={80} label={"React.js : 80%"}  />
                        </Col>
                        <Col sm={6} md={6}  lg={6}>
                            <ProgressBar animated variant="primary" now={80} label={"Git : 80%"}  />
                        </Col>
                        <Col sm={6} md={6}  lg={6}>
                            <ProgressBar animated variant="primary" now={80} label={"Next.js : 80%"}  />
                        </Col>
                        <Col sm={6} md={6}  lg={6}>
                            <ProgressBar animated variant="primary" now={70} label={"React Native : 70%"}  />
                        </Col>
                        <Col sm={6} md={6}  lg={6}>
                            <ProgressBar animated variant="warning" now={55} label={"Angular : 60%"}  />
                        </Col>
                        <Col sm={6} md={6}  lg={6}>
                            <ProgressBar animated variant="warning" now={55} label={"PHP : 60%"}  />
                        </Col>
                    </Row>
            </div>
        </Container>
    );
}
 
export default About;