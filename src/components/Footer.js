import { Container } from "react-bootstrap";
import '../css/footer.css'

const Footer = () => {
    const date = new Date();
    
    return ( 
        <Container fluid className="py-2 Footer_wrapper">
            <div >
                <p> &copy; Henry Javangwe | All right reserved {date.getFullYear()}</p>
            </div>
        </Container>
     );
}
 
export default Footer;