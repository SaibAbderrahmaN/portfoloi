import './index.scss'
import logoTitle from '../../assets/image/azure.png'
import { Link } from 'react-router-dom'
import AnimationLetters from '../Animation';
import  {React,useEffect,useState} from 'react';
import Logo from './Logo';








const Home= () => {

    const [letterClass, SetletterClass] = useState(`text-animate`)
    const nameArray=["b","d","e","r","r","a","h","m","a","n"]
    const jobArray=["w","e","b","  ","d","e","v","e","l","o","p","e","r","."]

    useEffect(() =>{

         setTimeout(() =>{
            (
            SetletterClass('text-animate-hover'))
        })
    }, []);
    return(
        
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img
                src={logoTitle}
                alt="JavaScript Developer Name, Web Developer Name"
              />
              <AnimationLetters
                letterClass={letterClass}
                strArry={nameArray}
                idx={15}
              />
              <br />
              <AnimationLetters
                letterClass={letterClass}
                strArry={jobArray}
                idx={22}
              />
            </h1>
            <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
          <Logo />
        </div> 
        
    )
     }
  
        
      

export default Home