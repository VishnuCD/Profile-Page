import { Container, Row, Col } from "react-bootstrap";
import '../css/card.css'
import Icon from "./icons";
import Head from "./head";
import { MdOutlineDeveloperMode } from "react-icons/md";
import ImageOfBakery from '../images/Bakery.jpeg'
import ImageOfProfile from '../images/Profile.jpeg'

function Project(){
    return(<>
        <Container fluid style={{paddingBottom:"10px"}}>
        <h5 class="firsthead"><MdOutlineDeveloperMode  size={35} style={{fill:' rgb(0, 255, 0)'}}/>Software Devloper</h5>
            <Row>
                <Col lg={1}>
                    <Icon/>
                </Col>
                <Col lg={11}>
                <h2 class="portfolio">Projects</h2>
            <hr class="one" id="one" />
            <Row>
            <section class="dark">
	    <div class="container py-4">
		<article class="postcard dark green">
			<a class="postcard__img_link" href="">
				<img class="postcard__img" src={ImageOfBakery} alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title green"><a href="https://github.com/VishnuCD/E-commerce.git"> Ecommerce Website For Bakery </a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt"> Developed a fully functional ecommerce website using MERN stack 
                <li>Features included user authentication, shopping cart, and payment processing </li>
                <li>Implemented frontend user interface using React, HTML, CSS, and Bootstrap </li>
                <li>Designed and implemented backend API using Node.js, Express, and MongoDB</li>
                </div>
				<ul class="postcard__tagbox">
					{/* <li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li> */}
					<li class="tag__item play green">
						<a href="https://e-commerce-delta-ten-52.vercel.app/"><i class="fas fa-play mr-2"></i>View</a>
					</li>
                    <li class="tag__item play yellow">
						<a href="https://github.com/VishnuCD/E-commerce.git"><i class="fas fa-play mr-2"></i>Code</a>
					</li>
				</ul>
			</div>
		</article>
		<article class="postcard dark yellow">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src={ImageOfProfile} alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title yellow"><a href="https://github.com/VishnuCD/Profile-Page.git">Portfolio</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt"> Developed a fully functional ecommerce website using MERN stack 
                <li>Implemented frontend user interface using React, HTML, CSS, and Bootstrap </li>
                <li>Designed and implemented backend API using Node.js, Express, and MongoDB</li>
                </div>
				<ul class="postcard__tagbox">
					{/* <li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li> */}
					<li class="tag__item play yellow">
						<a href="https://profile-page-swart.vercel.app/"><i class="fas fa-play mr-2"></i>View</a>
					</li>
                    <li class="tag__item play green">
						<a href="https://github.com/VishnuCD/Profile-Page.git"><i class="fas fa-play mr-2"></i>Code</a>
					</li>
				</ul>
			</div>
		</article>
	</div>
</section>
            </Row>
            </Col>
        </Row>
        </Container>
        <Head/>
    </>)
}
export default Project