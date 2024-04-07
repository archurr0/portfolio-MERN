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
        <p>ChefLens was a project me and my team developed using AI and machine learning in an attempt</p>
        <p>to help with meal prep by using object detection to find food items in a picture</p>
        <p>and lookup online recipes with an API that use the available items.</p>
        <img src={chef} alt="chef"></img>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=kgIj3C8w2TI&feature=youtu.be">ChefLens Video</a>
        <p>2. AI Drone Project - Conrad Challenge</p>
        <p>FlyHigh AI was a project me and my team developed in order to promote the innovation of</p>
        <p>AI drones utilizing Amazon Web Services. This AI drone would have been used for many purposes</p>
        <p>including forest fire detection and package delivery, specializing in traversing adverse conditions.</p>
        <img src={conrad} alt="conrad"></img>
        <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/Q00hjh2_g9M">Conrad Challenge Video</a>
        <p>3. RHS CS - Congressional App Challenge</p>
        <p>RHS CS was a project me and my friend created to help our school community in finding community</p>
        <p>service opportunities. Teachers or clubs could post opportunities on a board and one could sign up</p>
        <p>and recieve CAR Hours upon completion, recording it in their school record.</p>
        <img src={rhscs} alt="rhscs"></img>
        <p>4. Data Homebase - Congressional App Challenge</p>
        <p>Data Homebase was a personal project of mine that I made early on that aimed at helping</p>
        <p>gather large amounts of information through a form and storing it in a SQL database. This data</p>
        <p>could then be edited, removed, or looked at from a single app interface.</p>
        <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/2T3UMwI7acQ">Data Homebase Video</a>
        <p>5. ATP Tennis Database Analysis</p>
        <p>This Data Science project was an individual project associated with my love for tennis. </p>
        <p>I found professional tennis databases online from the ATP Tour and used it to find patterns</p>
        <p>in how players' mental psyches are affected at certain scorelines in the game.</p>
        <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/1ERu85TDcS07fFWmh1Wr7NCIlLK33t8u5B8KSHORTcp0/edit#slide=id.g245bd6a573f_3_0">Data Analysis Documentation</a>
        <h1>other web development projects: </h1>
        <p>1. Concentration Game (Memory Card Flip Game)</p>
        <a target="_blank" rel="noopener noreferrer" href="http://concentrationgame.great-site.net/?i=1">Concentration Game Link</a>
        <p>2. Bootstrap Painting</p>
        <a target="_blank" rel="noopener noreferrer" href="http://bootstrappainting.great-site.net/?i=1">Bootstrap Painting Link</a>
        <p>3. Weather App</p>
        <a target="_blank" rel="noopener noreferrer" href="https://weather-app-6jcy.onrender.com">Weather App Link</a>
    </div>
  )
}