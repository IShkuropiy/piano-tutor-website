import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Hero.css";
import "../FourCardsGrid.css";
import hands16 from "/src/assets/hands16.jpg";
import self from "/src/assets/self.jpg";
import creativity from "/src/assets/creativity.png";
import education from "/src/assets/education.png";
import teacher from "/src/assets/teacher.png";
import class from "/src/assets/class.png";
import Benefits from '../../components/reasons/Benefits';


export default function Home() {
  return (
     <main className="home">
      {/* HERO */}
      <section className="hero">
        <img src={hands16} className="hero__img" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1>
            Individual Piano Lessons. Personalized Learning. Real Results.
          </h1>
          <p className="hero__text">
            Whether you're starting from scratch or looking to revisit the skills you mastered in music school, private piano lessons are the perfect place to begin (or continue!) your musical journey.
          </p>

          <div className="hero__cta">
            <Link to="/Pricing" className="btn">Learn more</Link>
          </div>
        </div>
      </section>

      <Benefits />

      <hr /> 

      {/* ABOUT */}
      <section className="about">
        <div className="about-inner">
          <img className="avatar" src={self} />

          <div className="about-content">
            <p className="about-text">
              With a Bachelor's degree in Performing Arts, I possess a strong foundation built upon 12 years of academic study, specializing in classical music. My 10 years of professional experience spans diverse international environments, including Ukraine, China, and the United States, where I have taught students ranging from 5 to 25 years old. I focus on providing a comprehensive and strong classical foundation; this rigorous base ensures that whether students pursue music professionally or explore other genres, they are always equipped with superior technique, theory, and discipline. This global experience allows me to connect with and adapt my teaching methods to students of all backgrounds and skill levels.
            </p>

            <p className="name">Iryna Shkuropii</p>
            <p className="role">Classical Piano Tutor</p>
          </div>
        </div>
      </section>

      <hr />

      {/* FOUR-CARD GRID */}
      <section className="servicee">
        <div className="servicee-container">
          <h1 className="servicee__title">
            Musical Guidance & Services
          </h1>

          <div className="servicee__grid">

            <article className="servicee-card">
              <img className="servicee__icon"
                src={teacher} />
              <h3>Individual Lessons</h3>
              <p>Available in person or online. Each session includes instruction in piano playing and music reading.</p>
              <p>I am happy to travel to your location to conduct the lesson in the comfort of your home. $5 travel fee will be added to the standard lesson price to cover travel expenses.</p>
            </article>

            <article className="servicee-card">
              <img className="servicee__icon"
                src={class} />
              <h3>Musical Development</h3>
              <p>Lessons focus on refining technique, expressiveness, musical memory, coordination, and aural perception — helping you perform with confidence and ease.</p>
            </article>

            <article className="servicee-card">
             <img className="servicee__icon"
              src={education} />
              <h3>Music Theory & Advanced Studies</h3>
              <p>I provide focused academic services for students seeking to deepen their knowledge of musical structure and context. Private lessons are available in Music Theory, Harmony, and Music Literature and History.</p>
            </article>

             <article className="servicee-card">
             <img className="servicee__icon"
              src={creativity} />
              <h3>Additional Services</h3>
              <p> Personal Consultations: Available on request to discuss progress, answer specific questions, and provide detailed info about .
              </p>
              <p>
              Exam Preparation: Focused support is offered for students needing assistance with school examinations or other academic requirements in music.</p>
              <p>Lessons are available in English, and can also be conducted in Russian or Ukrainian upon request.</p>
            </article>
          </div>
        </div>

      </section>

    </main>
  );
}