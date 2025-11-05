import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <nav className="menu">
                <ul className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </ul>
                <div className="contact-info">
                    <span> Monday - Friday 9:00AM - 7:00PM</span>
                    <span> Call Me (123) 456-7890</span>
                </div>
                 <li><NavLink to="/contact" className="btn-outline">Contact Me</NavLink></li>
            </nav>
        </div>
    );
}