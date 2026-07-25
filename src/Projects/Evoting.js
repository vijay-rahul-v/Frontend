import "../Projects.css";
import evoteImg from "../images/evote.png";
import hardwareFlowImg from "../images/hardwareandflow.png";

function Evoting() {
  const skills = [
    "Full Stack",
    "Security",
    "Database Design",
    "Authentication",
    "Testing",
    "System Design",
  ];

  return (
    <div className="page">
      <h1 className="title">e-Voting System</h1>
      <h2>IoT-Driven Secure Election System with RFID</h2>
      <br/>


      <div className="photo-container">
        <img src={evoteImg} alt="e-Voting system" />
      </div>

      <div className="description">
        <h2 className="description-title">Description</h2>
        <p>
         This project presents a secure IoT-based electronic voting system that combines RFID authentication, lightweight cryptography, and cloud communication to ensure safe and reliable voting. Each voter is authenticated using an RFID card, after which the voter's display name is shown on the OLED display and voting is enabled. The voter casts their vote through a matrix keypad, providing a simple and user-friendly interface. The system is designed to prevent unauthorized access, securely store votes, and enable transparent vote counting while remaining suitable for resource-constrained IoT devices.
         </p>
         <p>
          The system is implemented using ESP32 programmed in MicroPython, with the MFRC522 RFID reader, SSD1306 OLED display, and a 4×4 matrix keypad as the primary hardware components. A custom lightweight cryptography algorithm encrypts each vote before it is uploaded to the ThingSpeak Cloud using the Write API Key. A second ESP32 retrieves the encrypted data using the Read API Key, performs decryption, counts the votes, and displays the final results. This end-to-end encryption and decryption process ensures secure IoT communication while maintaining low computational overhead, making the system efficient for embedded applications.
         </p>
      </div>
      <h2 className="description-title">Hardware Setup</h2>
      <div className="photo-container">
        <img src={hardwareFlowImg} alt="Hardware setup and system flow" />
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

export default Evoting;
