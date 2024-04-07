import React from 'react'
import './Home.css'
import home from '../images/home.png'

export const Home = () => {
  return (
    <div>
        <h1>home.</h1>
        <p>welcome to the homepage.</p>
        <img src={home} alt="me"></img>
        <p>This is my portfolio project!</p>
        <p>Use the navbar to navigate around the different pages where I talk about myself</p>
        <p>enjoy!</p>
    </div>
  )
}
