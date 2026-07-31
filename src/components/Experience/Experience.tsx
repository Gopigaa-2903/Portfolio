import "./Experience.css";
import { useState } from "react";

function Experience() {
  const [gallery, setGallery] = useState<string[] | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const experiences = [
    {
      company: "Elysium Groups",
      role: "Data Science Intern",
      duration: "18 Jun 2025 - 18 Jul 2025",
      description:
        "Worked on Data Science using Python, Pandas, NumPy, Machine Learning and Data Analytics. Built analytical models using real-world datasets.",
      gallery: [
        "/images/internships/elysium/certificate.jpg",
        "/images/internships/elysium/photo1.jpg",
        "/images/internships/elysium/photo2.jpg",
      ],
    },
    {
      company: "Enlight Technologies",
      role: "Data Analytics Intern",
      duration: "09 Jun 2026 - 09 Jul 2026",
      description:
        "Worked on Data Analytics, Dashboard Development and Business Intelligence using real-world datasets.",
      gallery: [
        "/images/internships/enlight/certificate.jpg",
        "/images/internships/enlight/photo1.jpg",
        "/images/internships/enlight/photo2.jpg",
      ],
    },
  ];

  const previousImage = () => {
    if (!gallery) return;

    setCurrentImage((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    if (!gallery) return;

    setCurrentImage((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="experience" id="experience">
      <h2>Internship Experience</h2>

      <div className="experience-container">
        {experiences.map((item, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-top">
              <div>
                <h3>{item.company}</h3>
                <h4>{item.role}</h4>
              </div>

              <span className="duration">{item.duration}</span>
            </div>

            <p>{item.description}</p>

            <div className="experience-buttons">
              <button
                className="gallery-btn"
                onClick={() => {
                  setGallery(item.gallery);
                  setCurrentImage(0);
                }}
              >
                📂 View Gallery
              </button>
            </div>
          </div>
        ))}
      </div>

      {gallery && (
        <div
          className="popup"
          onClick={() => setGallery(null)}
        >
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setGallery(null)}
            >
              ✕
            </button>

            <button
              className="arrow left-arrow"
              onClick={previousImage}
            >
              ❮
            </button>

            <img
              src={gallery[currentImage]}
              alt="Internship"
              className="gallery-image"
            />

            <button
              className="arrow right-arrow"
              onClick={nextImage}
            >
              ❯
            </button>

            <p className="image-counter">
              {currentImage + 1} / {gallery.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience;