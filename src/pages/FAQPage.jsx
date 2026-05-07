import React, { useEffect } from 'react'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'
import Reveal from '../components/Reveal'
import FAQ from '../components/FAQ'
import Lenis from 'lenis'

const FAQPage = () => {
  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <div className="faq-page-content" style={{ paddingTop: '80px' }}>
      <Reveal delay={0.1}>
        <div className="faq-page-header" style={{ textAlign: 'center', marginBottom: '10px' }}>
          <h1 className="section-title" style={{ color: '#000000', fontFamily: 'Rebond Grotesque', fontWeight: '500', fontSize: '48px', lineHeight: '55px', letterSpacing: '0px' }}>Frequently Asked Questions</h1>
          <p className="section-subtitle" style={{ color: '#000000', fontFamily: 'Archivo', fontWeight: '500', fontSize: '19px', lineHeight: '22px', letterSpacing: '0px' }}>Everything you need to know about Fidato AI.</p>
        </div>
      </Reveal>

      <div className="faq-container-standalone" style={{ maxWidth: '1268px', margin: '0 auto', padding: '0 20px' }}>
        <FAQ light={true} hideTitle={true} />
      </div>

      <div style={{ marginTop: '100px' }}>
        <Reveal delay={0.2}>
          <CTA />
        </Reveal>
      </div>
    </div>
  )
}

export default FAQPage
