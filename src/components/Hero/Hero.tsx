import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-container">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h3>👋 Hello, I'm</h3>

          <h1>GOPIGAA GOVINDARAJ</h1>

          <TypeAnimation
            sequence={[
              "Data Analytics Enthusiast",
              2000,
              "Python Developer",
              2000,
              "AI & ML Learner",
              2000,
              "Final Year CSE Student",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />

          <p>
            Passionate about Data Analytics, Artificial Intelligence,
            Machine Learning and Full Stack Development.
            I enjoy building innovative solutions that solve
            real-world problems through technology.
          </p>

          <div className="hero-buttons">

            <a href="#projects">
              <button>View Projects</button>
            </a>

            <a
              href="/resume/Gopigaa_G_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="outline">
                📄 View Resume
              </button>
            </a>

          </div>

          <div className="social-icons">

            <a
              href="https://github.com/Gopigaa-2903"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/gopigaa-g-2b23a72a0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:gopigaa2006@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <img
            src="/images/profile/profile.jpg"
            alt="Gopigaa"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;