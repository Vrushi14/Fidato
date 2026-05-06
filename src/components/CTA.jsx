import React from 'react'
import { Link } from 'react-router-dom'
import MagneticButton from './MagneticButton'

const CTA = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-card glass-card">
          <div className="cta-content">
            <h2>Let's hop on a call and <br /> see if <em>we're a good fit</em></h2>
            <p>We bet we're the missing puzzle piece you've been searching for.</p>
            <MagneticButton>
              <Link to="/contact" className="btn btn-primary btn-cta" style={{ textDecoration: 'none', display: 'inline-block' }}>Book a Call with Ritesh</Link>
            </MagneticButton>
          </div>
          <div className="cta-visual">
            <div className="cta-logo-large">
              <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Main bubble shape */}
                <path d="M260 80C260 57.9086 242.091 40 220 40H100C77.9086 40 60 57.9086 60 80V180C60 202.091 77.9086 220 100 220H110L90 260H160L180 220H220C242.091 220 260 202.091 260 180V80Z" 
                  fill="#FF5430" 
                  fillOpacity="0.9"
                />
                {/* White bubbles/eyes pattern */}
                <rect x="100" y="90" width="15" height="50" rx="7.5" fill="white" />
                <rect x="145" y="90" width="15" height="50" rx="7.5" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
