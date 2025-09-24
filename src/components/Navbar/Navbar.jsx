import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <nav className="navbar-content">
                <div className="logo">Iryna Shkuropii</div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Info for Parents</a></li>
                    
                    <li><a href="#" className="btn-outline">Contact Me</a></li>
                </ul>
            </nav>
        </div>
    );
}