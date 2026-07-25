import "../Projects.css";

function Crypto() {
  const skills = [
    "Cryptography",
    "Research",
    "Security",
    "Innovation",
    "Analysis",
    "Technical Writing",
  ];

  return (
    <div className="page">
      <h1 className="title">Lightweight Cryptography</h1>
      <h2> Metageeks Program : Trainee Software Engineer</h2>
      <br/>


      <div className="photo-container">
        <div className="photo-placeholder">Paper Image Here</div>
      </div>

      <div className="description">
        <h2 className="description-title">Description</h2>
        <p>
          Add your publication details for Lightweight Cryptography here.
          Describe the research focus, methods, and findings.
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

export default Crypto;
