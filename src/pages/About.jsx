import React from "react";
import { Link } from "react-router-dom";
import piano from "/src/assets/piano.jpg";
import creativity from "/src/assets/creativity.png";
import education from "/src/assets/education.png";
import teacher from "/src/assets/teacher.png";
import clas from "/src/assets/clas.png";
import "./About.css";
import "./Footer.css"

export default function About() {
  return (

    <main className="about">
      {/* HERO */}
      <section className="hero">
        <img className="hero__img"
          src={piano} />
        <div className="hero__overlay" />
        <div className="hero__content container">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, saepe.</h3>
          <h1>Lorem5</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="about-content">
        <div className="box">
          <header className="about-head">
            <h2>Carrying the legacy of European classical school into the vision of today</h2>
            <p className="about-lead">
              Musical Guidance & Services
            </p>
          </header>

          <div className="about-grid">
            <article className="about-card">
              <img className="icon"
              src={teacher} />
              <h3>Individual Lessons</h3>
              <p>Available in person or online. Each session includes instruction in piano playing and music reading.</p>
              <p>I am happy to travel to your location to conduct the lesson in the comfort of your home. $5 travel fee will be added to the standard lesson price to cover travel expenses.</p>
            </article>

            <article className="about-card">
              <img className="icon"
               src={clas} />
              <h3>Musical Development</h3>
              <p>Lessons focus on refining technique, expressiveness, musical memory, coordination, and aural perception — helping you perform with confidence and ease.</p>
            </article>

            <article className="about-card">
              <img className="icon"
                src={education} />
              <h3>Exam Preparation:</h3>
                <p>Support for school exams or other academic requirements in music.</p>
            </article>

            <article className="about-card">
              <img className="icon"
                src={creativity} />
              <h3>Additional Services</h3>
                <p>Music Theory, Harmony, and Music History lessons are available for those wishing to deepen their understanding.</p>
                <p>On request, I offer personal consultations to discuss progress, answer questions, and provide detailed feedback.</p>
            </article>

          </div>
        </div>
      </section>

      <section className="about-footer">
        <div className="about-footer-container">
          <h1>Ready to get started?</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae saepe alias quo quis magni tenetur?</p>
          <Link to="/contact" className="btn">Contact me</Link>
          <p className="closing">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, alias.</p>
        </div>
      </section>
    </main>
  );
}
