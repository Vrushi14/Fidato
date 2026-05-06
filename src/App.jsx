import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PricingPage from './pages/PricingPage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function AppContent() {
  const location = useLocation();
  const authRoutes = ['/login', '/signup'];
  const hideLayout = authRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {/* Global SVG Gradient Background */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1472px', overflow: 'hidden', zIndex: -1,
        pointerEvents: 'none'
      }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 1472" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin slice"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <g filter="url(#filter0_f_133_248)">
            <ellipse cx="1230.26" cy="514.246" rx="512.742" ry="393.246" fill="#C1BCFF"/>
            <ellipse cx="297.742" cy="432.246" rx="512.742" ry="393.246" fill="#FFBCBD"/>
            <ellipse cx="-1.17343" cy="623.005" rx="399.115" ry="305.918" fill="#FFD9DD"/>
            <ellipse cx="442.115" cy="720.918" rx="399.115" ry="305.918" fill="#DEB5FF"/>
            <ellipse cx="1113.11" cy="707.918" rx="399.115" ry="305.918" fill="#DEB5FF"/>
            <ellipse cx="1182.68" cy="647.65" rx="442.435" ry="339.135" fill="#FFAAC2"/>
            <ellipse cx="42.8568" cy="647.65" rx="132.091" ry="68.0413" fill="#FFDA58"/>
            <ellipse cx="42.8568" cy="621.934" rx="132.091" ry="68.0413" fill="#FFDD65"/>
            <ellipse cx="651.5" cy="903" rx="322.5" ry="285" fill="#C173FF" fillOpacity="0.56"/>
            <ellipse cx="731.5" cy="696" rx="381.5" ry="370" fill="#FFBCBD"/>
            <ellipse cx="727.606" cy="806.594" rx="363.606" ry="278.594" fill="#C173FF"/>
          </g>
          <defs>
            <filter id="filter0_f_133_248" x="-683.879" y="-244.591" width="2710.47" height="1716.18"
              filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="141.795" result="effect1_foregroundBlur_133_248"/>
            </filter>
          </defs>
        </svg>
      </div>

      {!hideLayout && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* Redirect any other path to home */}
          <Route path="*" element={<Home />} />
        </Routes>
        {!hideLayout && <Footer />}
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
