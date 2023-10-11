import selfie from "../assets/selfie.jpg"

import '../styles/About.css'

const About = () => {

  return (
    <section id="about">
      <div className="user-card">
        <img src={selfie} alt="selfie" className="img"/>
        <h2>Clayton Persinger</h2>
        <h3>Full-Stack Developer</h3>
        <p className="user-description">I am a full-stack developer with five years experience leading projects and organizing people in the building automation industry. My passion for modern web technologies like JavaScript, React, Node, and Ruby drives me to continuously improve my web development abilities. During my free time, I learn new technologies by working on personal projects ranging from simple web games to complex API work. I aim to become a leader in the forefront of web development and create scalable and effective systems.</p>
      </div>
   </section>  
  )
}

export default About