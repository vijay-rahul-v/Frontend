import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        background: "#222",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      <h2>My Portfolio</h2>

      <div style={{ display: "flex", gap: "30px" }}>
        {location.pathname === "/" ? (
          <>
            <ScrollLink to="home" smooth duration={500} style={{cursor:"pointer"}}>
              Home
            </ScrollLink>

            <ScrollLink to="about" smooth duration={500} style={{cursor:"pointer"}}>
              About
            </ScrollLink>

            <ScrollLink to="contact" smooth duration={500} style={{cursor:"pointer"}}>
              Contact
            </ScrollLink>
          </>
        ) : (
          <Link to="/">Home</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;