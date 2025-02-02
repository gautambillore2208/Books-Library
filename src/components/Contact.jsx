import React, { useState } from "react";
import "./contact.css"; // For styling

function Contact() {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to handle form submission success or error
  const [formStatus, setFormStatus] = useState(null);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setFormStatus("Success! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setFormStatus("Error! Please fill in all fields.");
    }
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>

      <section className="contact-details">
        <h2>Get in Touch</h2>
        <p>
          If you have any questions or feedback, feel free to reach out to us.
        </p>
        <ul>
          <li>Email: <a href="mailto:support@booklibrary.com">support@booklibrary.com</a></li>
          <li>Phone: +1 123 456 7890</li>
          <li>Address: 123 Book St, Book City, Book Country</li>
        </ul>
      </section>

      <section className="contact-form">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>

        {/* Display status message */}
        {formStatus && <p className="form-status">{formStatus}</p>}
      </section>
    </div>
  );
}

export default Contact;
