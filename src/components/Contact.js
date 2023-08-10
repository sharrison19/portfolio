import ContactForm from "./ContactForm";

const Contact = () => {
  const linkedin = "https://www.linkedin.com/in/sean-j-harrison/";
  const github = "https://github.com/sharrison19";

  return (
    <div className="contact-container">
      <div className="contact-content-container">
        <h2 className="contact-heading">Contact Information</h2>
        <div className="contact-links">
          <p className="contact-intro">
            {" "}
            If you have any questions or inquiries, feel free to reach out to me
            using the links below. Alternatively, you can submit your
            information through the form, and I'll get back to you promptly.
          </p>
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
        <div className="contactForm">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
