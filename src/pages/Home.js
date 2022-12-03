import {Link} from "react-router-dom";
import { Container } from "react-bootstrap";
import '../css/home.css';
import '../css/buttons.css';

const Home = () => {
    return (  
        <Container fluid className="py-5 Hero mt-5">
            <div className="Hero_Inner text-center justify-content-center">
                <h1>
                    Hi, Welcome to my world!
                </h1>
                <p>
                    I am a Frontend Developer, Digital Marketer <br/>and Data Analyst
                </p>
                <button className="About_Btn">
                    <Link to="./about">About me</Link>
                </button>
            </div>
        </Container>
    );
}
 
export default Home;