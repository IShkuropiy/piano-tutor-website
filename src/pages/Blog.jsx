import { Link } from "react-router-dom";
import React, { useMemo } from 'react';
import { articles } from '../pages/data.js';
import "./Blog.css";
import "./Carousel.css";
import "./ThreeCardsGrid.css"
import "./Hero/Hero.css";
import b2 from "/src/assets/b2.jpg";
import accidentals from "/src/assets/accidentals.svg";
import dinam from "/src/assets/dinam.jpg";
import tempo from "/src/assets/tempo.png";
import keys8 from "/src/assets/keys8.jpg";
import hands23 from "/src/assets/hands23.jpg";
import hands24 from "/src/assets/hands24.png";
import kid3 from "/src/assets/kid3.png";
import kid4 from "/src/assets/kid4.jpg";
import kid6 from "/src/assets/kid6.jpg";
import kid7 from "/src/assets/kid7.jpg";
import royal4 from "/src/assets/royal4.jpg";
import brain from "/src/assets/brain.png";
import scheharazade from "../assets/scheharazade.png";
import peergynt from "../assets/peergynt.png";
import saintsaens14 from "../assets/saintsaens14.png";
import erl from "../assets/erl.png";
import tiger from "../assets/tiger.png";
import taras from "../assets/taras.png";
import BlogCarousel from "./BlogCarousel";


export default function Blog() {

  const rows = useMemo(() => [
      {
        id: "theory",
        title: "Music Theory",
        items: [
          { id: "t1", img: "/src/assets/b2.jpg", eyebrow: "Music Theory", title: "Mode: The Alphabet of Music", href: "/blog/article11" },
          { id: "t2", img: "/src/assets/dinam.jpg", eyebrow: "Music Theory", title: "Your Guide to Dynamics on the Piano", href: "/blog/article5" },
          { id: "t3", img: "/src/assets/hands23.jpg", eyebrow: "Music Theory", title: "Introduction to Musical Tempos", href: "/blog/article8" },
          { id: "t4", img: "/src/assets/hands19.jpg", eyebrow: "Music Theory", title: " Musical Intervals: An Introduction", href: "/blog/article12" },
          { id: "t5", img: "/src/assets/accidentals.svg", eyebrow: "Music Theory", title: "Accidentals, the basics", href: "/blog/article2" },
        ],
      },

      {
        id: "practice",
        title: "Independed Practice",
        items: [
          { id: "p1", img: "/src/assets/kid6.jpg", eyebrow: "Independent Practice", title: "  Effective Strategies for Practicing Music",href: "/blog/article4" },
          { id: "p2", img: "/src/assets/keys8.jpg", eyebrow: "Independent Practice", title: "How to Work at Home", href: "/blog/article1" },
          { id: "p3", img: "/src/assets/kid7.jpg", eyebrow: "Independent Practice", title: "Practical Tips for Beginers", href: "/blog/article7" },
          { id: "p4", img: "/src/assets/hands24.png", eyebrow: "Independent Practice", title: "Playing with Ease: Releasing Tension at the Piano", href: "/blog/article13" },
          { id: "p5", img: "/src/assets/kid8.jpg", eyebrow: "Independent Practice", title: "Your Guide to Proper Piano Posture", href: "/blog/article14" },
        ],
      },

      {
        id: "inspire",
        title: "Inspire & Archive",
        items: [
          { id: "i1", img: "/src/assets/brain.png", eyebrow: "Inspire & Archive", title: "The Psychological Benefits of Piano Playing", href: "/blog/article3" },
          { id: "i2", img: "/src/assets/kid3.png", eyebrow: "Inspire & Archive", title: " The Art of Stumbling Forward", href: "/blog/article6" },
          { id: "i3", img: "/src/assets/royal4.jpg", eyebrow: "Inspire & Archive", title: "Being a Pianis is an Honor", href: "/blog/article9" },
          { id: "i4", img: "", eyebrow: "Inspire & Archive", title: "", href: "/blog/article" },
        ],
      },
      {
      id: "adventures",
      title: "Sound Adventures",
        items: [
          { id: "a1", img: "src/assets/scheharazade.png", eyebrow: "Sound Adventures", title: "Scheherazade", href: "/additional/Rimskiy" },
          { id: "a2", img: "src/assets/peergynt.png", eyebrow: "Sound Adventures", title: "Peer Gynt", href: "/additional/Grieg" },
          { id: "a3", img: "src/assets/saintsaens14.png", eyebrow: "Sound Adventures", title: "Carnival of Animals", href: "/additional/Saintsaens" },
          { id: "a4", img: "src/assets/erl.png", eyebrow: "Sound Adventures", title: "Erlkönig", href: "/additional/Erlkönig" },
          { id: "a5", img: "src/assets/taras.png", eyebrow: "Sound Adventures", title: "Taras Bulba", href: "/additional/TarasBulba" },
          { id: "a6", img: "src/assets/tiger.png", eyebrow: "Sound Adventures", title: "Circus", href: "/additional/Turina" },
        ],
      },
    ],
    []
  );


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
          <p>
            These articles are extra reading to help you learn even faster and make your
            piano playing easier!
          </p>
        </div>

        <div className="rows">
          {rows.map((row) => (
            <BlogCarousel key={row.id} title={row.title} items={row.items} />
          ))}
        </div>
      </section>

    </main>

  );
}