import "../Projects.css";

function Evoting() {
  const skills = [
    "Full Stack",
    "Security",
    "Database Design",
    "Authentication",
    "Testing",
    "System Design",
  ];

  return (
    <div className="page">
      <h1 className="title">e-Voting System</h1>
      <h2> Metageeks Program : Trainee Software Engineer</h2>
      <br/>


      <div className="photo-container">
        <div className="photo-placeholder">Project Image Here</div>
      </div>

      <div className="description">
        <h2 className="description-title">Description</h2>
        <p>
          Add the details for your e-Voting System project here. Cover the
          architecture, functionality, security considerations, and outcome.
        </p>
      </div>

      <h2 className="section-title">Skills Involved</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="image-placeholder">Image</div>
            <div className="skill-name">{skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Evoting;
