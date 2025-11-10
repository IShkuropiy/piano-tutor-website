import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import hero from "/src/assets/hero.jpg";
import kid from "/src/assets/kid.jpg";
import reading from "/src/assets/reading.png";
import brain from "/src/assets/brain.png";
import music from "/src/assets/music.png";

export default function Home() {
    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <h1 className="title">Individual Piano Lessons: Personalized Learning. Real Results.</h1>
                    <p className="text">
                        Whether you're starting from scratch or looking to revisit the skills you mastered in music school, private piano lessons are the perfect place to begin (or continue!) your musical journey.
                    </p>
                    <Link to="/about" className="btn">Learn more</Link>
                </div>

                <div className="image">
                    <img src={hero} />
                </div>
            </section>

            <section className="footer">
        <div className="footer-container">
          <h1>So many reasons to start</h1>
          <div className="card-grid">
            <div className="footer-card">
              <img className="icon"
                src={reading} />
              <p><strong>Expand Your Cultural Knowledge</strong></p>
              <p>Playing the piano is a wonderful way to improve your cultural knowledge by exploring diverse music styles and the works of various composers across history. It will immensely open your mind and deepen your appreciation for all forms of art.</p>
            </div>
            <div className="footer-card">
              <img className="icon"
                src={music} />
              <p><strong>Keys to Self-Expression</strong></p>
              <p>The piano is a powerful, non-verbal medium for self-expression, enabling individuals to convey a vast spectrum of emotions through music.</p>
            </div>
            <div className="footer-card">
              <img className="icon"
                src={brain} />
              <p><strong>Boost Your Cognitive Functions</strong></p>
              <p>
                Playing the piano enhances brain connectivity, improves focus, problem-solving, and fine motor skills by engaging both brain hemispheres, which can delay cognitive decline and boost academic and professional performance.
              </p>
            </div>
          </div>
        </div>

      </section>
        </main>
    );
}
