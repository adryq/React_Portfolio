import React from 'react'
import WW from '../assets/womansworldoriginal.png'
import TG from '../assets/TeamGenerator.png'

const Portfolio = () => {

  return (
    <div className='portfolio'>
      <h1>My Work</h1>
        <ul>
            <li img src={WW} alt="Project1" >Womans World</li>
          
            <li img src={TG}>Team Generator</li>
            Deployed at: https://adryq.github.io/Password-Generator/
            <li>Project 3</li>
            <li>Project 4</li>
            <li>Project 5</li>
            <li>Project 6</li>
        </ul>
    </div>
  )
}

export default Portfolio