import { useState } from "react";
import "./Contact.css";
import "./Hero/Hero.css";
import hands4 from "/src/assets/hands4.jpg";


export default function Contact() {
  const [copied, setCopied] = useState("");

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(""), 1500);
    } catch (e) {
      console.error("Copy failed");
    }
  };

  return (
    <main>
      <section className="hero-contact">
        <img src={hands4} className="hero__img" />
        <div className="hero__overlay" />
        <div className="contact-card">
          <h1 className="title">Contact Me</h1>
          <p className="contact-subtitle">
            Let's chat about your musical background and goals! I offer a free introductory consultation to answer your questions and find the perfect lesson plan for you.
          </p>
           {/* EMAIL */}
          <p
            className="contact-text copyable"
            onClick={() => copyText("gfuisdk@gmail.com")}
          >
            Send me an email: <span>gfuisdk@gmail.com</span>
            {copied === "gfuisdk@gmail.com" && (
              <span className="copied">Copied</span>
            )}
          </p>
           {/* PHONE */}
          <p
            className="contact-text copyable"
            onClick={() => copyText("+1233545567")}
          >
            Give me a call: <span>+1233545567</span>
            {copied === "+1233545567" && (
              <span className="copied">Copied</span>
            )}
          </p>
          <p className="contact-text">
            Monday-Saturday: 9AM-7PM PST
          </p>

          <p className="contact-footer">Thanks for visiting!</p>
        </div>
      </section>

    </main>

  );
}