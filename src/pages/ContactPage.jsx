import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import Lenis from 'lenis'

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <div className="contact-page-content" style={{ paddingTop: '60px' }}>
      <Reveal delay={0.1}>
        <div className="contact-header" style={{ textAlign: 'center', marginBottom: '20px', maxWidth: '800px', margin: '0 auto 24px', padding: '0 20px' }}>
          <h1 className="section-title">Get in touch with us</h1>
          <p className="section-subtitle contact-subtitle">
            We're here to help! Whether you have a question about our app, need assistance with your account, or want to provide feedback, our team is ready to assist you.
          </p>
        </div>
      </Reveal>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Reveal delay={0.2}>
          <ContactForm />
        </Reveal>
      </div>

      <div style={{ marginTop: '60px' }}>
        <Reveal delay={0.3}>
          <CTA />
        </Reveal>
      </div>
    </div>
  )
}

export default ContactPage
