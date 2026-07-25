import { Link } from "react-router-dom";
import profile from "./images/profile.jpg";
import publicationImage from "./images/image.png";

function Home() {
  const smoothScrollTo = (event, sectionId) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (!target) return;

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + startY - 80;
    const distance = targetY - startY;
    const duration = 1000;
    const startTime = performance.now();

    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

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
            <a href="#about" className="btn-primary" onClick={(e) => smoothScrollTo(e, "about") }>
              Explore My Work
            </a>
            <a href="#contact" className="btn-secondary" onClick={(e) => smoothScrollTo(e, "contact") }>
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
          <div className="section-card experience-panel">
            <h3>Experience</h3>

            <div className="experience-grid">
              <Link to="/mphasis" className="experience-card">
                <div className="card-content">
                  <span className="card-title">Mphasis Limited</span>
                  <p className="card-text" text-align="justify"><b>Github Assist</b> : Worked 
with .NET MVC, WebAPI. Created wrapper APIs that utilize GitHub REST API. Contributed on the frontend, backend and integration part. Deployed an SWA in Azure platform.</p>
                </div>
              </Link>

              <Link to="/vact" className="experience-card">
                <div className="card-content">
                  <span className="card-title">VACT Technologies</span>
                  <p className="card-text" text-align="justify">Worked on the Yocto Project, layers, recipes, and 
package customization. Created two customized Linux 
images— one minimal CLI image, one with a basic desktop UI and Python editor.</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="section-card">
            <h3>Education</h3>
            <br />
            <h4>SASTRA Deemed University, Thanjavur, India      :       Oct 2022 - Jul 2026</h4>
            <br />
            <p>B. Tech in Electronics & Communication Engineering -  <b>CGPA: 7.9081</b> <br/>
            <p>Minor Specialization in Artificial Intelligence and Machine Learning</p>  </p> 
            <br/>
            <h4>Rank International Senior Secondary School : Jun 2021 - May 2022</h4>
            <br/><p>12th Grade <b>Percentage: 87.8%</b></p>
            <br/>
            <h4>Rank International Senior Secondary School : Jun 2019 - March 2020</h4>
            <br/><p>10th Grade <b>Percentage: 90.8%</b></p>
          </div>

          <div className="section-card experience-panel">
            <h3>Projects</h3>

            <div className="experience-grid">
              <Link to="/criq" className="experience-card">
                <div className="card-content">
                  <span className="card-title">crIQ</span>
                  <p className="card-text" text-align="justify">A Deep Learning Framework for Intelligent Cricket Strategy 
and Phase-wise Score Forecasting. Applied 
feature engineering, hyperparameter tuning, and regression/classification models to 
optimize predictions.</p>
                </div>
              </Link>

              <Link to="/evoting" className="experience-card">
                <div className="card-content">
                  <span className="card-title">e-Voting System</span>
                  <p className="card-text" text-align="justify">A voting system using Lightweight cryptography in 
ESP32 in order to provide encryption in IoT Communications. Cryptographic algorithms and RFID interfacing implemented using MicroPython. RFID vote cast and cloud upload.</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="section-card experience-panel">
            <h3>Research Publications</h3>

            <div className="publication-layout">
              <Link to="/crypto" className="experience-card publication-card">
                <div className="card-content">
                  <span className="card-title">Lightweight Cryptography</span>
                  <p className="card-text">Enhanced Substitution-Permutation Network Encryption technique for Lightweight
Cryptography in Internet of Things (IoT) applications.<i>Best Paper Award</i> in Systems for a secure and sustainable world.<br/><b> IEEE ICSCC 2025, MITS, Kochi</b></p>
                </div>
              </Link>

              <img
                src={publicationImage}
                alt="publication"
                className="publication-image"
              />
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