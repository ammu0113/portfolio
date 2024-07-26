import React from "react";
// import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <h1 className="contact__title">Get in Touch</h1>
        <p className="contact__description">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>
        <form className="contact__form">
          <div className="contact__form-group">
            <label htmlFor="name" className="contact__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="contact__input"
              placeholder="Your Name"
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="email" className="contact__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="contact__input"
              placeholder="Your Email"
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="message" className="contact__label">
              Message
            </label>
            <textarea
              id="message"
              className="contact__textarea"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" className="contact__button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
