import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Left Side Image */}
        <div className="about-left">
          <img
            src="/images/profile/profile.jpg"
            alt="GOPIGAA GOVINDARAJ"
          />
        </div>

        {/* Right Side Content */}
        <div className="about-right">

          <h2>About Me</h2>

          <p>
            Hi! I'm <b>GOPIGAA GOVINDARAJ</b>, a Final Year Computer Science
            Engineering (Hons) student with a strong interest in Data Analytics,
            Artificial Intelligence, Machine Learning and Full Stack
            Development. I enjoy solving real-world problems through technology
            and continuously improving my technical skills.
          </p>

          <p>
            I have successfully completed two internships:
            <br /><br />

            • <b>Elysium Groups</b> – Data Science Intern (1 Month)
            <br />
            • <b>Enlight Technologies</b> – Data Analytics Intern (1 Month)

            <br /><br />

            During these internships, I worked with Python, SQL, Data Analytics,
            dashboards and real-world datasets, gaining valuable industry
            experience.
          </p>

          <p>
            My goal is to start my career as a Data Analyst where I can use my
            analytical thinking, programming knowledge and problem-solving
            skills to build meaningful data-driven solutions.
          </p>

          <div className="about-info">

            <div className="info-box">
              <h3>2</h3>
              <span>Internships</span>
            </div>

            <div className="info-box">
              <h3>3+</h3>
              <span>Projects</span>
            </div>

            <div className="info-box">
              <h3>13+</h3>
              <span>Hackathons</span>
            </div>

            <div className="info-box">
              <h3>10+</h3>
              <span>Certifications</span>
            </div>

            <div className="info-box">
              <h3>8.10</h3>
              <span>CGPA</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;