import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <nav className="navbar-content">
                <div className="logo">Iryna Shkuropii</div>
                <ul className="nav-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contacts</a></li>
                    <li><a href="#blog">Blog</a></li>
                    
                    <li><a href="#contact" className="btn-outline">Contact Me</a></li>
                </ul>
            </nav>
        </div>
    );
}