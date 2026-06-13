import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import LoadingFallback from './components/LoadingFallback.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Plans = lazy(() => import('./pages/Plans.jsx'));
const Coaches = lazy(() => import('./pages/Coaches.jsx'));
const Careers = lazy(() => import('./pages/Careers.jsx'));
const Policies = lazy(() => import('./pages/Policies.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black text-on-surface">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;