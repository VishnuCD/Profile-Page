import { Container,Row,Col } from 'react-bootstrap';
import '../css/contact.css';

import Head from './head';
import { useRef, useState } from 'react';
import AXIOS from 'axios'
import { MdOutlineDeveloperMode } from "react-icons/md";
function Contact(){
  const [cemail,setCemail]=useState('');
  const [cname,setCname]=useState('');
  const [mess,setMess]=useState('');
  const re = useRef(null);
  const rn = useRef(null);
  const rm = useRef(null);
  const Touch=(e)=>{
    e.preventDefault();
    const url="http://localhost:9000/touch";
    AXIOS.post(url,{cemail,cname,mess}).then((res)=>{
      alert(res.data)
    })
    e.target.reset();
  }
  const Handlereset = () => {  
    re.current.value = '';
    rn.current.value= '';
    rm.current.value= '';
          
          
      }

    return (<>
    
    <Container fluid>
    <h5 class="firsthead"><MdOutlineDeveloperMode  size={35} style={{fill:' rgb(0, 255, 0)'}}/>Software Devloper</h5>
      <Row>
        <Col lg={1}>
          
        </Col>
        <Col lg={11}>
        <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span style={{color:'white'}}>CONTACT</span>
            <span style={{color:'white'}}>US</span>
          </div>
        </div>
        <form onSubmit={Touch}>
        <div class="screen-body-item">
          <div class="app-form">
          <div class="app-form-group">
              <input class="app-form-control" required type='text' placeholder="Name" ref={rn}
               onChange={(e)=>setCname(e.target.value)}/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" required type='email' placeholder="EMAIL" ref={re}
               onChange={(e)=>setCemail(e.target.value)}/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control"  required type ="text" placeholder="MESSAGE" ref={rm}
                onChange={(e)=>setMess(e.target.value)}/>
            </div>
            <div class="app-form-group click">
            <button class="app-form-click">SEND</button>
             <button class="app-form-click" onClick={Handlereset} >CANCEL</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
    
  </div>
</div>
        </Col>
      </Row>
    </Container>
    <Head/>

    </>)
  
    }
export default Contact;