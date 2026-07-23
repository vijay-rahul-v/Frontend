import { Link } from "react-router-dom";

function Vact() {
  return (
    <div style={{padding:"50px"}}>

      <h1>VACT Technologies</h1>

      <p>
        Write about your work experience here.
      </p>

      <p>
        Mention your projects,
        responsibilities,
        technologies,
        achievements,
        and learning outcomes.
      </p>

      <p>
        You can later add images and certificates.
      </p>

      <Link to="/">
        Back to Home
      </Link>

    </div>
  );
}

export default Vact;