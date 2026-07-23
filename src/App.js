import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Mphasis from "./Experience/Mphasis";
import Vact from "./Experience/Vact";
import CrIQ from "./Projects/CrIQ";
import Evoting from "./Projects/Evoting";
import Crypto from "./Papers/Crypto";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mphasis" element={<Mphasis />} />
        <Route path="/vact" element={<Vact />} />
        <Route path="/criq" element={<CrIQ />} />
        <Route path="/evoting" element={<Evoting />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </Router>
  );
}

export default App;