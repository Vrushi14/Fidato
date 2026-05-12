import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HashLink as NavHashLink } from 'react-router-hash-link'
import MagneticButton from './MagneticButton'
import { motion, AnimatePresence } from 'framer-motion'

// Define framer motion variants
const menuVariants = {
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  },
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  }
};

const itemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 }
};

const navLinksData = [
  { name: 'Home', path: '/', isHash: false },
  { name: 'Benefits', path: '/#features', isHash: true },
  { name: 'Pricing', path: '/pricing', isHash: false },
  { name: 'How It Works', path: '/#steps', isHash: true },
  { name: 'FAQ', path: '/faq', isHash: false },
  { name: 'Contact Us', path: '/contact', isHash: false },
];

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -30, filter: 'blur(5px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      style={{ zIndex: 1000 }}
    >
      <nav className="navbar">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>
          <svg width="51" height="53" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.98568 5.03741L1.76995 17.0277C0.617924 18.615 -0.0016823 20.5263 4.10173e-05 22.4876V40.2525C-0.00578909 42.2077 0.610029 44.1139 1.75854 45.6961C2.90706 47.2784 4.52881 48.4548 6.38953 49.0551L14.5677 51.6512C15.8241 52.0516 17.1529 52.1726 18.461 52.0056C19.7691 51.8385 21.0248 51.3874 22.1403 50.684L42.8439 41.351L9.98568 5.03741Z" fill="#F26419"/>
            <path d="M19.6662 46.4072C13.4269 46.4072 8.15479 41.2853 8.15479 35.2291V11.1781C8.15727 8.21508 9.33511 5.37413 11.4299 3.2785C13.5246 1.18287 16.3651 0.00372918 19.3282 0H39.0131C41.9765 0.00372686 44.8176 1.18255 46.9131 3.27804C49.0086 5.37353 50.1875 8.21465 50.1912 11.1781V30.8631C50.1875 33.8261 49.0084 36.6666 46.9128 38.7613C44.8172 40.8561 41.9761 42.0339 39.0131 42.0364H19.6662V46.4072Z" fill="#F26419"/>
            <path d="M19.136 5C17.509 5.00372 15.9497 5.65199 14.7996 6.80292C13.6496 7.95385 13.0025 9.51368 13 11.1407V35.1917C13 38.3982 15.9107 41.2197 19.2768 41.323V36.9616H38.8209C40.4475 36.9591 42.0068 36.3118 43.1569 35.1616C44.3071 34.0115 44.9544 32.4523 44.9569 30.8257V11.1407C44.9556 9.5133 44.3089 7.95274 43.1586 6.80155C42.0083 5.65035 40.4483 5.00249 38.8209 5H19.136Z" fill="white"/>
            <path d="M25.9713 12.8823H21.624V22.5206H25.9713V12.8823Z" fill="black"/>
            <path d="M37.8253 12.8822H33.478V22.5206H37.8253V12.8822Z" fill="black"/>
          </svg>
          <svg width="115" height="29" viewBox="0 0 115 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M103.765 28.3503C101.753 28.3503 99.9696 27.9045 98.4159 27.013C96.8621 26.096 95.6267 24.8733 94.7097 23.345C93.8182 21.7912 93.3724 20.0591 93.3724 18.1487C93.3724 16.2383 93.8182 14.519 94.7097 12.9907C95.6267 11.4369 96.8621 10.2142 98.4159 9.32271C99.9696 8.40572 101.753 7.94723 103.765 7.94723C105.752 7.94723 107.522 8.40572 109.076 9.32271C110.63 10.2142 111.852 11.4241 112.744 12.9525C113.661 14.4808 114.119 16.2129 114.119 18.1487C114.119 20.0591 113.661 21.7912 112.744 23.345C111.852 24.8733 110.63 26.096 109.076 27.013C107.522 27.9045 105.752 28.3503 103.765 28.3503ZM103.765 24.6059C104.962 24.6059 106.006 24.3257 106.898 23.7653C107.79 23.1795 108.477 22.4026 108.961 21.4346C109.445 20.4667 109.687 19.3714 109.687 18.1487C109.687 16.9516 109.445 15.869 108.961 14.9011C108.477 13.9077 107.79 13.1308 106.898 12.5704C106.006 11.9845 104.962 11.6916 103.765 11.6916C102.542 11.6916 101.485 11.9845 100.594 12.5704C99.7277 13.1308 99.0399 13.8949 98.5305 14.8629C98.0465 15.8308 97.8045 16.9261 97.8045 18.1487C97.8045 19.3459 98.0465 20.4412 98.5305 21.4346C99.0399 22.4026 99.7277 23.1795 100.594 23.7653C101.485 24.3257 102.542 24.6059 103.765 24.6059Z" fill="white"/>
            <path d="M86.1308 27.8918C84.3987 27.8918 83.036 27.3951 82.0426 26.4017C81.0746 25.4082 80.5907 24.0582 80.5907 22.3516V3.51511H84.9464V22.1606C84.9464 22.7464 85.1247 23.2304 85.4813 23.6125C85.8379 23.9691 86.3091 24.1474 86.895 24.1474H90.9832V27.8918H86.1308ZM77.2284 12.1501V8.40572H91.0214V12.1501H77.2284Z" fill="white"/>
            <path d="M62.801 28.3503C60.9415 28.3503 59.3368 27.8918 57.9868 26.9748C56.6368 26.0578 55.5924 24.8351 54.8537 23.3068C54.1405 21.753 53.7839 20.0464 53.7839 18.187C53.7839 16.2511 54.1915 14.519 55.0066 12.9907C55.8472 11.4369 57.0316 10.2142 58.5599 9.32271C60.1137 8.40572 61.9604 7.94723 64.1001 7.94723C66.2142 7.94723 68.01 8.40572 69.4874 9.32271C70.9902 10.2142 72.1365 11.4369 72.9261 12.9907C73.7412 14.519 74.1487 16.2256 74.1487 18.1105V27.8918H69.7548V24.262H69.6784C69.2963 24.9752 68.7996 25.6502 68.1883 26.287C67.577 26.8984 66.8256 27.3951 65.934 27.7771C65.0425 28.1592 63.9982 28.3503 62.801 28.3503ZM63.9854 24.6059C65.1317 24.6059 66.1251 24.3257 66.9657 23.7653C67.8317 23.1795 68.494 22.4026 68.9525 21.4346C69.4364 20.4412 69.6784 19.3332 69.6784 18.1105C69.6784 16.8879 69.4492 15.8053 68.9907 14.8629C68.5322 13.8949 67.8826 13.1308 67.0421 12.5704C66.2015 11.9845 65.1954 11.6916 64.0236 11.6916C62.801 11.6916 61.7566 11.9845 60.8906 12.5704C60.0245 13.1308 59.3623 13.8949 58.9038 14.8629C58.4453 15.8308 58.216 16.9261 58.216 18.1487C58.216 19.3459 58.4453 20.4412 58.9038 21.4346C59.3623 22.4026 60.0118 23.1795 60.8524 23.7653C61.7184 24.3257 62.7628 24.6059 63.9854 24.6059Z" fill="white"/>
            <path d="M39.6568 28.3503C38.1031 28.3503 36.6894 28.1083 35.4158 27.6243C34.1676 27.1149 33.0978 26.3889 32.2063 25.4465C31.3402 24.504 30.6652 23.396 30.1813 22.1224C29.7228 20.8233 29.4935 19.3969 29.4935 17.8431C29.4935 15.8563 29.8883 14.1242 30.678 12.6468C31.4931 11.1694 32.6138 10.0232 34.0403 9.20811C35.4667 8.36753 37.0969 7.94725 38.9309 7.94725C39.8479 7.94725 40.7139 8.08734 41.529 8.36753C42.3441 8.64773 43.0828 9.04254 43.7451 9.55198C44.4074 10.0614 44.9423 10.66 45.3498 11.3478H45.388V0H49.7819V17.9195C49.7819 20.0592 49.3489 21.9186 48.4829 23.4979C47.6423 25.0517 46.4578 26.2488 44.9295 27.0894C43.4267 27.93 41.6691 28.3503 39.6568 28.3503ZM39.6568 24.6059C40.7776 24.6059 41.7583 24.3384 42.5988 23.8035C43.4649 23.2432 44.1399 22.479 44.6239 21.5111C45.1078 20.5431 45.3498 19.4224 45.3498 18.1488C45.3498 16.8752 45.1078 15.7544 44.6239 14.7865C44.1399 13.8185 43.4649 13.0671 42.5988 12.5322C41.7583 11.9718 40.7649 11.6916 39.6186 11.6916C38.5233 11.6916 37.5427 11.9718 36.6766 12.5322C35.8106 13.0926 35.1356 13.8567 34.6516 14.8247C34.1676 15.7926 33.9257 16.9006 33.9257 18.1488C33.9257 19.4224 34.1676 20.5431 34.6516 21.5111C35.1356 22.479 35.8106 23.2432 36.6766 23.8035C37.5681 24.3384 38.5615 24.6059 39.6568 24.6059Z" fill="white"/>
            <path d="M20.9377 27.8918V8.40574H25.3316V27.8918H20.9377ZM23.1155 5.69298C22.3513 5.69298 21.6891 5.41279 21.1287 4.8524C20.5683 4.29202 20.2881 3.62975 20.2881 2.86559C20.2881 2.10143 20.5683 1.43916 21.1287 0.87878C21.6891 0.318397 22.3513 0.0382042 23.1155 0.0382042C23.9051 0.0382042 24.5674 0.318397 25.1023 0.87878C25.6627 1.43916 25.9429 2.10143 25.9429 2.86559C25.9429 3.62975 25.6627 4.29202 25.1023 4.8524C24.5674 5.41279 23.9051 5.69298 23.1155 5.69298Z" fill="white"/>
            <path d="M0 27.8918V8.52035C0 7.11939 0.331135 5.87127 0.993406 4.77597C1.65568 3.65521 2.53446 2.77643 3.62975 2.13963C4.75052 1.47736 6.01138 1.14622 7.41234 1.14622H16.9643V5.15805H7.90904C6.94111 5.15805 6.13874 5.48919 5.50194 6.15146C4.89061 6.78826 4.58495 7.57789 4.58495 8.52035V13.411H15.627V17.4228H4.58495V27.8918H0Z" fill="white"/>
          </svg>
        </Link>
        <div className="nav-links">
          <Link to="/" className={isHome ? "active" : ""}>Home</Link>
          <NavHashLink smooth to="/#features">Benefits</NavHashLink>
          <Link to="/pricing" className={location.pathname === '/pricing' ? "active" : ""}>Pricing</Link>
          <NavHashLink smooth to="/#steps">How It Works</NavHashLink>
          <Link to="/faq" className={location.pathname === '/faq' ? "active" : ""}>FAQ</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? "active" : ""}>Contact Us</Link>
        </div>
        <div className="nav-actions">
          <MagneticButton>
            <Link to="/login" className="btn btn-primary">Sign In</Link>
          </MagneticButton>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { delay: 0.3 } }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="mobile-menu-links"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinksData.map((link, index) => (
                <motion.div key={index} variants={itemVariants} className="mobile-link-wrapper">
                  {link.isHash ? (
                    <NavHashLink smooth to={link.path} onClick={closeMobileMenu} className="mobile-link-item">
                      <span>{link.name}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </NavHashLink>
                  ) : (
                    <Link to={link.path} onClick={closeMobileMenu} className={`mobile-link-item ${location.pathname === link.path ? 'active' : ''}`}>
                      <span>{link.name}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                  )}
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants} className="mobile-link-wrapper" style={{ marginTop: '8px', borderBottom: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <Link to="/signup" className="btn-get-started" onClick={closeMobileMenu}>Get Started Now</Link>
                <Link to="/login" className="btn btn-primary" onClick={closeMobileMenu} style={{ width: '100%', justifyContent: 'center', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', fontSize: '13px', padding: '8px 16px' }}>Sign In</Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
