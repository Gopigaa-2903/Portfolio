import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>GOPIGAA GOVINDARAJ</h2>

      <p>
        Data Analytics • Artificial Intelligence • Python • Full Stack Developer
      </p>

      <div className="footer-icons">

        <a
          href="https://github.com/Gopigaa-2903"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/gopigaa-g-2b23a72a0"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:gopigaa2006@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <a href="#home" className="top-btn">
        <FaArrowUp />
      </a>

      <hr />

      <p className="copyright">
        © 2026 GOPIGAA GOVINDARAJ. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;