import React from 'react'

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Trusted by global brands</h2>
        
        <div className="testimonials-stack">
          <div className="testimonial-card main">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "Fidato AI has transformed our customer support. We've seen a 40% reduction in support costs and our customers are happier than ever."
            </p>
            <div className="author">
              <div className="author-info">
                <strong>Sarah Jenkins</strong>
                <span>Head of Customer Support at TechFlow</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card-bg card-1"></div>
          <div className="testimonial-card-bg card-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
