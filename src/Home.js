import { Link } from "react-router-dom";
import profile from "./images/profile.jpg";

function Home() {
  return (
    <div className="home-page">
      <section id="home" className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Know Me! : )</span>
          <h1 className="hero-title">
            Hello, I'm <span>VIJAY RAHUL V</span>
          </h1>

          <p className="hero-text">
            I build thoughtful, modern digital experiences with a focus on clean design,
            smooth usability, and strong visual storytelling.
          </p>

          <div className="hero-actions">
            <a href="#about" className="btn-primary">
              Explore My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="profile-card">
          <img src={profile} alt="profile" className="profile-image" />
        </div>
      </section>

      <section id="about" className="content-section">
        <div className="section-header">
          <span className="section-kicker">About</span>
          <h2>Building polished experiences with intent</h2>
        </div>

        <div className="about-grid">
          <div className="section-card">
            <p>
              Write something about yourself here. Mention your interests, skills,
              projects, education, and the kind of work you enjoy creating.
            </p>
          </div>

          <div className="section-card experience-panel">
            <h3>Experience</h3>

            <div className="experience-grid">
              <Link to="/mphasis" className="experience-card">
                <span>Mphasis Limited</span>
              </Link>

              <Link to="/vact" className="experience-card">
                <span>VACT Technologies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="content-section contact-section">
        <div className="section-header">
          <span className="section-kicker">Contact</span>
          <h2>Let’s connect</h2>
        </div>

        <div className="contact-card">
          <div className="contact-item">
            <span>Email</span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vvijayrahul04@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              vvijayrahul04@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span>LinkedIn</span>
            <a href="https://linkedin.com/in/vijay-rahul-330104310" target="_blank" rel="noreferrer">
              linkedin.com/in/vijay-rahul-330104310
            </a>
          </div>

          <div className="contact-item">
            <span>GitHub</span>
            <a href="https://github.com/vijay-rahul-v" target="_blank" rel="noreferrer">
              https://github.com/vijay-rahul-v
            </a>
          </div>

          <div className="contact-item">
            <span>Resume</span>
            <a
              href="https://github.com/vijay-rahul-v/Resume/blob/main/VijayRahulV_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/vijay-rahul-v/Resume/blob/main/VijayRahulV_Resume.pdf
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;