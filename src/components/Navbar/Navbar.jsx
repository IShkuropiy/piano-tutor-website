import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

    return (
            <nav className="menu">
                 <ul className="nav-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/pricing">Pricing</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="contact-info">
                    <span className="ampm"> Monday - Friday 9:00AM - 7:00PM</span>
                    <span className="tel"> Call Me (123) 456-7890</span>
                </div>
                <button className="btn">Book a Lesson</button>
            </nav>

    );
}