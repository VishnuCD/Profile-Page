import {Container} from 'react-bootstrap'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import '../css/icons.css';
function Icon(){
    return (<>
    <Container fluid>
      <div className='d-flex justify-content-start mt-3 '>
      <a href=''>
      <button type="button" class="btn btn-secondary btn-sm btn-rounded" data-mdb-ripple-init>Get In Touch</button></a>
      </div>
      <div className='d-flex justify-content-start mt-3 mx-5'>  
      {/* Linkedin */}
      <a className='btn btn-primary me-3' 
  href="https://www.linkedin.com/in/vishnu-kk-/"
>
  <FaLinkedin size={14} fill='white'/>
</a>
<>
  {/* Github */}
  <a 
     className="btn btn-secondary"
     href="https://github.com/VishnuCD"
  >
    <FaGithub size={14} fill='white'/>
  </a>
</>


      </div>

    </Container>

    </>)
}
export default Icon;