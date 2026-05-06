import React from 'react'
import { Link } from 'react-router-dom'
import MagneticButton from './MagneticButton'

const CTA = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-card glass-card">
          <div className="cta-content">
            <h2>Let's hop on a call and see if <em>we're a good fit</em></h2>
            <p>We bet we're the missing puzzle piece you've been searching for.</p>
            <MagneticButton>
              <Link to="/contact" className="btn btn-primary btn-cta" style={{ textDecoration: 'none', display: 'inline-block' }}>Book a Call with Ritesh</Link>
            </MagneticButton>
          </div>
          <div className="cta-visual">
            <div className="cta-logo-large">
              <svg width="275" height="276" viewBox="0 0 275 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54.712 26.6523L9.69763 90.0943C3.38564 98.4927 -0.00921738 108.606 0.000224736 118.983V212.979C-0.0317187 223.324 3.34238 233.41 9.63514 241.782C15.9279 250.154 24.8136 256.379 35.0086 259.555L79.8173 273.291C86.7013 275.41 93.9817 276.05 101.149 275.166C108.316 274.282 115.196 271.895 121.308 268.174L234.744 218.792L54.712 26.6523Z" fill="#F26419" />
                <path d="M107.752 245.546C73.567 245.546 44.6807 218.445 44.6807 186.401V59.1446C44.6943 43.4669 51.1478 28.4351 62.625 17.3469C74.1022 6.25871 89.6656 0.0197315 105.9 0H213.755C229.992 0.0197192 245.558 6.257 257.039 17.3445C268.521 28.4319 274.98 43.4646 275 59.1446V163.3C274.98 178.978 268.52 194.007 257.038 205.09C245.556 216.174 229.989 222.406 213.755 222.419H107.752V245.546Z" fill="#F26419" />
                <path d="M104.847 26.4561C95.9323 26.4758 87.389 29.9058 81.0879 35.9955C74.7867 42.0852 71.2411 50.3384 71.2275 58.9472V186.203C71.2275 203.169 87.1756 218.098 105.619 218.645V195.568H212.701C221.614 195.555 230.157 192.13 236.459 186.045C242.761 179.959 246.307 171.709 246.321 163.103V58.9472C246.314 50.3364 242.771 42.0793 236.468 35.9882C230.165 29.8971 221.618 26.4692 212.701 26.4561H104.847Z" fill="white" />
                <path d="M142.298 68.1582H118.479V119.156H142.298V68.1582Z" fill="black" />
                <path d="M207.247 68.1582H183.428V119.156H207.247V68.1582Z" fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
