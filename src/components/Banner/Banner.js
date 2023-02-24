import React from 'react'
import "./banner.css"

const Banner = () => {
  return (
    <section className="banner">
        <div className="container">
            <div className="row">
                <div className="banner-left">
                    <h1>Building stellar websites for early startups</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className="banner-btn">
                        <a className="banner-btn-1" href="">View our work</a>
                        <a className="banner-btn-2" href="">View Pricing
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="banner-right">
                    <img src="images/banner.png" alt="Banner"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner