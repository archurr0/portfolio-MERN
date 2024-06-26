import React from 'react'
import './Contact.css';
import { useEffect, useRef, useState } from "react";

export const Contact = () => {
  const nameRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const handleSubmit = async(e) => {
    setResult("");
    e.preventDefault();
    if (!name || !email || !subject || text?.length < 10){
      setResult("Please verify your inputs.");
      return null;
    }
    const data = {name, email, subject, text};
    fetch("https://portfolio-mern-k4t1.onrender.com/feedback", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json?.message);
      setResult(`Result: ${json?.message}`);
    })
    .catch((error) => {
      console.log(error?.message);
      setResult(`Error: ${error?.message}`);
    });
    fetch('https://portfolio-mern-k4t1.onrender.com/feedback/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...data}),
    })
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setResult(`Error: ${error?.message}`);
    });
  };
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  return (
    <div className="form">
      <h1>contact me!</h1>
      <form onSubmit={handleSubmit} className="form__container">
        <div className="form__controls">
          <label htmlFor="name">Name</label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            className="input__subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="text">Text</label>
          <textarea
            rows="5"
            id="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <button className="button">Send Email</button>
        </div>
      </form>
      <p>{result}</p>
    </div>
  )
}
