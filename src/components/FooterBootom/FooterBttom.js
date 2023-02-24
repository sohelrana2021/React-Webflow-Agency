import React from 'react'
import "./footerbottom.css"

const FooterBttom = () => {
  return (
    <section className="footer-bottom">
    <div className="container">
        <div className="row">
            <div className="footer-bottom-left">
                <p>Copyright 2022, Finsweet.com</p>
            </div>
            <div className="footer-bottom-right">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}

export default FooterBttom