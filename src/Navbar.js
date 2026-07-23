import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="top-nav">
      <h2>My Portfolio</h2>

      <div className="nav-links">
        {location.pathname === "/" ? (
          <>
            <ScrollLink to="home" smooth duration={500} className="nav-link">
              Home
            </ScrollLink>

            <ScrollLink to="about" smooth duration={500} className="nav-link">
              About
            </ScrollLink>

            <ScrollLink to="contact" smooth duration={500} className="nav-link">
              Contact
            </ScrollLink>
          </>
        ) : (
          <Link to="/" className="nav-link">
            Home
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;