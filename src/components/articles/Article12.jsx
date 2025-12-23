import "./Index.css";
import self from "../../assets/self.jpg";
import hands23 from "/src/assets/hands23.jpg";
import Intervals from "./Intervals";

export default function Article12() {
    return (
        <article class="post">

            <div className="post__header">
                <h1 className="post__title">Musical Intervals: An Introduction</h1>
                <div className="post__meta">
                    <img src={self} />
                    <div>
                        <div className="post__author">Iryna Shkuropii</div>
                        <div className="post__byline">Nov 29, 2025</div>
                    </div>
                </div>
            </div>

            <section>
                < img src={hands23} className="article-img"/>
                <p>Musical intervals are like the essential building blocks for a house! If you understand them, you'll know how to properly create melodies and chords, learn new songs faster, and express the right emotions in your music. It's much harder to write or play music if you don't understand how intervals work.</p>
                <h2>What is an Interval?</h2>
                <p>An interval is simply the distance between two musical notes.</p>
                <ul>
                    <li> If the two notes are played one after the other, it's called a melodic interval (like a tune).</li>
                    <li> If the two notes are played at the same time, it's called a harmonic interval (like a chord).
                    </li>
                </ul>
                <h2>Naming the Intervals</h2>
                <p>Intervals get their names from the number of steps between the two notes. We use names that come from Latin numbers.</p>
                <Intervals />
                <p><strong>Important: </strong>This "step count" gives you the name, but the actual distance in sound can change. We'll explore that difference between major, minor, and pure intervals in the next lesson!</p>
                <h2>Understanding Each Interval</h2>
                <p>To help you learn them faster, try to make up your own fun associations or images for the unique sound of each interval.</p>
                <h3>Prime (Prima)</h3>
                <p>The Prime is one step (meaning it's the same note played again). You hear this often when a musician needs to repeat a note or emphasize the main note of a key, called the tonic.</p>
                <h3>Second </h3>
                <p>The Second is a distance of two notes.
                    It sounds very close together. If you play two notes that are right next to each other on the piano at the same time, it creates a dissonant or clashy sound. That means it sounds a bit muddy or harsh.
                    Major Seconds are a whole step apart (like from C to D).
                    Minor Seconds are a half step apart (like from C to C#).</p>
                <h3>Third</h3>
                <p>The Third is a distance of three notes. This is one of the most important intervals! It has a very pleasing sound. Major Thirds sound happy or bright (they have four half-steps). Minor Thirds sound sad or mellow (they have three half-steps). These intervals are key ingredients in building basic chords.
                </p>
                <h3>Fourth</h3>
                <p>The Fourth is a distance of four notes.
                    It sounds strong and stable, giving a sense of brightness or expressiveness. You might hear this interval used in marches or music for ceremonial occasions.</p>
                    <h3>Fifth</h3>
                    <p>The Fifth is a distance of five notes.
It creates a very clear, open sound. It can be used to convey space, volume, or a feeling that is grand or otherworldly.
The Fifth is a very important, stable interval and is often used at a climax or a big moment in a composition.</p>
                    <h3>Sixth</h3>
                    <p>The Sixth is a distance of six notes.
It has a soft and gentle sound. It sounds broad and very melodious. In character, it's a lot like the Third, but wider.
It comes in Major (often in happy-sounding music) and Minor (often in sad-sounding music) forms.</p>
                    <h3>Seventh</h3>
                    <p>The Seventh is a distance of seven notes.
Unlike the Sixth, the Seventh is usually far from soft! Many people find this interval sharp or harsh when the notes are played at the same time.
Major Sevenths usually sound the most dissonant (clashy).
Even though they sound harsh alone, Sevenths are important because they are the outer notes of seventh chords—which are used to create many kinds of harmony.</p>
                    <h3>Octave</h3>
                    <p>The Octave is a distance of eight notes.
When you play the same note eight steps apart (like the first note C and the next note C), it sounds incredibly pure and blended. The notes sound like they are the same, just higher or lower.</p>
<h2>Intervals Beyond the Octave</h2>
<p>The intervals we just talked about (Prime through Octave) are the ones you'll hear and use the most!
After the Octave (which is just the same note, but eight steps higher or lower), music can continue to stretch out and use even bigger distances!
These are sometimes called compound intervals because they are larger than one octave.
These huge intervals are not used as often on their own. Instead, they usually appear as part of very big, colorful chords, like ninth chords or eleventh chords. They add a lot of richness and texture to the music!</p>
            </section>

            <footer className="post__footer">
                <a href="/intervals.pdf"
                    target="_blank"
                    rel="noopener norefferer"
                    className="post-btn">Download PDF</a>
                <a className="post-btn btn--ghost" href="#">Share</a>
            </footer>
        </article>
    );
}