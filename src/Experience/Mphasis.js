import { Link } from "react-router-dom";

function Mphasis() {
  return (
    <div style={{padding:"50px"}}>

      <h1>Mphasis Internship</h1>

      <p>
        Write about your internship experience here.
      </p>

      <p>
        Mention technologies you learned,
        projects you worked on,
        responsibilities,
        achievements,
        etc.
      </p>

      <p>
        Add screenshots or certificates later if you want.
      </p>

      <Link to="/">
        Back to Home
      </Link>

    </div>
  );
}

export default Mphasis;