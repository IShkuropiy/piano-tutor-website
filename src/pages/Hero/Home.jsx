import React from "react";
import { Link } from "react-router-dom";
import hero from "/src/assets/hero.jpg";
import "./Home.css";

export default function Home() {
    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <h1 className="title">Iryna Shkuropii</h1>
                    <h3 className="subtitle">Classical Pianist and Tutor</h3>
                    <p className="text">
                        Personalized piano lessons for every age, every stage
                    </p>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                </div>
                 <div className="image">
                     <img src={hero}/>
                </div>
            </section>
        </main>
    );
}
