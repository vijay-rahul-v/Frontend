import "../Projects.css";
import cryptoImg from "../images/crypto.png";
import bestPaperAwardImg from "../images/bestpaperaward.png";
import blockCipherIcon from "../images/skills/block-cipher.svg";
import spnIcon from "../images/skills/spn.svg";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initTwoFingerSwipe } from '../twoFingerSwipe'; 

function Crypto() {

  const navigate = useNavigate();
  
    useEffect(() => {
      const removeSwipeListener = initTwoFingerSwipe(() => {
        console.log("Navigating home now...");
        navigate('/'); 
      });
  
      return () => removeSwipeListener();
    }, [navigate]);
    
  const skills = [
    { name: "Block Cipher", icon: blockCipherIcon },
    { name: "SPN", icon: spnIcon },
    { name: "S-box", icon: "https://img.icons8.com/fluency/96/box.png" },
    { name: "Chaotic Mapping", icon: "https://img.icons8.com/fluency/96/physics.png" },
    { name: "Micropython", icon: "https://cdn.simpleicons.org/micropython/ffffff?size=64" },
    { name: "ESP-32", icon: "https://cdn.simpleicons.org/espressif/ffffff?size=64" },
  ];

  return (
    <div className="page">
      <h1 className="title">Lightweight Cryptography</h1>
      <h2> Enhanced Substitution-Permutation Network Encryption technique for Lightweight 
Cryptography in IoT applications</h2>
      <br/>


      <div className="photo-container">
        <a href="https://ieeexplore.ieee.org/document/11233824" target="_blank" rel="noreferrer">
          <img src={cryptoImg} alt="Lightweight Cryptography" />
        </a>
      </div>

      <div className="description">
        <h2 className="description-title">Description</h2>
        <p>
          This work consists of a specifically designed algorithm with multiple permutation and 
substitution operations while achieving lightweight calculations. This multiple - block cipher 
implements a 2D logistic-sine chaotic map which is used to generate a random key; an 
S-Box table with  permutation operations, in each round, is used in the proposed method 
to encrypt the data. Can be utilized for secure communication in IoT applications. Published in IEEE Xplore on 17th November, 2025.   
        </p>
        <br/>
        <p>
          Received Best Paper Award in Systems for a secure and sustainable world
        </p>
      </div>

      <h2 className="description-title">Best Paper Award</h2>
      <div className="photo-container">
        <img src={bestPaperAwardImg} alt="Best paper award" />
      </div>

      <h2 className="section-title">Skills Involved</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="image-placeholder">
              <img src={skill.icon} alt={skill.name} loading="lazy" />
            </div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crypto;
