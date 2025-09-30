import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (

        <>
            <section id="hero" className="hero">

                <div className="hero-content">
                    <h1>II</h1>
                    <h3 className="subtitle">Classical <span>Pianist</span></h3>
                    <h3>and Tutor</h3>
                    <p className="hero-text">
                        Personalized piano lessons for every age, every stage
                    </p>
                    <a href="#" className="btn">Contact Me</a>
                </div>
            </section>

            <section id="about" className="about">
                <div className="about-content">
                    <img src={'./src/assets/img-about.jpg'} />
                    <div className="about-text">
                        <h2> Classical Pianist and tutor </h2>
                        <h5>My Expirience</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim animi nemo, eum iste
                            porro esse, similique pariatur eligendi consequatur voluptas delectus veniam alias harum. Nobis
                            voluptatum omnis dignissimos perferendis
                        </p>

                        <h5>My Values</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim animi nemo, eum iste
                            porro esse, similique pariatur eligendi consequatur voluptas delectus veniam alias harum. Nobis
                            voluptatum omnis dignissimos perferendis
                            et blanditiis tempora eveniet nostrum obcaecati magni, modi deserunt, recusandae adipisci
                            debitis quos ullam sit minus illum incidunt facilis unde!</p>
                        <a href="#" className="btn">Ask me a Question</a>
                    </div>

                </div>

            </section>


            <section id="contact" className="contact">

                <h2>Contact Me</h2>

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
                            <h2 className="sub">Let's Connect</h2>

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

            <section id="blog" className="blog">
                <div className="container">
                    <h2 className="section-title">Featured articles</h2>

                    <div className="card-grid">
                        <article className="card">
                            <span className="eyebrow">Your Technique</span>
                            <h3 className="card-title">Independent practice at home</h3>
                            <p className="card-snippet">
                                How to practice
                            </p>
                            <div className="card-meta">
                                <a href="#read-1" className="card-link">Read more</a>

            <section id="blog" className="blog">

                <div className="blog-content">
                    <div className="title">
                        <h2 className="blog-heading">Work at Home</h2>
                    </div>

                    <div className="blog-box">
                        <div className="card">
                            <h5>Tips for Succesfull Learning</h5>
                            <div className="pra">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, consequatur quasi veritatis ipsam velit ut maiores beatae nulla nisi! Cumque, maiores?</p>
                                <a href="#WorkAtHome" className="btn">Read More</a>
                            </div>
                        </article>

                        <article className="card">
                            <span className="eyebrow">Music Theory</span>
                            <h3 className="card-title">The basic Music Theory</h3>
                            <p className="card-snippet">
                                Learning basic music theory is essential for enhancing creativity and developing musical awareness...
                            </p>
                            <div className="card-meta">
                                <a href="#read-2" className="card-link">Read more</a>
                            </div>
                        </article>

                        <article className="card">
                            <span className="eyebrow">Student's Tips</span>
                            <h3 className="card-title">Motivation</h3>
                            <p className="card-snippet">
                                t’s not motivation that drives action, but action that drives motivation...
                            </p>
                            <div className="card-meta">
                                <a href="#read-3" className="card-link">Read more</a>
                            </div>
                        </article>

                        <article className="card">
                            <span className="eyebrow">Your Technique</span>
                            <h3 className="card-title">Independent practice at home</h3>
                            <p className="card-snippet">
                                How to practice
                            </p>
                            <div className="card-meta">
                                <a href="#read-1" className="card-link">Read more</a>
                            </div>
                        </article>

                        <article className="card">
                            <span className="eyebrow">Music Theory</span>
                            <h3 className="card-title">The basic Music Theory</h3>
                            <p className="card-snippet">
                                Learning basic music theory is essential for enhancing creativity and developing musical awareness...
                            </p>
                            <div className="card-meta">
                                <a href="#read-2" className="card-link">Read more</a>
                            </div>
                        </article>

                        <article className="card">
                            <span className="eyebrow">Student's Tips</span>
                            <h3 className="card-title">Motivation</h3>
                            <p className="card-snippet">
                                t’s not motivation that drives action, but action that drives motivation...
                            </p>
                            <div className="card-meta">
                                <a href="#read-3" className="card-link">Read more</a>
                            </div>
                        </article>
                        <article className="card">
                            <span className="eyebrow">Your Technique</span>
                            <h3 className="card-title">Independent practice at home</h3>
                            <p className="card-snippet">
                                How to practice
                            </p>
                            <div className="card-meta">
                                <a href="#read-1" className="card-link">Read more</a>
                            </div>
                        </article>

                        <article className="card">
                            <span className="eyebrow">Music Theory</span>
                            <h3 className="card-title">The basic Music Theory</h3>
                            <p className="card-snippet">
                                Learning basic music theory is essential for enhancing creativity and developing musical awareness...
                            </p>
                            <div className="card-meta">
                                <a href="#read-2" className="card-link">Read more</a>
                            </div>
                        </article>

                        <article className="card">
                            <span className="eyebrow">Student's Tips</span>
                            <h3 className="card-title">Motivation</h3>
                            <p className="card-snippet">
                                t’s not motivation that drives action, but action that drives motivation...
                            </p>
                            <div className="card-meta">
                                <a href="#read-3" className="card-link">Read more</a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

        </>
    );
}
