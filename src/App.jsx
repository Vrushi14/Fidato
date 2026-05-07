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
import PageTransition from './components/PageTransition'

function AppContent() {
  const location = useLocation();
  const authRoutes = ['/login', '/signup'];
  const hideLayout = authRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {/* Global SVG Gradient Background (Top) */}
      <div className="global-top-gradient">
        <svg width="100%" height="100%" viewBox="0 0 1440 1492" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice">
          <g opacity={location.pathname === '/contact' ? 0.4 : 0.7} filter="url(#filter0_f_133_248)">
            <ellipse cx="512.742" cy="393.246" rx="512.742" ry="393.246" transform="matrix(-1 4.60688e-09 4.60688e-09 1 649.483 141)" fill="#C1BCFF"/>
            <ellipse cx="512.742" cy="393.246" rx="512.742" ry="393.246" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1582 59)" fill="#FFBCBD"/>
            <ellipse cx="399.115" cy="305.918" rx="399.115" ry="305.918" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1767.29 337.087)" fill="#FFD9DD"/>
            <ellipse cx="399.115" cy="305.918" rx="399.115" ry="305.918" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1324 435)" fill="#DEB5FF"/>
            <ellipse cx="399.115" cy="305.918" rx="399.115" ry="305.918" transform="matrix(-1 4.60688e-09 4.60688e-09 1 653 422)" fill="#DEB5FF"/>
            <ellipse cx="442.435" cy="339.135" rx="442.435" ry="339.135" transform="matrix(-1 4.60688e-09 4.60688e-09 1 626.758 328.515)" fill="#FFAAC2"/>
            <ellipse cx="132.091" cy="68.0413" rx="132.091" ry="68.0413" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1456.23 599.609)" fill="#FFDA58"/>
            <ellipse cx="132.091" cy="68.0413" rx="132.091" ry="68.0413" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1456.23 573.893)" fill="#FFDD65"/>
            <ellipse cx="322.5" cy="285" rx="322.5" ry="285" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1038 638)" fill="#C173FF" fillOpacity="0.56"/>
            <ellipse cx="381.5" cy="370" rx="381.5" ry="370" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1017 346)" fill="#FFBCBD"/>
            <ellipse cx="363.606" cy="278.594" rx="363.606" ry="278.594" transform="matrix(-1 4.60688e-09 4.60688e-09 1 1003 548)" fill="#C173FF"/>
          </g>
          <defs>
            <filter id="filter0_f_133_248" x="-659.591" y="-224.591" width="2710.47" height="1716.18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="141.795" result="effect1_foregroundBlur_133_248"/>
            </filter>
          </defs>
        </svg>
      </div>
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
            <Route path="*" element={<PageTransition><Home /></PageTransition>} />
          </Routes>
        </AnimatePresence>
        {!hideLayout && (
          <>
            <div className="global-bottom-gradient">
              <svg width="100%" height="100%" viewBox="0 0 1440 1727" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
                <g filter="url(#filter0_f_133_945_global)">
                  <path d="M476.1 395.719C174.497 526.751 38.9627 871.32 173.375 1165.34C307.787 1459.35 661.247 1591.48 962.85 1460.45C1264.45 1329.41 1399.99 984.845 1265.57 690.829C1131.16 396.813 777.702 264.688 476.1 395.719Z" fill="url(#paint0_linear_133_945_global)" fillOpacity="0.8"/>
                </g>
                <defs>
                  <filter id="filter0_f_133_945_global" x="-223.651" y="9.15527e-05" width="1886.25" height="1856.16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="172.55" result="effect1_foregroundBlur_133_945"/>
                  </filter>
                  <linearGradient id="paint0_linear_133_945_global" x1="173.375" y1="1165.34" x2="887.54" y2="356.882" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D7F0FF"/>
                    <stop offset="0.333333" stopColor="#D9CFFF"/>
                    <stop offset="0.666667" stopColor="#FFD1EA"/>
                    <stop offset="1" stopColor="#FFE3D2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
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
