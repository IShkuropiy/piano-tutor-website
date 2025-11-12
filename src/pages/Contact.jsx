import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  return (

    <section className="contact">

      <div className="contact-card">
        <h1 className="title">Contact Me</h1>
        <p className="contact-subtitle">If you’re not yet certain of your direction, you’re welcome to book a consultation — together we’ll explore your goals and find the learning format that suits you best.</p>
        <p className="contact-text">
          Send me an email: gfuisdk@gmail.com
        </p>
        <p className="contact-text"> 
          Give me a call: +1233545567
        </p>
        <p className="contact-text">
          Monday-Saturday: 9AM-7PM PST
        </p>

        <p className="contact-footer">Thanks for visiting!</p>
      </div>
    </section>
  );
}