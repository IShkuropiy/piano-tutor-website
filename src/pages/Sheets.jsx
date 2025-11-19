import React from "react";
import { Link } from "react-router-dom";
import "./Sheets.css";
import b5 from "/src/assets/b5.jpg";


export default function Sheets() {

  return (

    <main className="sheets">
      {/* HERO */}
      <section className="hero">
        <img className="hero__img"
          src={b5} />
        <div className="hero__overlay" />
        <div className="hero__content container">
          <h1>Expand Your Learning</h1>
          <p>Take control of your education and feed your curiosity with these extra materials. Whether you're seeking additional practice or new knowledge, everything you need to succeed is right here.</p>
          <div className="hero__cta">
            <Link to="/blog" className="btn">Read more</Link>
          </div>
        </div>
      </section>

      <section className="material">
        <h2>Your Self-Guided Study Toolkit</h2>
        <div className="card-grid">
            
        </div>
      </section>
      </main>
  );
  }
