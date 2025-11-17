import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";
import student from "/src/assets/student.jpg";
import grand from "/src/assets/grand.png";
import inspiration from "/src/assets/inspiration.png";
import clock from "/src/assets/clock.png";

export default function Pricing() {

  return (

    <main className="pricing">
      {/* HERO */}
      <section className="hero">
        <img className="hero__img"
          src={student} />
        <div className="hero__overlay" />
        <div className="hero__content container">
          <h1>Lesson rates</h1>
          <p>I believe that high-quality, personalized tutoring shouldn’t be a luxury. Every child deserves the chance to develop their skills and confidence through consistent, encouraging lessons.
            To make this possible, I’ve kept my pricing as affordable as I can. Your commitment to regular sessions helps me maintain this low-cost structure while continuing to provide exceptional results.</p>
          <div className="hero__cta">
            <Link to="/contact" className="btn">Book a lesson</Link>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section id="plans" className="cards">
        <div className="container cards__grid">
          <article className="card">
            <h3>Single Class</h3>
            <p className="price">$30<span>/45-min</span></p>
            <p>Perfect for new students or those wanting to try a single class.</p>
            <ul>
              <li>Individual 1:1 session</li>
              <li>Great for new students</li>

            </ul>
            <Link to="/contact" className="btn">Book a lesson</Link>
          </article>

          <article className="card">
            <h3>Weekly Plan</h3>
            <p className="price">$25<span>/</span></p>
            <p> Best for steady, long-term progress.</p>
            <ul>
              <li>Priority scheduling</li>
              <li>Consistent progress each week</li>
            </ul>
            <Link to="/contact" className="btn">Book a lesson</Link>
          </article>
          <article className="card">
            <h3>Custom Plan</h3>
            <p className="price">Let’s talk</p>
            <p> For advanced needs or special projects.</p>
            <ul>
              <li>Exam / audition preparation</li>
              <li>Consultation</li>
              <li>Sibling or family packages</li>
            </ul>
            <Link to="/contact" className="btn">Book a lesson</Link>
          </article>
        </div>
      </section>

      <section className="dark-footer">
        <div className="dark-footer-container">
          <h1>Personalized piano lessons for every age, every stage</h1>
          <div className="dark-card-grid">
            <div className="dark-footer-card">
              <img className="icon"
                src={clock} />
                <h3>Flexible</h3>
              <p>
               Enjoy the convenience of a flexible lesson schedule designed to fit your busy life.
              </p>
            </div>
            <div className="dark-footer-card">
              <img className="icon"
                src={inspiration} />
                <h3>Personalized</h3>
              <p>Each lesson program is adapted and tailored specifically to the individual student's goals and needs.</p>
              </div>
            <div className="dark-footer-card">
              <img className="icon"
                src={grand} />
                <h3>Comprehensive</h3>
              <p>
                Comprehensive training for all skill levels: engaging lessons for beginners and advanced instruction for experienced musicians.
              </p>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
