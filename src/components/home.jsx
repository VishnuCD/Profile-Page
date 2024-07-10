import {Col,Row,Container} from 'react-bootstrap'
import pic from '../images/bg.jpg';
import '../css/home.css'
import Footer from './footer';
import Icon from './icons';
import Head from './head';
import { MdOutlineDeveloperMode } from "react-icons/md";
function Home(){
    const username=sessionStorage.getItem('username');
    return(
        <>
    <Container fluid>
        <Row>
        <h4 class="firsthead"><MdOutlineDeveloperMode  size={50} style={{fill:' rgb(0, 255, 0)'}}/>Software Devloper</h4>
        <Col>
        <Icon/>
        </Col>
            <Col lg={6} >
                <h3 class="secondhead">HI, i'm Vishnu kk </h3>
                <main class="containers">
                <section class="animation">
                    <div class="first">
                        <div>Ethical Hac</div>
                    </div>
                    <div class="second">
                        <div>Technologist</div>
                    </div>
                     <div class="third">
                        <div>Visionary</div>
                    </div>
                    <div class="forth">
                        <div>Zsociaty Founder & President</div>
                    </div>
                </section>
                </main>
                <p class="description">Dynamic and detail-oriented Computer Science graduate with hands-on experience in MERN Stack technologies, seeking an entry-level position to contribute to the development of robust web applications. Eager to leverage skills in MongoDB, Express.js, React.js, and Node.js to create intuitive user interfaces and contribute to innovative projects</p><br />
                    <div class="about-btn">
       <a href=''><button class="button me-2">Project</button></a>
       <a href='/about'><button class="button me-2">About me </button></a>
       <a href='/contact'><button class="button">Contact me</button></a>
       </div>
                    
            </Col>
                <Col lg={5}>
                <img src={pic}  class="home-img" />               
            </Col>
            
        </Row>            
    </Container>
    <Head/>
    
        </>
    )
}
export default Home;