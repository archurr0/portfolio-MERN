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
        <p>Use the navbar to navigate around the different pages where I talk about myself.</p>
        <p>enjoy!</p>
        <h2>who am i?</h2>
        <p>hello, my name is Arthur Liang, I am currently in 11th grade at John A Rowland High School.</p>
        <p>I have a passion for math, programming, cybersecurity, art, tennis, and gaming.</p>
        <p>i have programming experience in c++, java, dart, javascript, and right now i am currently getting into web development</p>
        <p>this website was the first full stack project i made using mongodb, express, react, and nodemailer</p>
    </div>
  )
}
