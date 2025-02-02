import Book from "./Book";
import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-page">
      <h1 className="about-title">About Our Book Library App</h1>

      <section className="about-section">
        <h2>Introduction</h2>
        <p>
          Welcome to our Book Library App! This platform allows you to browse,
          search, and manage your favorite books. Whether you're an avid reader or
          just starting your book journey, our app helps you discover new books
          and keep track of your reading list.
        </p>
      </section>

      <section className="about-section">
        <h2>Features</h2>
        <ul>
          <li>Browse a vast collection of books</li>
          <li>Search for books by title, author, or genre</li>
          <li>View detailed information about each book</li>
          <li>Add your own books to the library</li>
          <li>Manage and organize your reading list</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Technologies Used</h2>
        <p>
          This app is built using modern web technologies to provide a smooth and
          interactive user experience:
        </p>
        <ul>
          <li>React.js for the front-end</li>
          <li>Redux for state management</li>
          <li>React Router for navigation</li>
          <li>OpenLibrary API to fetch book data</li>
          <li>CSS for styling and responsiveness</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to reach out:</p>
        <p>
          Email: <a href="mailto:support@booklibrary.com">support@booklibrary.com</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer">github.com/yourrepo</a>
        </p>
      </section>

      <section className="about-section">
        <h2>Our Team</h2>
        <p>Our app is developed and maintained by:</p>
        <ul>
          <li>John Doe - Frontend Developer</li>
          <li>Jane Smith - Backend Developer</li>
          <li>Mark Johnson - UI/UX Designer</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
