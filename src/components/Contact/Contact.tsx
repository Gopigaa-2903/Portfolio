import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p className="contact-subtitle">
        I'm always open to internships, collaborations and exciting opportunities.
      </p>

      <div className="contact-container">

        <div className="contact-card">
          <FaPhone className="icon" />
          <h3>Phone</h3>
          <a href="tel:+919788429060">
            +91 97884 29060
          </a>
        </div>

        <div className="contact-card">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <a href="mailto:gopigaa2006@gmail.com">
            gopigaa2006@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="icon" />
          <h3>LinkedIn</h3>
          <a
            href="https://linkedin.com/in/gopigaa-g-2b23a72a0"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/gopigaa-g-2b23a72a0
          </a>
        </div>

        <div className="contact-card">
          <FaGithub className="icon" />
          <h3>GitHub</h3>
          <a
            href="https://github.com/Gopigaa-2903"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Gopigaa-2903
          </a>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="icon" />
          <h3>Location</h3>
          <p>Dindigul, Tamil Nadu, India</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;