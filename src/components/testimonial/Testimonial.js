import React from 'react'
import TitleHadding from '../Layouts/TitleHadding'
import TestimonialLayouts from '../Layouts/TestimonialLayouts'
import Para from '../Layouts/Para'
import "./testimonial.css"

const Testimonial = () => {
  return (
    <section className="testimonial">
    <div className="container">
        <div className="row">
            <div className="testimonial-left">
                <TitleHadding title="What our clients say about us"/>
                <Para pataTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed"/>
            </div>
           <TestimonialLayouts/>
        </div>
    </div>
</section>
  )
}

export default Testimonial