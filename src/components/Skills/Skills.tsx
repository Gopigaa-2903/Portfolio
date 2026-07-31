import "./Skills.css";

function Skills() {
  const skills = [
    "Python",
    "Java",
    "SQL",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Power BI",
    "Excel",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "Data Analytics",
    "Git & GitHub",
    "PostgreSQL",
    "TensorFlow",
  ];

  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>
      <p className="subtitle">
        Technologies and tools that I use to build projects and analyze data.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;