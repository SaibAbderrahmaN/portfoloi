import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimationLetters from '../Animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
        (
      setLetterClass('text-animate-hover')
     )}, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimationLetters
              letterClass={letterClass}
              strArry={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
          enior Web Developer specializing in front end development. Experienced with all stages of
          the development cycle for dynamic web projects. Well-versed in numerous programming
          languages including HTML5, bootstrap, OOP, JavaScript, CSS, sass, react js, Strong
          background in project management and customer relations.
          </p>
          <p>
          An enthusiastic network engineer with the necessary drive and determination needed
          to resolve complex networking issues. Possessing effective organisational skills and
          excellent working knowledge of networking technologies and having a commitment
          to keep up to date with the latest developments. Experienced in providing motivation,
          guidance and a up to date networking consultancy service to both colleagues and
          clients.
          Now looking for a new and challenging network engineer position, one which will make
          best use of my existing skills and experience and also further my development.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About