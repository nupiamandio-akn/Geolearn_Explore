import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Ciencias from "./pages/Ciencias";
import Minerais from "./pages/Minerais";
import Energia from "./pages/Energia";
import Start from "./pages/Start";
import About from "./pages/About";

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5] font-sans selection:bg-[#d4a017] selection:text-[#0f0f0f]">
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ciencias" element={<Ciencias />} />
            <Route path="/minerais" element={<Minerais />} />
            <Route path="/energia" element={<Energia />} />
            <Route path="/comecar" element={<Start />} />
            <Route path="/sobre" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
