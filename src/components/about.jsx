import { Container, Row, Col } from "react-bootstrap";
import '../css/about.css'
import Icon from "./icons";
import Head from "./head";
import { MdOutlineDeveloperMode } from "react-icons/md";
function About(){
    return (
        <>
        
        <Container fluid style={{paddingBottom:"10px"}}>
        <h5 class="firsthead"><MdOutlineDeveloperMode  size={35} style={{fill:' rgb(0, 255, 0)'}}/>Software Devloper</h5>

            <Row>
                <Col lg={1}>
                    <Icon/>
                </Col>
                <Col lg={11}>
                <h2 class="portfolio">About</h2>
        <hr class="one" id="one" />
            <Row>
                <Col lg={4}>
                <p class="first-col-para mt25">Who am i ?</p>
                </Col>
                <Col lg={7}>
                <p class="second-col-para">👋Hello! I'm Vishnu kk, a motivated and detail-oriented entry-level MERN stack developer with a passion for building robust and user-friendly applications. With a strong foundation in computer science and web development, I'm excited to bring my skills and creativity to a dynamic team.! 🚀
                    <br />  University of Calicut, where I earned my degree in Computer Science. <br />
                    My expertise includes: <br />
                    < ul>
                        <li className="text-white">  Proficiency in JavaScript, HTML, CSS, and various frameworks like React, Express, and Node.js</li>
                        <li className="text-white">Experience with database management using MongoDB</li>
                        <li className="text-white">Understanding of web development principles, including responsiveness, accessibility, and performance optimization</li>
                        <li className="text-white">Strong problem-solving skills and attention to detail</li>
                        <li className="text-white">Excellent communication and teamwork skills</li>
                    </ul>

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
                <Col lg={4}>
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