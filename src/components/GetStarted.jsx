import React from "react";
import { Link } from "react-router-dom";
import "./Getstarted.css";

export default function GetStarted() {
    return (
        <section className="start">
            <div className="start-container">
                <h1>Ready to get started?</h1>
                <p>If you’re not yet certain of your direction, you’re welcome to book a free consultation — together we’ll explore your goals and find the learning format that suits you best.</p>
                <Link to="/contact" className="btn">Contact me</Link>
                <p className="closing">Let’s team up to reach your goals.</p>
            </div>
        </section>
    );
}