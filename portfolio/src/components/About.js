import React from 'react'
// import coverImage from '../assets/Adry_ProfilePic.jpg'
import '../styles/About.css'

const About = () => {
  return (
    <section className='about'>
      {/* <img src={coverImage} style={{ width: "35%", height:"60%"}} alt="cover" /> */}
      <img src='../assets/Adry_ProfilePic'></img>
      <div className="my-2">
        <p className='description'>
        Hello! My name is Adry Quezada and I'm a fullstack web developer based out of New York
        </p>
      </div>
    </section>
  );
}

export default About