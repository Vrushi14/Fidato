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
              <svg width="240" height="240" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.98568 5.03741L1.76995 17.0277C0.617924 18.615 -0.0016823 20.5263 4.10173e-05 22.4876V40.2525C-0.00578909 42.2077 0.610029 44.1139 1.75854 45.6961C2.90706 47.2784 4.52881 48.4548 6.38953 49.0551L14.5677 51.6512C15.8241 52.0516 17.1529 52.1726 18.461 52.0056C19.7691 51.8385 21.0248 51.3874 22.1403 50.684L42.8439 41.351L9.98568 5.03741Z" fill="#F26419"/>
                <path d="M19.6662 46.4072C13.4269 46.4072 8.15479 41.2853 8.15479 35.2291V11.1781C8.15727 8.21508 9.33511 5.37413 11.4299 3.2785C13.5246 1.18287 16.3651 0.00372918 19.3282 0H39.0131C41.9765 0.00372686 44.8176 1.18255 46.9131 3.27804C49.0086 5.37353 50.1875 8.21465 50.1912 11.1781V30.8631C50.1875 33.8261 49.0084 36.6666 46.9128 38.7613C44.8172 40.8561 41.9761 42.0339 39.0131 42.0364H19.6662V46.4072Z" fill="#F26419"/>
                <path d="M19.136 5C17.509 5.00372 15.9497 5.65199 14.7996 6.80292C13.6496 7.95385 13.0025 9.51368 13 11.1407V35.1917C13 38.3982 15.9107 41.2197 19.2768 41.323V36.9616H38.8209C40.4475 36.9591 42.0068 36.3118 43.1569 35.1616C44.3071 34.0115 44.9544 32.4523 44.9569 30.8257V11.1407C44.9556 9.5133 44.3089 7.95274 43.1586 6.80155C42.0083 5.65035 40.4483 5.00249 38.8209 5H19.136Z" fill="white"/>
                <path d="M25.9713 12.8823H21.624V22.5206H25.9713V12.8823Z" fill="black"/>
                <path d="M37.8253 12.8823H33.478V22.5206H37.8253V12.8823Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
