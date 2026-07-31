import "./Projects.css";
import { useState } from "react";

function Projects() {
  const [gallery, setGallery] = useState<string[] | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      title: "HoloMed",
      description:
        "An AI-powered healthcare visualization platform that converts CT/MRI scans into interactive 3D holographic models for surgeons. The project combines Artificial Intelligence, Computer Vision, and IoT technologies to improve medical diagnosis and surgical planning.",

      tech: "React • Python • OpenCV • ESP32 • AI",

      github: "https://github.com/Gopigaa-2903",

      images: [
        "/images/projects/holomed/home.jpg",
        "/images/projects/holomed/dashboard.jpg",
        "/images/projects/holomed/architecture.jpg",
        "/images/projects/holomed/demo1.jpg",
      ],
    },

    {
      title: "Shell Cycle",

      description:
        "An eco-friendly smart road maintenance solution that utilizes waste shell materials for sustainable pothole filling. The project focuses on environmental sustainability while improving road quality at lower cost.",

      tech: "HTML • CSS • JavaScript",

      github: "https://github.com/Gopigaa-2903",

      images: [
        "/images/projects/shellcycle/home.png",
        "/images/projects/shellcycle/model.jpg",
        "/images/projects/shellcycle/event.jpg",
        "/images/projects/shellcycle/presentation.jpg",
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
    <section className="projects" id="projects">

      <h2>Featured Projects</h2>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img
              src={project.images[0]}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="tech-stack">
                {project.tech}
              </span>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  GitHub
                </a>

                <button
                  className="gallery-btn"
                  onClick={() => {
                    setGallery(project.images);
                    setCurrentImage(0);
                  }}
                >
                  📂 View Gallery
                </button>

              </div>

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
              alt="Project"
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

export default Projects;