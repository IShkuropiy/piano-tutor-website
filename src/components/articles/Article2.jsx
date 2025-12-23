import React from "react";
import "./Index.css";
import self from "../../assets/self.jpg";
import accidentals from "../../assets/accidentals.svg";
import Accidentals from "./Accidentals";
import FooterBtn from "../footer-btn/FooterBtn";

export default function Article2() {
    return (

        <article className="post">
            <div className="post__header">
                <h1 className="post__title">Accidentals, the basics</h1>
                <div className="post__meta">
                    <img src={self} />
                    <div>
                        <div className="post__author">Iryna Shkuropii</div>
                        <div className="post__byline">Nov 12, 2025</div>
                    </div>
                </div>
            </div>

            <section>
                <p><strong>Accidentals</strong> are special musical symbols that tell you to change the pitch (how high or low the sound is) of a note, just for a little while. Think of them as temporary instructions!</p>

                <h2>The Five Main Accidentals</h2>
                <Accidentals />
                <p className="tips"><strong>Pro Tip: </strong>
                    A "semitone" is the smallest distance between two notes (like moving from a white key to a black key on a piano). A "whole tone" is the distance of two semitones (like moving from one white key to the next white key, if there is a black key in between).</p>

                <h2>Accidentals in Action</h2>
                <p>Sharps and flats (all accidentals) are used in two main ways:</p>
                <h3> Key Signature (The Long-Term Rules)</h3>
                <ul>
                    <li><strong>Where they are: </strong>
                        Placed right at the beginning of the music staff, next to the clef (like the Treble or Bass clef).</li>
                    <li><strong>What they do: </strong>
                        They tell you which notes must be played as a sharp or flat throughout the entire piece (or until the key changes). They set the "key" or family of notes the music will use.
                    </li>
                    <li><strong>Example: </strong>
                        If the key signature has a $B\flat$, every B you see will automatically be played as a $B\flat$, unless told otherwise!
                    </li>
                </ul>
                <h3>Bar Accidentals (The Temporary Instructions)</h3>
                <ul>
                    <li><strong>Where they are: </strong>
                        Placed right before a specific note anywhere in the music.</li>
                    <li><strong>What they do: </strong>
                        They temporarily change the pitch of only that note and any other same-note played later in that same measure (the space between two bar lines).</li>
                    <li><strong>How long they last: </strong>
                        As soon as the music crosses the next bar line, the accidental is canceled. If the composer wants the accidental again in the next measure, they have to write it again! This is done when the music needs to change notes temporarily for harmony or to create a different feeling.</li>
                </ul>

                <img className="photo-notes" src={accidentals} />

            </section>
            
            <FooterBtn />
        </article>
    );
}