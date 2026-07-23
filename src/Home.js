import { Link } from "react-router-dom";
import profile from "./images/profile.jpg";

function Home() {
  return (
    <div>

      {/* HOME */}

      <section
        id="home"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "50px"
        }}
      >

        <div>
          <h1>Hello, I'm</h1>
          <h1 style={{fontSize:"60px"}}>VIJAY RAHUL V</h1>

          <p>
            This is some introductory text.
            You can later modify this to include your
            career objective or short introduction.
          </p>

        </div>

        <div>
          <img
            src={profile}
            alt="profile"
            style={{
              width: "300px",
              height: "350px",
              objectFit: "cover",
              borderRadius: "15px"
            }}
          />
        </div>

      </section>



      {/* ABOUT */}

      <section
        id="about"
        style={{
          minHeight: "100vh",
          padding: "80px"
        }}
      >

        <h1>About Me</h1>

        <p>
          Write something about yourself here.
          Mention your interests, skills,
          projects, education, etc.
        </p>

        <h2>Experience</h2>

        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "30px"
          }}
        >

          <Link to="/mphasis" style={{textDecoration:"none"}}>
            <div
              style={{
                width: "220px",
                height: "150px",
                background: "#ececec",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                fontWeight: "bold"
              }}
            >
              Mphasis Internship
            </div>
          </Link>

          <Link to="/vact" style={{textDecoration:"none"}}>
            <div
              style={{
                width: "220px",
                height: "150px",
                background: "#ececec",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                fontWeight: "bold"
              }}
            >
              VACT Technologies
            </div>
          </Link>

        </div>

      </section>



      {/* CONTACT */}

      <section
        id="contact"
        style={{
          minHeight: "100vh",
          padding: "80px"
        }}
      >

        <h1>Contact</h1>

        <p>Email : example@gmail.com</p>

        <p>LinkedIn : linkedin.com/in/username</p>

        <p>GitHub : github.com/username</p>

        <p>
          Add any other contact information here.
        </p>

      </section>

    </div>
  );
}

export default Home;