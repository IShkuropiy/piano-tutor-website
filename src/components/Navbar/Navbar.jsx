import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <nav className="navbar-content">
                <div className="logo">Iryna Shkuropii</div>
                <ul className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/blog">Blog</NavLink>

                    <li><a href="#contact" className="btn-outline">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}