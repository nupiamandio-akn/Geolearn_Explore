import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Ciencias from "./pages/Ciencias";
import Minerais from "./pages/Minerais";
import Energia from "./pages/Energia";
import Start from "./pages/Start";

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5] font-sans selection:bg-[#d4a017] selection:text-[#0f0f0f]">
        <Navigation />
        
        <main>
          <RoutesWithTransition />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

function RoutesWithTransition() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/ciencias" element={<PageTransition><Ciencias /></PageTransition>} />
        <Route path="/minerais" element={<PageTransition><Minerais /></PageTransition>} />
        <Route path="/energia" element={<PageTransition><Energia /></PageTransition>} />
        <Route path="/comecar" element={<PageTransition><Start /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}
