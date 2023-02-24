import React from 'react'

const TestimonialLayouts = () => {
  return (
    <div className="testimonial-right">
        <h3>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
        <div className="testmonial-info">
            <div className="testmonial-info-left">
                <img src="images/testimonial .png" alt="test"/>
                <h6>Jenny Wilson</h6>
                <p>Vice President</p>
            </div>
            <div className="testmonial-info-right">
                <i className="fa-solid fa-chevron-left"></i>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>
  )
}

export default TestimonialLayouts