import { Link } from "react-router-dom";
import { useRef } from 'react';
import "./Blog.css";
import "./ThreeCardsGrid.css"
import "./Hero/Hero.css";
import b2 from "/src/assets/b2.jpg";
import dinam from "/src/assets/dinam.jpg";
import keys8 from "/src/assets/keys8.jpg";
import hands23 from "/src/assets/hands23.jpg";
import kid3 from "/src/assets/kid3.png";
import kid4 from "/src/assets/kid4.jpg";
import kid6 from "/src/assets/kid6.jpg";
import kid7 from "/src/assets/kid7.jpg";
import royal4 from "/src/assets/royal4.jpg";
import pianistbrain from "/src/assets/pianistbrain.png";
import scheharazade from "../assets/scheharazade.png";
import peergynt from "../assets/peergynt.png";
import saintsaens14 from "../assets/saintsaens14.png";


export default function Blog() {

  return (

    <main className="blog">
      <section className="hero">
        <img className="hero__img"
          src={kid4} />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1>Expand Your Learning</h1>
          <p className="hero__text">Take control of your education and feed your curiosity with these extra materials. Whether you're seeking additional practice or new knowledge, everything you need to succeed is right here.</p>
          <div className="hero__cta">
            <Link to="/sheets" className="btn">Learn more</Link>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="header">
          <h1>Your Path to Piano Mastery starts here</h1>
          <p>These articles are extra reading to help you learn even faster and make your piano playing easier! Don't worry about knowing everything—we'll cover all the detailed techniques and have all the answers ready when we meet!</p>
        </div>

        <div className="blog-grid">
          {/* THEORY ROW */}

          <article className="blog-card">
            <div className="card-img">
              <img src={b2} />
            </div>
            <div className="card-body">
              <p className="blog-eyebrow">Music Theory</p>
              <Link to="/blog/article11" className="blog-card-title">
                Mode: The Alphabet of Music
              </Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="card-img">
              <img src={dinam} />
            </div>
            <div className="card-body">
              <p className="blog-eyebrow">Music Theory</p>
              <Link to="/blog/article5" className="blog-card-title">
                Your Guide to Dynamics on the Piano
              </Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="card-img">
              <img src={hands23} />
            </div>
            <div className="card-body">
              <p className="blog-eyebrow">Music Theory</p>
              <Link to="/blog/article12" className="blog-card-title">
                Musical Intervals: An Introduction
              </Link>
            </div>
          </article>

          {/* PRACTICE ROW */}

          <article className="blog-card">
            <div className="card-img">
              <img src={kid6} />
            </div>
            <div className="card-body">
              <p className="blog-eyebrow">Independent Practice</p>
              <Link to="/blog/article4" className="blog-card-title">
                Effective Strategies for Practicing Music
              </Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="card-img">
              <img src={keys8} />
            </div>
            <div className="card-body">
              <p className="blog-eyebrow">Independent Practice</p>
              <Link to="/blog/article1" className="blog-card-title">
                How to Work at Home
              </Link>
            </div>
            
          </article>

          <article className="blog-card">
            <div className="card-img">
              <img src={kid7} />
            </div>
            <div className="card-body">
              <p className="blog-eyebrow">Independent Practice</p>
              <Link to="/blog/article7" className="blog-card-title">
                Practical Tips for Beginers
              </Link>
            </div>
          </article>

          {/* INSPIRE ROW */}

          <article className="blog-card">
            <div className="card-img">
              <img src={pianistbrain} />
            </div>
            <div className="card-body">
              <p className="blog-eyebrow">Inspire & Archive</p>
              <Link to="/blog/article3" className="blog-card-title">
                The Psychological Benefits of Piano Playing
              </Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="card-img">
              <img src={kid3} />
            </div>
            <div className="card-body">
              <p className="blog-eyebrow">Inspire & Archive</p>
              <Link to="/blog/article6" className="blog-card-title">
                The Art of Stumbling Forward
              </Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="card-img">
              <img src={royal4} />
            </div>
            <div className="card-body">
              <p className="blog-eyebrow">Inspire & Archive</p>
              <Link to="/blog/article9" className="blog-card-title">
                Being a Pianis is an Honor
              </Link>
            </div>
          </article>

          {/* MUSIC ROW */}
          <article className="blog-card">
            <div className="card-img">
              <img src={scheharazade} />
            </div>
            <div className="card-body">
              <p className="blog-eyebrow">Sound Adventures</p>
              <Link to="/additional/rimskiy" className="blog-card-title">
                Scheherazade
              </Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="card-img">
              <img src={peergynt} />
            </div>
            <div className="card-body">
              <p className="blog-eyebrow">Sound Adventures</p>
              <Link to="/additional/grieg" className="blog-card-title">
                Peer Gynt
              </Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="card-img">
              <img src={saintsaens14} />
            </div>
            <div className="card-body">
              <p className="blog-eyebrow">Sound Adventures</p>
              <Link to="/additional/saintsaens" className="blog-card-title">
                The Carnival of the Animals
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>

  );
}