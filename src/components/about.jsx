import { Container, Row, Col } from "react-bootstrap";
import '../css/about.css'
import reactLogo from '../images/React.png'
import javascriptLogo from '../images/javascript.png'
import nodeLogo from '../images/node.png'
import mongodbLogo from '../images/mongodb.png'
import expressLogo from '../images/express.png'
import htmlLogo from '../images/html.png'
import cssLogo from '../images/css.png'
import bootstrapLogo from '../images/bootstrap.png'
import webdeveloperLogo from '../images/web development.png'


import Head from "./head";
import { MdOutlineDeveloperMode } from "react-icons/md";
function About(){
    return (
        <>
        
        <Container fluid style={{paddingBottom:"10px"}}>
        <h5 class="firsthead"><MdOutlineDeveloperMode  size={35} style={{fill:' rgb(0, 255, 0)'}}/>Software Devloper</h5>

            <Row>
                <Col lg={1}>
                </Col>
                <Col lg={11}>
                <h2 class="portfolio">About</h2>
                <hr class="one" id="one" />
            <Row>
               
                <Col lg={5}>
                <p class="first-col-para mt25">Who am i ?</p>
                </Col>
                <Col lg={6}>
                <p class="second-col-para">👋Hello! I'm Vishnu kk, a motivated and detail-oriented entry-level MERN stack developer with a passion for building robust and user-friendly applications. With a strong foundation in computer science and web development, I'm excited to bring my skills and creativity to a dynamic team.! 
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
                <h2 class="first-col-para mt25">Experience</h2>
                </Col>
                <Col lg={6}>
                    <h2 class="second-col-para">MERN Stack Developer Intern </h2>
                    <hr className="text-white w-50"/>
                    <p className="text-white">MERN | Kochi, India</p>
                    <ul >
                        <li className="text-white">Developed and maintained modern and responsive web applications  using MERN stack  </li>
                        <li className="text-white">Developed and implemented frontend user interfaces using React and Built backend APIs using Node.js, Express, and MongoDB </li>
                        <li className="text-white">Successfully built and deployed a web application using the MERN stack</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                <p class="first-col-para mt1001">skills</p>
                </Col>
                <Col lg={7}>
                <div class="container mt-3">
        <div class="row">
            <div class="col-md-4 mb-3">
                <div class="card bg-dark">
                    <img src={reactLogo} class="card-img" alt="PHP Logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-light">React js</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card bg-dark">
                    <img src={javascriptLogo}  class="card-img" alt="Laravel Logo" />
                    <div class="card-body">
                        <h5 class="card-title text-light">Javacript</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card bg-dark">
                    <img src={nodeLogo}  class="card-img" alt="Node.js Logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-light">Node.js</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card bg-dark">
                    <img src={expressLogo}  class="card-img" alt="Express.js Logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-light">Express.js</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card bg-dark">
                    <img src={mongodbLogo}  class="card-img" alt="Express.js Logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-light">MongoDB</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card bg-dark">
                    <img src={htmlLogo} class="card-img" alt="JavaScript Logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-light">HTML</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card bg-dark">
                    <img src={cssLogo}  class="card-img" alt="TypeScript Logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-light">CSS</h5>
                    </div>
                </div>
            </div>  
            <div class="col-md-4 mb-3">
                <div class="card bg-dark">
                    <img src={bootstrapLogo} class="card-img" alt="TypeScript Logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-light">Bootstrap</h5>
                    </div>
                </div>
            </div> 
            <div class="col-md-4  mb-3">
                <div class="card bg-dark">
                    <img src={webdeveloperLogo} class="card-img" alt="TypeScript Logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-light">Web Development</h5>
                    </div>
                </div>
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