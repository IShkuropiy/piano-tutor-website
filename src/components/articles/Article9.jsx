import React from "react";
import "./Index.css";
import self from "../../assets/self.jpg";
import royal2 from "../../assets/royal2.jpg";

export default function Article9() {
    return (

        <article className="post">
            <div className="post__header">
                <h1 className="post__title">Being a Pianist Is an Honor</h1>
                <div className="post__meta">
                    <img src={self} />
                    <div>
                        <div className="post__author">Iryna Shkuropii</div>
                        <div className="post__byline">Sep 27, 2025</div>
                    </div>
                </div>
            </div>
            <section>

                <img src={royal2} className="article-img" />

                <p>To be a pianist is more than simply pressing keys — it is a privilege, a discipline, and a journey of personal growth. Every time you sit at the instrument, you are not only making music, you are also developing qualities that will serve you far beyond the piano bench.</p>

                <h2>A pianist embodies:</h2>

                <div className="tips">
                    <ul>
                        <li>Physical endurance and stamina.</li>
                        <li>Mental flexibility and sharp focus.</li>
                        <li>Persistence in the face of challenges.</li>
                        <li>Discipline and self-control.</li>
                        <li>Composure under pressure.</li>
                        <li>A long attention span and strong concentration.</li>
                        <li>Coordination between mind, body, and ear.</li>
                        <li>The ability to overcome obstacles.</li>
                        <li>Quick reactions and adaptability.</li>
                        <li>Excellent memory.</li>
                        <li>The capacity to manage an intensive workload.
                        </li>
                        <li>A rich and imaginative inner world.</li>
                    </ul>
                </div>

                <h2>These are not just musical skills—they are life skills.</h2>
                <p>So remember this whenever you feel stuck or discouraged. When the music seems too difficult, when progress feels slow, or when you cannot yet see the results you long for—remind yourself that the very act of continuing is building strength. Each note you play is shaping your character, developing your mind, and preparing you for challenges both in music and in life.</p>

                <p>Being a pianist is not only about performing—it is about becoming resilient, disciplined, and inspired. Hold on to that thought, and let it carry you forward.</p>
            </section>

        </article>
    );
}