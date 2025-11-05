import React from "react";
import "./Contact.css";


export default function Contact() {
    return (
        <section id="contact" className="contact">

            <h1 className="title">Contact Me</h1>

            <div className="contact-container">
                <div className="contact-box">
                    <div className="left">

                        <div className="contact-info">
                            <p><i class="bi bi-telephone-fill"></i> +123-456-789</p>
                            <p><i class="bi bi-envelope-fill"> </i> iraGmail.com</p>
                            <p><i class="bi bi-geo-alt-fill"></i> Salem, OR</p>
                        </div>
                        <p className="contact-content">If you have any questions, please feel free to reach me out and
                            I'll gladly answer them. </p>
                        <p className="contact-content">Thanks for visiting!</p>
                    </div>

                    <div className="right">
                        <h2 className="contact-sub">Let's Connect</h2>

                        <form>
                            <input type="text" class="field contact-field" placeholder="Enter Your Name" required />
                            <input type="email" class="field contact-field" placeholder="Enter Your Email" required />
                            <input type="text" class="field contact-field" placeholder="Enter Your Phone Number" />
                            <textarea name="msg" placeholder="Your Message"
                                class="field contact-field contactTextarea" required></textarea>
                            <button className="contact-btn" type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}