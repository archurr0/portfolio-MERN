import React from 'react'
import conrad from '../images/flyhighai1.png'
import chef from '../images/ChefLens.png'
import rhscs from '../images/rhscs.png'
export const Projects = () => {
  return (
    <div>
        <h1>projects.</h1>
        <p>hello. here are some projects I have done for JavaScript and Web Development.</p>
        <p>1. ChefLens - Diamond Challenge</p>
        <img src={chef} alt="chef"></img>
        <a href="https://www.youtube.com/watch?v=kgIj3C8w2TI&feature=youtu.be">ChefLens Video</a>
        <p>2. AI Drone Project - Conrad Challenge</p>
        <img src={conrad} alt="conrad"></img>
        <a href="https://youtu.be/Q00hjh2_g9M">Conrad Challenge Video</a>
        <p>3. RHS CS - Congressional App Challenge</p>
        <img src={rhscs} alt="rhscs"></img>
        <p>4. Data Homebase - Congressional App Challenge</p>
        <a href="https://youtu.be/2T3UMwI7acQ">Data Homebase Video</a>
        <p>5. ATP Tennis Database Analysis</p>
        <a href="https://docs.google.com/presentation/d/1ERu85TDcS07fFWmh1Wr7NCIlLK33t8u5B8KSHORTcp0/edit#slide=id.g245bd6a573f_3_0">Data Analysis Documentation</a>
    </div>
  )
}