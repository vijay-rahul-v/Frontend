import { useLayoutEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Mphasis from "./Experience/Mphasis";
import Vact from "./Experience/Vact";
import CrIQ from "./Projects/CrIQ";
import Evoting from "./Projects/Evoting";
import Crypto from "./Papers/Crypto";

const HOME_SCROLL_KEY = "portfolio-home-scroll";

function ScrollToTop() {
  const { pathname } = useLocation();
  const previousPathnameRef = useRef(pathname);
  const initialLoadRef = useRef(true);

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.history.scrollRestoration = "manual";

    if (pathname === "/") {
      if (initialLoadRef.current) {
        sessionStorage.removeItem(HOME_SCROLL_KEY);
        window.scrollTo(0, 0);
      } else if (previousPathnameRef.current === "/" && pathname === "/") {
        window.scrollTo(0, 0);
      } else {
        const savedScroll = sessionStorage.getItem(HOME_SCROLL_KEY);
        const targetScroll = savedScroll ? Number(savedScroll) : 0;
        window.scrollTo(0, targetScroll);
      }
    } else {
      if (previousPathnameRef.current === "/") {
        sessionStorage.setItem(HOME_SCROLL_KEY, String(window.scrollY));
      }
      window.scrollTo(0, 0);
    }

    initialLoadRef.current = false;
    previousPathnameRef.current = pathname;
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
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