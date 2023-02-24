import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="navbar">
                <div className="navbar-brand">
                    <img src="images/logo.png" alt=""/>
                </div>
                <div className="navbar-nav">
                    <ul>
                        <li><a className="acetive" href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <div className="countract-btn">
                        <a href="">Contact us</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar