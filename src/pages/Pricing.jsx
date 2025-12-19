import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";
import "./Hero/Hero.css";
import "./FourCardsGrid.css";
import Getstarted from '../components/reasons/Getstarted';
import Lessons from '../components/reasons/Lessons';
import hands6 from "/src/assets/hands6.jpg";


export default function Pricing() {

  return (

    <main className="pricing">
      {/* HERO */}
      <section className="hero">
        <img className="hero__img"
          src={hands6} />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1>Lesson rates</h1>
          <p className="hero__text">I believe that high-quality, personalized tutoring shouldn’t be a luxury. Every child deserves the chance to develop their skills and confidence through consistent, encouraging lessons.
            To make this possible, I’ve kept my pricing as affordable as I can. Your commitment to regular sessions helps me maintain this low-cost structure while continuing to provide exceptional results.</p>
        </div>
      </section>

      {/* PRICE CARDS */}
      <section id="plans" className="cards">
        <div className="container cards__grid">
          <article className="card">
            <h3>Single Class</h3>
            <p className="price">$30<span>/45-min/1 time per week</span></p>
            <p>Perfect for new students or those wanting to try a single class.</p>
            <ul>
              <li>Individual 1:1 session</li>
              <li>Great for new students</li>

            </ul>
            <Link to="/contact" className="btn">Book a lesson</Link>
          </article>

          <article className="card">
            <h3>Weekly Plan</h3>
            <p className="price">$25<span>/45-min/2+ per week</span></p>
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
              <li>Consultation</li>
              <li>Sibling or family packages</li>
            </ul>
            <Link to="/contact" className="btn">Book a lesson</Link>
          </article>
        </div>
      </section>

      <hr />

      < Lessons />

      <hr />

      {/* FOUR-CARD GRID */}
      <section className="servicee">
        <div className="servicee-container">
          <h1 className="servicee__title">
            Lesson Cancellation & Booking Policy
          </h1>

          <div className="servicee__grid">

            <article className="servicee-card">
              <ul>
                <li>
                  <strong>24+ Hours Notice: </strong>
                  If you cancel or reschedule more than 24 hours before your scheduled time, there will be no charge.
                </li>
                <li>
                  <strong>Less than 24 Hours Notice: </strong>
                  Cancellations or requests to reschedule made with less than 24 hours notice will result in a charge of 50% of the lesson service amount.
                </li>
                <li>
                  <strong>No-Shows: </strong>
                  Failure to show up for a lesson without any prior notice will be considered a "No-Show" and will result in a charge of 100% of the lesson service amount.
                </li>
              </ul>
            </article>

            <article className="servicee-card">
              <ul>
                <li>
                  <strong>Booking Requirement: </strong> Lessons are only confirmed and booked once payment has been successfully processed.
                </li>
                <li><strong>Payment Deadline: </strong>Failure to pay for a lesson at least 24 hours prior to the scheduled start time will result in the lesson being automatically un-booked and offered to another student.
                </li>
              </ul>
            </article>

            <article className="servicee-card">
              <p className="accept">I accept: </p>
              <ul>
                <li>
                  <strong> Venmo, PayPal, Zelle. </strong>
                </li>
                <li>
                  <strong>Cash:</strong> If you prefer to pay with cash, please notify me via text or email before your scheduled lesson so we can make the necessary arrangements.
                </li>
              </ul>

            </article>

            <article className="servicee-card">
              <ul>
                <li>
                  <strong>Monthly Payment (Preferred): </strong> For consistent scheduling and commitment, I highly prefer payment for a full month of lessons in advance.
                </li>
                <li>
                  <strong>Per Lesson Payment: </strong> I understand that flexibility is key, especially when you are starting out. You may opt to pay per lesson if you wnat to take a trial lesson or if you have special circumstances. Please discuss this option with me directly if you have unique scheduling needs.
                </li>
              </ul>
            </article>
          </div>

        </div>
      </section>

      <hr />
      <Getstarted />

    </main>
  );
}
