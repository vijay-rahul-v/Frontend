import { Link } from "react-router-dom";
import "../Projects.css";
import vactImg from "../images/vactimg.png";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initTwoFingerSwipe } from '../twoFingerSwipe'; 

function Vact() {

  const navigate = useNavigate();
  
    useEffect(() => {
      const removeSwipeListener = initTwoFingerSwipe(() => {
        console.log("Navigating home now...");
        navigate('/'); 
      });
  
      return () => removeSwipeListener();
    }, [navigate]);
    
  const skills = [
    "Teamwork",
    "Problem Solving",
    "Software Development",
    "Client Communication",
    "Project Delivery",
    "Leadership",
  ];

  return (
    <div className="page">
      <h1 className="title">VACT Technologies</h1>
      <h2> Yocto Project : Build your own Embedded Linux</h2>
      <br/>


      <div className="photo-container">
        <img src={vactImg} alt="Yocto Project embedded Linux" />
      </div>

      <div className="description">
        <h2 className="description-title">Description</h2>
        <p>
          Built two custom embedded Linux images for Raspberry Pi 3 using the Yocto Project: a minimal command-line image with Python support and a lightweight desktop image featuring a graphical interface, file manager, terminal, and Python editor. Worked extensively with the Yocto build system, including BitBake, Poky, Linux shell commands, Git, and cross-compilation workflows. Configured and customized build environments by modifying local.conf and bblayers.conf, integrating required layers, packages, and features based on application requirements while optimizing image size and functionality.
        </p>
        <p>
          Gained practical experience with Yocto layers such as meta-openembedded, meta-python, meta-raspberrypi, and meta-xfce, and understood the role of Board Support Packages (BSPs) in embedded Linux. Worked on package management, dependency resolution, image customization, and build automation using BitBake recipes. Troubleshot complex build issues involving GCC, Binutils, OpenSSL, firmware licensing, host tool dependencies, and package compatibility. Developed a strong understanding of embedded Linux architecture, boot image generation, cross-toolchains, and deployment of customized Linux distributions suitable for Python-based IoT and edge computing applications.
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

      <Link to="/" className="back-link">
        Back to Home
      </Link>
    </div>
  );
}

export default Vact;