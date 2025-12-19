import React from "react";
import './Index.css'
import self from "../../assets/self.jpg";
import circus from "../../assets/circus.png";
import turina from "../../assets/turina.png";

export default function Turina() {
    return (

        <article className="post">
            <div className="post__header">
                <h1 className="post_title">The Circus</h1>
                <div className="post__meta">
                    <img src={self} />
                    <div>
                        <div className="post__author">Iryna Shkuropii</div>
                        <div className="post__byline">Dec 9, 2025</div>
                    </div>
                </div>
            </div>

            <section>
            <p>First, listen to the music carefully. Then think about these questions:</p>
            <ul className="questions">
                <li>Which circus act do you imagine? Why?</li>
                <li>If you could add your own piece to this cycle, what would it be like? How would it sound?</li>
            </ul>

                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/SzTAKMbx4rU?si=QNR97Mv9KHyL4_Dn" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>
                <p>Joaquín Turina wrote his children’s piano cycle in 1931. It consists of six miniature pieces, each one portraying a different circus act. As in much of his music, Turina infuses these pieces with unmistakable Spanish colors, and the spirit and folklore of his native Andalusia. His writing is vivid, richly detailed, and instantly recognizable; it stands apart from that of any other composer of his time.</p>

                <img src={circus} className="article-image"/>

                <p>The first piece of the cycle opens with bright fanfares that immediately draw the audience’s attention to the stage and prepare them for a series of wonderful performances: jugglers, trapeze artists, trained poodles, and strongmen.
                    Musically, throughout the contrasting miniatures, you can hear airy, flowing passages that suggest the flight of acrobats swinging high above the audience. Sparkling glissandi, a playful dotted rhythm, and quick octave leaps bring to life two clowns teasing and joking with one another. Light, nimble “paws” of the trained dogs appear in the high register.</p>
                <p>Turina created powerful, imaginative miniatures in which you can hear enthusiastic applause, the lively bustle of the circus, and the soft glow of a child’s imagination. The cycle becomes a miniature musical theater, where each piece tells its own small story and invites the listener into a colorful world conjured solely by two hands at the piano.</p>

                <img src={turina} className="article-image"/>
            </section>
        </article>
    );
}