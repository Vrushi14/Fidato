import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Hero from '../components/Hero'
import Steps from '../components/Steps'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import TrustedBrands from '../components/TrustedBrands'
import CTA from '../components/CTA'
import Reveal from '../components/Reveal'

const Home = () => {
  useEffect(() => {
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
    <>
      <Reveal yOffset={0} duration={1.2}>
        <Hero />
      </Reveal>
      <Reveal delay={0.1}>
        <Steps />
      </Reveal>
      <Reveal delay={0.1}>
        <Features />
      </Reveal>
      <Reveal delay={0.1}>
        <Pricing />
      </Reveal>
      <Reveal delay={0.1}>
        <TrustedBrands />
      </Reveal>

      <Reveal delay={0.2}>
        <CTA />
      </Reveal>
    </>
  )
}

export default Home
