import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className="header-area">
        <div className="container">
            <div className="header">
                <div className="logo">
                    <a href="">
                        Photography
                    </a>
                </div>
                <div className="menu" id="nav">
                <ul className="">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="menu.html">Gallery</a></li>
                    <li><a href="blog.html">Package</a></li>
                    <li><a href="gallery.html">FAQ</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            </div>                  
        </div>
    </header>
    );
};

export default Header;