import './index.scss';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import  logos  from "../../assets/image/logo.png";
import  logosbtitle  from "../../assets/image/abderrahman.png";
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome ,faUser} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGithub, faLinkedin, faRProject, faTwitter, faSuitcase } from '@fortawesome/free-brands-svg-icons'





const Sidebar = ()=>{
   return <div className='navbar'>
    
    <Link className='logo' to='/'>
    <img src={logos} alt='logo'/>
    <img className='sub-logo' src={logosbtitle} alt='slobodan'/>
</Link>
<nav>
   <NavLink exact='true' activeclassname='active' to='/'>
      <FontAwesomeIcon icon={faHome} color="#4d4d4e"  />
   </NavLink>
   <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
      <FontAwesomeIcon icon={faUser} color="#4d4d4e"  />
   </NavLink>
   <NavLink exact='true' activeclassname='active' className='project-link' to='/project'>
      <FontAwesomeIcon icon={faRProject} color="#4d4d4e"  />
   </NavLink>
   <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
      <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"  />
   </NavLink>
   
      
</nav>
<ul>
   <li>
      <a target="_blanck" rel='noreferre' href='https://www.linkedin.com/in/saib-abderrahmane-518b52238/'>
      <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"  />

      </a>
   </li>
   <li>
      <a target="_blanck" rel='noreferre' href='https://web.facebook.com/abderrahman.saib?_rdc=1&_rdr'>
      <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"  />

      </a>
   </li>
   <li>
      <a target="_blanck" rel='noreferre' href='https://twitter.com/AbderrahmanSaib?t=4TfxNeay8TUyJuD1NqtyOA&s=09'>
      <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"  />

      </a>
   </li>
   <li>
      <a target="_blanck" rel='noreferre' href='https://github.com/SaibAbderrahmaN'>
      <FontAwesomeIcon icon={faGithub} color="#4d4d4e"  />

      </a>
   </li>
</ul>



   
   </div>

}



export default Sidebar