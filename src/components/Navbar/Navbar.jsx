import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
     const [open, setOpen] = useState(false);

    return (
        <>
        <header className="navbar">
            {/* TOP DARK BAR */}
            <div class="nav-top">
                <div class="nav-top-left">
                    <a href="/" class="logo">Iryna Shkuropii</a>
                </div>
                <div className="contact-info">
                    <span> Monday - Friday 9:00AM - 7:00PM</span>
                    <span> Call Me (123) 456-7890</span>
                </div>

            <button
            className="nav-toggle mobile-only"
            onClick={() => setOpen(true)}>
                ☰
            </button>

                <div class="nav-top-right">
                    <Link to="/contact" className="btn nav-btn desktop-only">Learn more</Link>
                </div>
            </div>
            {/* BOTTOM WHITE BAR */}
            <nav className="menu">
                <ul className="nav-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/pricing">Pricing</NavLink></li>
                    <li><NavLink to="/sheets">Aditional Resouces</NavLink></li>
                    <li><NavLink to="/blog">The Blog</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>

        </header>

              {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <div className="nav-left">Iryna Shkuropii</div>
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="mobile-links">
            
                    <a><NavLink to="/">Home</NavLink></a>
                    <a><NavLink to="/pricing">Pricing</NavLink></a>
                    <a><NavLink to="/sheets">Aditional Resouces</NavLink></a>
                    <a><NavLink to="/blog">The Blog</NavLink></a>
                    <a><NavLink to="/contact">Contact</NavLink></a>
       
        <Link to="/pricing" className="nav-btn mobile-btn">Learn more</Link>
           
          </div>
        </div>
      )}
    </>

    );
}