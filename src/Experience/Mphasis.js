import "../Projects.css";
import mphasisImg from "../images/mphasisimg.jpeg";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initTwoFingerSwipe } from '../twoFingerSwipe'; 

function Mphasis() {

 const navigate = useNavigate();

  useEffect(() => {
    const removeSwipeListener = initTwoFingerSwipe(() => {
      console.log("Navigating home now...");
      navigate('/'); 
    });

    return () => removeSwipeListener();
  }, [navigate]);


  const skills = [
    "C#",
    "ASP.NET MVC",
    "ASP.NET WebAPI",
    "React.js",
    "Github REST API",
    "Azure SWA",
  ];

  return (
    <div className="page">
      <h1 className="title">Mphasis Limited</h1>
      <h2> Metageeks Program : Trainee Software Engineer</h2>
      <br/>

      <div className="photo-container" style={{ maxWidth: "900px" }}>
        <img src={mphasisImg} alt="Mphasis project" />
      </div>

      <div className="description">
        <h2 className="description-title">Description</h2>
        <p>
         During my 3-month Web Development training and internship, I worked as part of a 10-member team to enhance an existing enterprise web application. I contributed to both the frontend and backend while collaborating closely with other team members throughout the development lifecycle. I developed user interface components using React.js, implemented new features, and integrated them with backend services. I also coordinated work distribution among the UI team to ensure smooth development and timely delivery. The internship provided hands-on experience in full-stack application development, API integration, version control, and cloud deployment using modern development practices.
        </p>
        <br/>
        <p>
          I worked with .NET MVC, ASP.NET Web API, and React.js to build and integrate application modules. I developed wrapper APIs that consumed the GitHub REST API for fetching repository data and file contents, and implemented the frontend logic to display files through a sliding side panel triggered by a "View" button. I gained practical knowledge of GitHub REST APIs, request handling, authentication, and API communication between the frontend and backend. I also worked with GitHub Actions by modifying the Azure Static Web App (SWA) workflow YAML file to support deployment requirements and successfully deployed the application on the Azure Static Web Apps platform.
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