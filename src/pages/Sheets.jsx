import React from "react";
import { Link } from "react-router-dom";
import "./Sheets.css";
import "./ThreeCardsGrid.css"
import "./Hero/Hero.css";
import b5 from "/src/assets/b5.jpg";
import kid3 from "/src/assets/kid3.png";
import keys7 from "/src/assets/keys7.jpg";
import orchestra from "/src/assets/orchestra.jpg";
import b11 from "/src/assets/b11.jpg";
import royal11 from "/src/assets/royal11.png";
import keys from "/src/assets/keys.jpg";
import hands21 from "/src/assets/hands21.jpg";


export default function Sheets() {

  return (

    <main className="sheets">
      {/* HERO */}
      <section className="hero">
        <img className="hero__img"
          src={b5} />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1>Beyond the Basics: Your Toolkit for Success</h1>
          <p className="hero__text">Dive deeper into your studies with this handpicked collection of learning materials. Whether you're looking for inspiring concert footage, practical music sheets, or in-depth textbook recommendations, you'll find everything you need to enhance your understanding and fuel your passion.</p>
          <div className="hero__cta">
            <Link to="/Additional" className="btn">Learn more</Link>
          </div>
        </div>
      </section>

      {/* THREE CARDS GRID */}
      <section className="additional">
        <h1>Resource Hub: Materials & Links</h1>

        <div className="additional-grid">

          <article className="additional-card">
            <div className="card-img">
              <img src={orchestra} />
            </div>
            <div className="card-body">
              <Link to="/additional" className="additional-card-title">
                Curated Music Resources
              </Link>
              <p className="card-text">A curated selection of music pieces with short notes for listening, learning, and musical development.</p>
            </div>
          </article>

          <article className="additional-card">
            <div className="card-img">
              <img src={b11} />
            </div>
            <div className="card-body">
              <a className="additional-card-title"
                href="https://notes.tarakanov.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Boris Tarakanov's Music Archive
              </a>

              <p className="card-text">Free collection of sheet music</p>
            </div>
          </article>

          <article className="additional-card">
            <div className="card-img">
              <img src={keys7} />
            </div>
            <div className="card-body">
              <a className="additional-card-title"
                href="https://www.youtube.com/@thechopinmethod7257"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Chopin Method
              </a>
              <p className="card-text">An educational piano channel exploring technique, posture, and movement efficiency through clear visual demonstrations
              </p>
            </div>
          </article>

        </div>
      </section>

        {/* FEATURED ARTICLES LINKS */}

      <section className="blog-links">

        <div className="header">
          <h1>Featured Articles</h1>
          <p>I'll be publishing new articles once or twice a week! Stay tuned for updates.</p>
        </div>
        <div className="s-grid">

          <article className="s-card">
            <div className="s-text-content">
              <Link to="/articles/theory/theory" className="eyebrow">Music Theory</Link>
              <Link to="/blog/article8" className="s-title">
                Introduction to Musical Tempos</Link>
              <p className="s-excerpt">
                Tempo is one of the ways musicians bring music to life. Along with rhythm, melody, and harmony, it helps us feel the mood and energy of a piece...
              </p>
              <div className="s-meta">
                <span className="date">Oct, 29, 2025</span>
              </div>
            </div>
            <div className="s-image">
              <img src={hands21} />
            </div>
          </article>

          <article className="s-card right-column-card">
            <div className="s-text-content">
              <Link to="/articles/theory/practice" className="eyebrow">Independent Practice</Link>
              <Link to="/blog/article7" className="s-title">
                Practical Tips for Beginning Pianists</Link>
              <p className="s-excerpt">
                Before starting, decide exactly what you want to achieve through playing the piano.
              </p>
              <div className="s-meta">
                <span className="date">Nov 14, 2025</span>
              </div>
            </div>
            <div className="s-image">
              <img src={royal11} />
            </div>
          </article>

          <article className="s-card">
            <div className="s-text-content">
              <Link to="/articles/theory/inspire" className="eyebrow">Inspire and Archive</Link>
              <Link to="/blog/article6" className="s-title">
                The Art of Stumbling Forward</Link>
              <p className="s-excerpt">Playing the piano is unlike almost anything most students have ever done. In the beginning, every new pianist struggles. Just as a child learning to walk will stumble and fall, so will a student learning to play the piano. Both require patience, repetition, and the courage to stand up again after every mistake.</p>
              <div className="s-meta">
                <span className="date">Oct 28, 2025</span>
              </div>
            </div>
            <div className="s-image">
              <img src={kid3} />
            </div>
          </article>


          <article className="s-card right-column-card">
            <div className="s-text-content">
              <Link to="/articles/theory/theory" className="eyebrow">Music Theory</Link>
              <Link to="/blog/article2" className="s-title">
                Accidentals, the Basics</Link>
              <p className="s-excerpt">Accidentals are special musical symbols that tell you to change the pitch (how high or low the sound is) of a note, just for a little while. Think of them as temporary instructions!</p>
              <div className="s-meta">
                <span className="date">Nov 12, 2025</span>
              </div>
            </div>
            <div className="s-image">
              <img src={keys} />
            </div>
          </article>

        </div>
      </section>
    </main>
  );
}
