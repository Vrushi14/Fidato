import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PricingPage from './pages/PricingPage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Dashboard from './pages/Dashboard'
import TestWebsite from './pages/TestWebsite'
import PageTransition from './components/PageTransition'

function AppContent() {
  const location = useLocation();
  const authRoutes = ['/login', '/signup', '/test-website', '/dashboard'];
  const hideLayout = authRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {!hideLayout && (
        <div className="hero-bg-gradient" style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '2400px', 
          zIndex: -1, 
          pointerEvents: 'none', 
          overflow: 'hidden',
          maskImage: 'linear-gradient(to bottom, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent)'
        }}>
          <svg width="100%" height="100%" viewBox="0 0 1440 2400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice">
            <g opacity="0.61">
              <g filter="url(#filter0_f_133_247)">
                <ellipse cx="512.742" cy="393.246" rx="512.742" ry="393.246" transform="matrix(-1 4.60688e-09 4.60688e-09 1 649.483 141)" fill="#C1BCFF" />
                <ellipse cx="512.742" cy="393.246" rx="512.742" ry="393.246" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1582 59)" fill="#FFBCBD" />
                <ellipse cx="399.115" cy="305.918" rx="399.115" ry="305.918" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1767.29 337.087)" fill="#FFD9DD" />
                <ellipse cx="399.115" cy="305.918" rx="399.115" ry="305.918" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1324 435)" fill="#DEB5FF" />
                <ellipse cx="399.115" cy="305.918" rx="399.115" ry="305.918" transform="matrix(-1 4.60688e-09 4.60688e-09 1 653 422)" fill="#DEB5FF" />
                <ellipse cx="442.435" cy="339.135" rx="442.435" ry="339.135" transform="matrix(-1 4.60688e-09 4.60688e-09 1 626.758 328.515)" fill="#FFAAC2" />
                <ellipse cx="132.091" cy="68.0413" rx="132.091" ry="68.0413" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1456.23 899.609)" fill="#FFDA58" />
                <ellipse cx="132.091" cy="68.0413" rx="132.091" ry="68.0413" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1456.23 873.893)" fill="#FFDD65" />
                <ellipse cx="322.5" cy="285" rx="322.5" ry="285" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1038 938)" fill="#C173FF" fillOpacity="0.56" />
                <ellipse cx="381.5" cy="370" rx="381.5" ry="370" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1017 746)" fill="#FFBCBD" />
                <ellipse cx="363.606" cy="278.594" rx="363.606" ry="278.594" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1003 848)" fill="#C173FF" />
              </g>
            </g>
            <defs>
              <filter id="filter0_f_133_247" x="-659.591" y="-224.591" width="2710.47" height="2400" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="141.795" result="effect1_foregroundBlur_133_247" />
              </filter>
            </defs>
          </svg>
        </div>
      )}

      {!hideLayout && <Navbar />}
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/pricing" element={<PageTransition><PricingPage /></PageTransition>} />
            <Route path="/faq" element={<PageTransition><FAQPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
            <Route path="/login" element={<PageTransition><LoginPage /></PageTransition>} />
            <Route path="/signup" element={<PageTransition><SignupPage /></PageTransition>} />
            <Route path="/test-website" element={<PageTransition><TestWebsite /></PageTransition>} />
            <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
            <Route path="*" element={<PageTransition><Home /></PageTransition>} />
          </Routes>
        </AnimatePresence>
        {!hideLayout && (
          <>

            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Footer />
            </motion.div>
          </>
        )}
      </main>

      {!hideLayout && (
        <div className="bottom-bg-gradient" style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          width: '100%', 
          height: '4000px', 
          zIndex: -1, 
          pointerEvents: 'none', 
          overflow: 'hidden',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%)'
        }}>
          <svg width="100%" height="100%" viewBox="0 0 1440 2400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
            <g opacity="0.61">
              <g filter="url(#filter-bottom-blur)">
                <ellipse cx="1230.26" cy="1414.25" rx="512.742" ry="393.246" fill="#C1BCFF" />
                <ellipse cx="297.742" cy="1032.25" rx="512.742" ry="393.246" fill="#FFBCBD" />
                <ellipse cx="-1.17346" cy="1523" rx="399.115" ry="305.918" fill="#FFD9DD" />
                <ellipse cx="442.115" cy="820.92" rx="399.115" ry="305.918" fill="#DEB5FF" />
                <ellipse cx="1113.11" cy="907.92" rx="399.115" ry="305.918" fill="#DEB5FF" />
                <ellipse cx="1182.68" cy="1147.65" rx="442.435" ry="339.135" fill="#FFAAC2" />
                <ellipse cx="42.8567" cy="1047.65" rx="132.091" ry="68.0413" fill="#FFDA58" />
                <ellipse cx="42.8567" cy="821.93" rx="132.091" ry="68.0413" fill="#FFDD65" />
                <ellipse cx="651.5" cy="1803" rx="322.5" ry="285" fill="#C173FF" fillOpacity="0.56" />
                <ellipse cx="731.5" cy="1296" rx="381.5" ry="370" fill="#FFBCBD" />
                <ellipse cx="727.606" cy="1606.59" rx="363.606" ry="278.594" fill="#C173FF" />
              </g>
            </g>
            <defs>
              <filter id="filter-bottom-blur" x="-800" y="0" width="3040" height="2400" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_bottom" />
              </filter>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
