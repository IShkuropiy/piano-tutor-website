import React from "react";
import { Link } from "react-router-dom";
import hero from "/src/assets/hero.jpg";
import "./Navbar.css";

export default function Home() {
    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <h1 className="title">Individual Piano Lessons: Personalized Learning. Real Results.</h1>
                    <p className="text">
                        Whether you're starting from scratch or looking to revisit the skills you mastered in music school, private piano lessons are the perfect place to begin (or continue!) your musical journey.
                    </p>
                    <li><NavLink to="/about">Learn more</NavLink></li>
                </div>
                <div className="image">
                    <img src={hero} />
                </div>
            </section>
        </main>
    );
}
