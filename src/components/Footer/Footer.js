import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="footer-left">
                    <img src="images/logo.png" alt=""/>
                    <p className="contarct-p">We are always open to discuss your project and improve your online presence.</p>
                    <div className="footer-left-contarct">
                        <div className="footer-contarct-left">
                            <h6>Email ame at</h6>
                            <p>contarct.website.com</p>
                        </div>
                        <div className="footer-contarct-right">
                            <h6>Call Us</h6>
                            <p>0927 6277 28525</p>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <h2>Lets Talk!</h2>
                    <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                    <div className="footer-right-icon">
                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer