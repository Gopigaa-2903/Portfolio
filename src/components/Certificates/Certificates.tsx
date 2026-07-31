import "./Certificates.css";
import { useState } from "react";

function Certificates() {
  const [pdf, setPdf] = useState("");

  const courseCertificates = [
    { title: "Artificial Intelligence", file: "/certificates/Courses/AI.pdf" },
    { title: "Python Programming", file: "/certificates/Courses/Python Programming.pdf" },
    { title: "Data Analytics", file: "/certificates/Courses/Data-Analytics.pdf" },
    { title: "Business Analytics using Tableau", file: "/certificates/Courses/BA-using-Tableau.pdf" },
    { title: "Full Stack Development", file: "/certificates/Courses/Full-Stack.pdf" },
    { title: "React JS", file: "/certificates/Courses/React-JS.pdf" },
    { title: "Machine Learning", file: "/certificates/Courses/ML-Model.pdf" },
    { title: "Intro to Pandas", file: "/certificates/Courses/intro-pandas.pdf" },
    { title: "Intro to NumPy", file: "/certificates/Courses/Intro-to-Numpy.pdf" },
    { title: "Data Driven World", file: "/certificates/Courses/Data-Driven-World.pdf" },
    { title: "CodeEmy", file: "/certificates/Courses/CodeEmy.pdf" },
    { title: "BootCamp", file: "/certificates/Courses/BootCamp.pdf" },
    { title: "DSF", file: "/certificates/Courses/DSF.pdf" },
    { title: "ICAT", file: "/certificates/Courses/ICAT.pdf" },
    { title: "SSM", file: "/certificates/Courses/SSM.pdf" }
  ];

  const hackathonCertificates = [
    { title: "Hackatron", file: "/certificates/Hackathons/Hackatron.pdf" },
    { title: "Hackcelestial", file: "/certificates/Hackathons/Hackcelestial.pdf" },
    { title: "Hackground", file: "/certificates/Hackathons/Hackground.pdf" },
    { title: "Hackground Final", file: "/certificates/Hackathons/Hackground-Final.pdf" },
    { title: "Hackloop", file: "/certificates/Hackathons/Hackloop.pdf" },
    { title: "Hackster", file: "/certificates/Hackathons/Hackster.pdf" },
    { title: "Hack with Chandigarh", file: "/certificates/Hackathons/Hack-with-chandigar.pdf" },
    { title: "Ideathon", file: "/certificates/Hackathons/Ideathon.pdf" },
    { title: "NPR E-CELL", file: "/certificates/Hackathons/NPR_E-CELL.pdf" },
    { title: "Paranox", file: "/certificates/Hackathons/Paranox.pdf" },
    { title: "Synaphack", file: "/certificates/Hackathons/Synaphack.pdf" },
    { title: "Eureka", file: "/certificates/Hackathons/Eureka.pdf" }
  ];

  return (
    <section className="certificates" id="certificates">

      <h2>Certifications</h2>

      <div className="certificate-section">

        <div className="certificate-card">

          <h3>📘 Course Certifications</h3>

          <div className="certificate-list">

            {courseCertificates.map((item, index) => (

              <button
                key={index}
                className="certificate-btn"
                onClick={() => setPdf(item.file)}
              >
                {item.title}
              </button>

            ))}

          </div>

        </div>

        <div className="certificate-card">

          <h3>🏆 Hackathon Certifications</h3>

          <div className="certificate-list">

            {hackathonCertificates.map((item, index) => (

              <button
                key={index}
                className="certificate-btn"
                onClick={() => setPdf(item.file)}
              >
                {item.title}
              </button>

            ))}

          </div>

        </div>

      </div>

      {pdf && (

        <div
          className="popup"
          onClick={() => setPdf("")}
        >

          <div
            className="popup-content pdf-popup"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setPdf("")}
            >
              ✕
            </button>

            <iframe
              src={pdf}
              title="Certificate"
              className="pdf-viewer"
            />

          </div>

        </div>

      )}

    </section>
  );
}

export default Certificates;