import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";
import student from "/src/assets/student.jpg";

export default function Pricing() {

    return (
        <main>
            <section className="pricing">
                <div className="pricing-content">
                    <h1 className="title">Lesson Rates</h1>
                    <h2 className="subtitle">
                        Single Class:
                    </h2>
                    <p className="text">
                        $30 for a 45-minute individual session.
                        Perfect for new students or those wanting to try a single class.
                    </p>
                    <h2 className="subtitle">
                        Weekly Commitment Discount:
                    </h2>
                    <p className="text">
                        For students ready to make real, lasting progress, I recommend booking two or more classes per week.
                        When you do, the rate drops to $25 per class — that’s $50 per week, saving you $5 per session.
                    </p>
                    <h2 className="subtitle">
                        Why I Keep My Rates Low
                    </h2>
                    <p className="text">
                        I believe that high-quality, personalized tutoring shouldn’t be a luxury. Every child deserves the chance to develop their skills and confidence through consistent, encouraging lessons.
                        To make this possible, I’ve kept my pricing as affordable as I can. Your commitment to regular sessions helps me maintain this low-cost structure while continuing to provide exceptional results.
                    </p>
                    <Link to="/contact" className="btn">Book a lesson!</Link>
                </div>

                <div className="image">
                    <img src={student} />
                </div>
            </section>

        </main>
    );
}