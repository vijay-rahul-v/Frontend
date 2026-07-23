import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Mphasis from "./Mphasis";
import Vact from "./Vact";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mphasis" element={<Mphasis />} />
        <Route path="/vact" element={<Vact />} />
      </Routes>
    </Router>
  );
}

export default App;