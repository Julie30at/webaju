import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Cv from './pages/Cv';
import Contact from './pages/Contact';
import Loading from './pages/Loading';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    return sessionStorage.getItem('hasVisited') ? false : true;
  });

  useEffect(() => {
    if (!sessionStorage.getItem('hasVisited')) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
      }, 4500);
  
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
