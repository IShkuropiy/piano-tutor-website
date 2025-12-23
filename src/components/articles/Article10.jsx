import React from "react";
import "./Index.css";
import "../footer-btn/FooterBtn";
import self from "../../assets/self.jpg";
import articulation from "../../assets/articulation.WEBP";
import tenuto from "../../assets/tenuto.WEBP";
import staccato from "../../assets/staccato.WEBP";
import staccatissimo from "../../assets/staccatissimo.WEBP";
import accents from "../../assets/accents.WEBP";
import marcato from "../../assets/marcato.WEBP";
import fermata from "../../assets/fermata.WEBP";
import FooterBtn from "../footer-btn/FooterBtn";

export default function Article10() {

    return (
        <article className="post">
            <div className="post__header">
                <h1 className="post__title">Articulations & Expressions</h1>
                <div className="post__meta">
                    <img src={self} />
                    <div>
                        <div className="post__author">Iryna Shkuropii</div>
                        <div className="post__byline">Nov 24, 2025</div>
                    </div>
                </div>
            </div>

            <section>
                <img src={articulation} className="photo-notes" />
                <p>Just like talking has rules for how we say words—whether we speak short and snappy or long and smooth—music has rules too! In music, these rules are called <strong>articulation</strong>. Articulation tells us exactly how to play a note, a chord, or a group of notes. You could play the exact same melody four times, but by using different articulation, you can make it sound like four totally different pieces of music!</p>

                <h2>The Most Common Articulation Marks
                </h2>
                <p>We start to learn how to play piano with three basic articulation marks: <strong>legato</strong>, <strong>non legato</strong>, and <strong>staccato</strong>.</p>

                <ul className="tips">
                    <li><strong>Legato: </strong>This means to play notes smoothly connected without any break between them. The keys are released just as the next note is played, creating a continuous sound.</li>
                    <li><strong>Non Legato: </strong>This is the default, un-marked articulation. The key is held almost whole length ( approximately 3/4 of the note's value) and then release it, creating a slight, natural separation between the notes without being noticeably short or detached. It is the articulation of a natural, gravity-based stroke.</li>
                    <li><strong>Staccato: </strong>This means the note should be played short, detached, and separated. Play the note briefly and lightly. Think of a bouncing ball—it touches the ground quickly and jumps up, separated from the next bounce. The sound should be short and separated from the next note.</li>
                </ul>
                <img src={staccato} className="photo-notes" />

                <p>There are many other different ways to tell a musician how to play a note. The most common musical "directions" you'll see are:</p>
                <ul className="tips">
                    <li>Staccatissimo</li>
                    <li>Tenuto</li>
                    <li>Accent</li>
                    <li>Marcato</li>
                    <li>Fermata</li>
                    <li>Sforzando</li>
                    <li>Portamento</li>
                </ul>

                <h2>A Closer Look at the Main Marks</h2>
                <p>Some of these marks can look or sound very similar! Don't worry if you don't hear the difference right away—it takes practice. Think of this article as your homework before the lesson; a full understanding will come when you start playing and listening to these marks in action.</p>

                <h3>Staccatissimo (The Super-Bounce)</h3>
                <p>This is like a very strong Staccato. Play the note extra-short and with a bit more force, separating it as much as possible from the notes that follow.</p>
                <img src={staccatissimo} className="photo-notes" />

                <h3>Tenuto (Hold It!)</h3>
                <p>The Italian word Tenuto means "hold" or "sustained." When you see this, you must hold the note for its full, entire value.</p>
                <h5>Important Note: </h5>
                <p>Tenuto is different from a Slur. You hold the note fully, but you don't necessarily have to connect it smoothly to the next note.</p>
                <img src={tenuto} className="photo-notes" />

                <h3>Slur (The Smooth Ride)</h3>
                <p> Play the notes smoothly and connectedly (called Legato). Think of it like a smooth roller coaster without any bumps or breaks. The goal is to make the group of notes sound like one flowing phrase.</p>
            

                <h3> Accent (The Loud Voice)</h3>
                <p>Play the note louder or with a stronger attack than the notes around it. It's like putting a little emphasis on that one word when you're talking.</p>
                <img src={accents} className="photo-notes" />

                <h3>Marcato (The Mighty Hammer)</h3>
                <p>This is like a super-strong Accent. Play the note very forcefully and prominently. It’s often combined with a bit of separation, giving it a powerful, decisive sound.</p>
                <img src={marcato} className="photo-notes" />

                <h3>Fermata (Rhythmic Pause)</h3>
                <p>The fermata articulation mark has a profound effect on the interpretation and overall rhythm of a musical piece, as it temporarily alters the flow of time. Often referred to by musicians as a "hold" or "pause," this sign indicates that a particular note, rest, or chord should be sustained for a duration longer than its standard written value. Depending on the composer and the performer's discretion, the fermata can create a barely perceptible rhythmic difference or, conversely, can hold notes for an extended, expressive period. The beauty of the fermata lies in its ability to suspend the established rhythm, creating a moment of lingering tension, a breathless pause that anticipates the end of a phrase, a cadence, or the beginning of the next section.</p>
                <img src={fermata} className="photo-notes" />

                <h3>Portamento</h3>
                <p>Portamento is a unique performance instruction, often translated as "to carry" or "to glide," which indicates a continuous, unbroken glide in pitch from one note to the next. This glide is achieved by passing through all the intervening pitches, distinguishing it from a standard, discrete shift in notes. The expressive effect of a portamento depends heavily on the performer's intention, as a long, drawn-out glide can sound much more unusual and intense than a subtle, short one.</p>

                <h3>Sforzando</h3>
                <p>The sforzando dynamic mark is easily recognizable by its abbreviation "Sfz." It is one of the most dramatic and instantly recognizable dynamic accents, instructing the performer to play a note with a sudden, forceful accent. While the term literally means "forced," its performance can vary. Classically, it is interpreted as a very loud attack (forte) followed immediately by a rapid reduction in volume (subito piano). Think of the effect as a sudden explosion of sound, designed to create a moment of intense shock or interest that instantly grabs the listener's attention.</p>

                <p className="last">The simplest way to understand articulation and dynamic marks in music is as the expressive toolkit for the performer. The beauty of musical articulation is that it gives us multiple ways to alter the written score—modifying a note's dynamic level, its duration, its attack, or its timbre—thereby allowing the musician to truly express themselves through playing.</p>
            </section>

            < FooterBtn />
        </article>
    );
}