import { Container, Row, Col } from "react-bootstrap";
import '../css/about.css'
import Icon from "./icons";
import Head from "./head";
import { LiaHackerrank } from "react-icons/lia";
function About(){
    return (
        <>
        
        <Container fluid style={{paddingBottom:"10px"}}>
        <h4 class="firsthead"><LiaHackerrank size={50} style={{fill:' rgb(0, 255, 0)'}}/>ack</h4>
            <Row>
                <Col lg={1}>
                    <Icon/>
                </Col>
                <Col lg={11}>
                <h2 class="portfolio">About</h2>
        <hr class="one" id="one" />
            <Row>
                <Col lg={5}>
                <p class="first-col-para mt25">Who am i ?</p>
                </Col>
                <Col lg={6}>
                <p class="second-col-para">👋 Hi there! I'm Vishnu, a budding MERN Stack Developer fresh out of college with a zest for building web applications that not only function seamlessly but also deliver a satisfying user experience. Dive into details about my journey and work! 🚀

From the University of Calicut, where I earned my degree in Computer Science, to my hands internships, my academic and professional path has been geared towards understanding and mastering technologies like React.js, Node.js, Express.js, and MongoDB. I have practical experience from conceptualizing and developing an e-commerce platform for a bakery to creating a user-centric profile management system. Each project was a stepping stone, strengthening my coding skills and understanding of web development nuances.

I believe in the power of collaboration and continuous learning; during my internships, I not only refined my technical skills but also learned to thrive in team settings, pushing projects from ideation to launch. I’m always enthusiastic about meeting challenges head-on and rolling out features that enhance user interactions.

🎥 Outside my professional life, I recharge by watching movies and tuning into my favorite music, which keeps me creatively inspired and ready to tackle the next coding challenge.. 
                </p>
                </Col>
            </Row>
            <Row>
                <Col lg={5}>
                
                </Col>
                <Col lg={7}>
              
                </Col>
            </Row>
            <Row>
                <Col lg={5}>
                <p class="first-col-para mt1001">skills</p>
                </Col>
                <Col lg={7}>
                <div style={{marginRight:"5px"}}>
    <div class="row">
        <div >
            <a class="btn btn-lg me-1" href="#">
                <span class="about-span">React js</span>
            </a>
            <a class="btn btn-lg me-1" href="#">
                <span class="about-span">html</span>
            </a>
            <a class="btn btn-lg me-1" href="#">
                <span class="about-span">Css</span>
            </a>
            <a class="btn btn-lg me-1" href="#">
                <span class="about-span">Bootstrap</span>
            </a>
        </div>
    </div>
    <div class="row">
        <div >
            <a class="btn btn-lg mt-1 me-1" href="#">
                <span class="about-span">Node js</span>
            </a>
            <a class="btn btn-lg mt-1 me-1" href="#">
                <span class="about-span">Express js</span>
            </a>
            <a class="btn btn-lg mt-1 me-1" href="#">
                <span class="about-span">Mongodb</span>
            </a>
            <a class="btn btn-lg mt-1 me-1" href="#">
                <span class="about-span">web development</span>
            </a>
        </div>
    </div>
</div>
                </Col>
               </Row>
            </Col>
        </Row>
        </Container>
        <Head/>
        </>
    )
}
export default About;