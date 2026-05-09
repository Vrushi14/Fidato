import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'
import Reveal from '../components/Reveal'
import PricingBackground from '../components/PricingBackground'

const PricingPage = () => {
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
    <div className="pricing-page-content" style={{ paddingTop: '20px', position: 'relative', overflow: 'hidden' }}>

      <Reveal delay={0.1}>
        <Pricing />
      </Reveal>
      <Reveal delay={0.2}>
        <CTA />
      </Reveal>
    </div>
  )
}

export default PricingPage
