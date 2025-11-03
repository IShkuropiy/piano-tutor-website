import React from "react";
import "./Home.css";
//import { Link } from "react-router-dom";

export default function Home() {
    return (

        <>
            <section id="hero" className="hero">

                <div className="hero-content">
                    <h1 className="hero-title">Iryna Shkuropii</h1>
                    <h3 className="hero-subtitle">Classical Pianist and Tutor</h3>
                    <p className="hero-text">
                        Personalized piano lessons for every age, every stage
                    </p>
                    <a href="#" className="btn">Contact Me</a>
                </div>
            </section>
        </>
    );
}
