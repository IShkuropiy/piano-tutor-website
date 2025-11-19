import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {

    return (
        <footer className="main-footer">
            {/* Navigation links (like 'THE ALANTE BLOG', 'OUR TEAM', etc.) */}
            <nav className="footer-menu">
                <ul className="footer-nav-links">
                    <li><NavLink to="/home">HOME</NavLink></li>
                    <li><NavLink to="/about">ABOUT</NavLink></li>
                    <li><NavLink to="/pricing">PRICING</NavLink></li>
                    <li><NavLink to="/blog">THE BLOG</NavLink></li>
                    <li><NavLink to="/contact">CONTACT</NavLink></li>
                </ul>
            </nav>

            <div className="footer-content">
                <div className="loc">
                    <h3>I work with clients from all over Beaverton and NW Portland.</h3>
                    <p>Get in touch with me!</p>
                </div>

                <div className="contact-details">
                    <p className="email">
                        <span>📧</span> info@aghgkjh.com
                    </p>
                    <p className="phone">
                        <span>📞</span> (123) 456-7890
                    </p>
                    <p className="address">
                        <span>🏠</span> North Bethany, Portland, OR
                    </p>
                </div>
            </div>
            {/* Copyright and other footer text */}
            <div className="copyright">
                <p>© 2025 Your Name. All Rights Reserved. | Iryna Shkuropii</p>
            </div>
        </footer>

    );
}