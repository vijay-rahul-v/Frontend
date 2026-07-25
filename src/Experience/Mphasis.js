import "../Projects.css";

function Mphasis() {
  const skills = [
    "GitHub",
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "JavaScript",
  ];

  return (
    <div className="page">
      <h1 className="title">Mphasis</h1>
      <h2> Metageeks Program : Trainee Software Engineer</h2>
      <br/>

      <div className="photo-container">
        <div className="photo-placeholder">Project Image Here</div>
      </div>

      <div className="description">
        <h2 className="description-title">Description</h2>
        <p>
          Completed a 3 month training and internship program focused on Web Development. 
Collaborated within a team of 10 to solve a problem in an existing application. Worked 
with .NET MVC, WebAPI Created wrapper APIs that utilize GitHub REST API. 
Contributed on the frontend, backend and integration part, worked with Github API’s and 
workflows, Deployed a Static Web App in Azure platform. Managed splitting the work 
among the UI team. Gained knowledge on Dotnet MVC, API communications, UI, GitHub 
and workflows, SWA.
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

export default Mphasis;