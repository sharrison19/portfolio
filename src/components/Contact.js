import React from "react";

const Contact = () => {
  const linkedin = "https://www.linkedin.com/in/sean-j-harrison/";
  const github = "https://github.com/sharrison19";

  return (
    <div name="contactSection" className="contact-container">
      <div className="contact-content-container">
        <h2 className="contact-heading">Contact Information</h2>
        <div className="contact-links">
          <p className="contact-info">Sean Harrison</p>
          <p className="contact-info">Email: seanjharrison1993@gmail.com</p>
          <p className="contact-info">
            LinkedIn:{" "}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {linkedin}
            </a>
          </p>
          <p className="contact-info">
            GitHub:{" "}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {github}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
