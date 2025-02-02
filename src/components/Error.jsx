// src/components/Error.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./error.css"; // Optional: for styling

function Error() {
  return (
    <div className="error-page">
      <h1 className="error-title">Oops! Page Not Found.</h1>
      <p className="error-message">
        It seems like the page you are looking for does not exist or has been moved. 
        Please check the URL or use the button below to return to the homepage.
      </p>
      <Link to="/" className="error-link">Go Back to Home</Link>
      {/* Optionally, you can add a button to refresh the page */}
      <button onClick={() => window.location.reload()} className="error-refresh-button">
        Refresh Page
      </button>
    </div>
  );
}

export default Error;
