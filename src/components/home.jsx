import {Col,Row,Container} from 'react-bootstrap'
import pic from '../images/bg.jpg';
import backgroundImage from '../images/background.png'
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
        <h5 class="firsthead"><MdOutlineDeveloperMode  size={35} style={{fill:' rgb(0, 255, 0)'}}/>Software Devloper</h5>
        <Col>
        
        </Col>
            <Col lg={6} >
                <h3 class="secondhead">HI, i'm Vishnu kk </h3>
                <main class="containers">
                <section class="animation">
                    <div class="first">
                        <div>Web Developer</div>
                    </div>
                    <div class="second">
                        <div>React js Developer</div>
                    </div>
                     <div class="third">
                        <div>Node js Developer</div>
                    </div>
                    <div class="forth">
                        <div>Mern Stack</div>
                    </div>
                </section>
                </main>
                <p class="description">A computer science graduate with experience in MERN stack development, 
                proficiency in JavaScript, HTML, CSS, React, Node.js, Express, and MongoDB, eager to contribute to innovative projects.
                </p>
            <div className='d-flex justify-content-center d-grid gap-2'>
       <a href='/projects'>
       <button type="button" class="btn btn-outline-light btn-lg  me-3 " data-mdb-ripple-init data-mdb-ripple-color="dark">
        Projects</button>
        </a>
       <a href='/about'>
       <button type="button" class="btn btn-outline-light btn-lg   me-3" data-mdb-ripple-init data-mdb-ripple-color="dark">
        About</button>
        </a>
       <a href='/contact'>
       <button type="button" class="btn btn-outline-light btn-lg  me-3" data-mdb-ripple-init data-mdb-ripple-color="dark">
        Contact</button>
        </a>

       </div>
        <Icon/>
            </Col>
                <Col lg={5}>
                <img src={backgroundImage}  class="home-img" />               
            </Col>
            
        </Row> 
                   
    </Container>
    <Head/>
    
        </>
    )
}
export default Home;