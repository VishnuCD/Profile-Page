import '../css/head.css';
import { useNavigate } from 'react-router-dom';
function Head(){
  const nextpage = useNavigate()
  // const logout =()=>{
  //   localStorage.clear();
  //   nextpage("/")
  // }
    return (<>
   <header>
  <input type='checkbox' id='toggle' style={{display:'none'}} />
  <label class='toggle-bt toggle-bt__cross' for='toggle'>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </label>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      {/* <li><a href="/login" onClick={logout}>Logout</a></li> */}
    </ul>
  </nav>
</header>





</>
    )
}
export default Head;