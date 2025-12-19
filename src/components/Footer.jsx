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
                        info@aghgkjh.com
                    </p>
                    <p className="phone">
                        (123) 456-7890
                    </p>
                    <p className="address">
                        North Bethany, Portland, OR
                    </p>
                </div>
            </div>
            <div className="copyright">
                <p>© 2025 Your Name. All Rights Reserved. | Iryna Shkuropii</p>
            </div>
        </footer>

    );
}