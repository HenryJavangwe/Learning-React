import { Container, Row, Col } from "react-bootstrap";
import '../css/home.css'

const Home = () => {
    return (  
        <Container fluid className="py-5 bg-warning Hero">
            <div className="Hero_Inner text-center justify-content-center">
                <h1>
                    Hi, Welcome to my world!
                </h1>
                <p>
                    I am a Frontend Developer and Data Analyst
                </p>
                <button className="About_Btn">
                    About Me
                </button>
            </div>
        </Container>
    );
}
 
export default Home;