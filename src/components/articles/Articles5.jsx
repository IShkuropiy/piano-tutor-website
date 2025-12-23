import { Link } from "react-router-dom";
import "./Articles.css";
import self from "../../assets/self.jpg";
import dinam from "../../assets/dinam.jpg";
import DynamicsTable from "./DynamicsTable";

export default function Article5() {
    return (
        <article class="post">

            <div className="post__header">
                <h1 className="post__title">Your Guide to Dynamics on the Piano</h1>
                <div className="post__meta">
                    <img src={self} />
                    <div>
                        <div className="post__author">Iryna Shkuropii</div>
                        <div className="post__byline">Oct 30, 2025</div>
                    </div>
                </div>
            </div>

            <section>
                <img className="article-img" src={dinam} />
                <p>
                    The word <strong>dynamics</strong> comes from an old Greek word, dýnamis, which means "force" or "power." In music, that power is all about loudness—how quiet or loud a sound is! It’s one of the four main things that make up a musical sound. Think about playing an instrument: the harder you pluck a guitar string or push a piano key, the bigger the vibration will be. Bigger vibrations mean a louder sound!
                </p>
                Just being loud or quiet isn't enough. The real magic in music is the ability to control the loudness—to paint a picture with sounds that go from a tiny whisper to a huge roar! These different levels of loudness are called <strong>dynamic shades</strong> or <strong>nuances</strong>.
                <p>
                    These dynamic levels (like "loud") are relative, not absolute. Forte (loud) on a ukulele sounds totally different from forte on a pipe organ. The dynamic level always depends on the instrument, the place you are playing, and the musician's feeling for the piece.
                </p>
                <h3>The most basic dynamic scale includes the following designations:</h3>
                <DynamicsTable />

                <h2>Understanding Dynamics</h2>
                <p>
                    Have you ever noticed how your voice changes when you talk? This is the easiest way to understand musical dynamics!
                </p>
                <p>
                    Observe your own speech and the speech of others, and try to analyse their dynamic flow. You’ll notice that everyone’s speech changes in loudness depending on their emotion. Routine phrases are typically spoken around mezzo forte (mf), but when we become excited, we may raise our voices, often building toward a crescendo on the most important words. In heated arguments, people may speak fortissimo (ff), then gradually quiet down toward the end. Whispers correspond to pianissimo (pp) or even piano-pianissimo (ppp)—a dynamic frequently linked with secrets we wish to share discreetly.
                </p>

                <h2>Mastering Dynamics: A Simple Plan</h2>
                <p>Here is a step-by-step way to gain control over your instrument's volume:</p>
                <ul>
                    <li><strong> Start with the Basics: </strong>
                        Learn to play forte (loud) and piano (soft) distinctly. It's like flipping a light switch—no slow change, just loud then soft.</li>
                    <li><strong> Try the Extremes:</strong>  Once you have the basics, jump from pianissimo (pp) (very soft) right to fortissimo (ff) (very loud). This helps build precise control over huge contrasts.</li>
                    <li><strong> Dynamics Equal Feeling: </strong> Remember that dynamics are a key way to add expression and emotion to your playing. When you change the volume, it changes the feeling of the music!
                        <li><strong>Watch how people talk:</strong> Try to "play" their voice changes on your instrument. Simply take those natural ups and downs of speaking and transfer them to your music!</li>
                    </li>
                    <li><strong>Listen to other musicians:</strong> Many secrets to great performing are hidden in how they use dynamics.</li>
                    <li><strong>Try an echo effect: </strong>repeat a musical phrase immediately, but play the repeat much softer (or sometimes louder) than the first time</li>
                    <li><strong>Finding the Edges of Sound:</strong> Explore the quietest and loudest sounds your instrument can make. Try to find the exact moment when a tone emerges from silence. How softly can you play without the sound disappearing? Even complete silence (a rest or a pause) is a dynamic choice!</li>
                </ul>
                <p>Just like a painter sees countless shades of color, a musician learns to control the finest nuances of dynamics. At first, you only hear "loud" and "soft." But soon, you’ll hear a constantly flowing wave of sound—rising like a breath from piano to forte and back again.
                </p>
                <p>It's easy to understand dynamics, but it takes lots of practice to hear and reproduce those beautiful, expressive transitions!</p>
            </section>

            <footer className="post__footer">
                <a href="/dynamics.pdf"
                    target="_blank"
                    rel="noopener norefferer"
                    className="post-btn">Download PDF</a>
                <a className="post-btn btn--ghost" href="#">Share</a>
            </footer>

        </article>
    );
}