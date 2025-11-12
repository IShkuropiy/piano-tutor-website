import React from "react";
import { Link } from "react-router-dom";
import piano from "/src/assets/piano.jpg";
import grandpiano from "/src/assets/grandpiano.jpg";
import clock from "/src/assets/clock.png";
import inspiration from "/src/assets/inspiration.png";
import grand from "/src/assets/grand.png";
import "./About.css";
import "./Footer.css"

export default function About() {
  return (
    <>
      <section className="about">
        <div className="image">
          <img src={piano} />
        </div>

        <div className="about-content">
          <h3>Carrying the legacy of European classical school into the vision of today
</h3>
          <h1>Musical Guidance & Services</h1>
          <div className="a-card">
            <h3>Individual Lessons:</h3>
            <p>Available in person or online. Each session includes instruction in piano playing and music reading</p>
          </div>

          <div className="a-card">
            <h3>Musical Development:</h3>
            <p>
              Lessons focus on refining technique, expressiveness, musical memory, coordination, and aural perception — helping you perform with confidence and ease.
            </p>
          </div>

             <div className="a-card">
            <h3>Exam Preparation:</h3>
            <p>Support for school exams or other academic requirements in music.</p>
          </div>
                        <div className="a-card">
            <h3>Additional Services:</h3>
            <p>Music Theory, Harmony, and Music History lessons are available for those wishing to deepen their understanding</p>
          </div>

             <div className="a-card">
            <h3>Consultations and Feedback</h3>
            <p>On request, I offer personal consultations to discuss progress, answer questions, and provide detailed feedback.</p>
          </div>

        </div>
      </section >

      <section className="footer dark">
        <div className="dark footer-container">
          <h1>Personalized piano lessons for every age, every stage</h1>
          <div className="card-grid">
            <div className="footer-card">
              <img className="icon"
                src={clock} />
              <p>
               Enjoy the convenience of a flexible lesson schedule designed to fit your busy life.
              </p>
            </div>
            <div className="footer-card">
              <img className="icon"
                src={inspiration} />
              <p>Each lesson program is adapted and tailored specifically to the individual student's goals and needs.</p>
              </div>
            <div className="footer-card">
              <img className="icon"
                src={grand} />
              <p>
                Comprehensive training for all skill levels: engaging lessons for beginners and advanced instruction for experienced musicians.
              </p>
            </div>
          </div>
        </div>

      </section>

      <section className="add add--reverse">
              <div className="add-content">
                <h1 className="add-title">Being a Pianist Is an Honor</h1>
      
                <p className="add-text">
                  To be a pianist is more than simply pressing keys — it is a privilege, a discipline, and a journey of personal growth. Every time you sit at the instrument, you are not only making music, you are also developing qualities that will serve you far beyond the piano bench:
                </p>
                        <ul className="add-list">
                      <li>Physical endurance and stamina</li>
                      <li>Mental flexibility and sharp focus</li>
                      <li>Persistence in the face of challenges</li>
                      <li>Discipline and self-control</li>
                      <li>Composure under pressure</li>
                      <li>A long attention span and strong concentration</li>
                      <li>Coordination between mind, body, and ear</li>
                      <li>The ability to overcome obstacles</li>
                      <li>Quick reactions and adaptability</li>
                      <li>Excellent memory</li>
                      <li>The capacity to manage an intensive workload</li>
                      <li>A rich and imaginative inner world</li>
                  </ul>
              </div>
                            <div className="add-image">
                <img src={grandpiano} />
              </div>
            </section>
      
    </>
  );
}

