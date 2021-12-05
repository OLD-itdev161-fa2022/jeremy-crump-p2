import React, { useState } from "react";
import './form.css'

const ContactForm = () => {

  const [status, setStatus] = useState("Submit");
  
  //Submit Message
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="form-labels" htmlFor="name">Name</label>
        <input className="form-input" type="text" id="name" required />
      </div>
      <div>
        <label className="form-labels" htmlFor="email">Email</label>
        <input className="form-input" type="email" id="email" required />
      </div>
      <div>
        <label className="form-labels" htmlFor="message">Message [255 max characters]</label>
        <textarea maxLength="255" id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;