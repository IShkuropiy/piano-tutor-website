import "../footer-btn/FooterBtn";
import "./Index.css";
import self from "../../assets/self.jpg";
import scale from "../../assets/scale.png";
import FooterBtn from "../footer-btn/FooterBtn";

export default function Article11() {

    return (

        <article className="post">

            <div className="post__header">
                <h1 className="post__title">Mode: The Alphabet of Music</h1>
                <div className="post__meta">
                    <img src={self} />
                    <div>
                        <div className="post__author">Iryna Shkuropii</div>
                        <div className="post__byline">Oct 29, 2025</div>
                    </div>
                </div>
            </div>

            <section>
                <img src={scale} className="photo" />
                <p>
                    In music theory, a <strong>mode</strong> (or scale) is one of the most fundamental concepts, much like the alphabet in a language. A mode is a specific, ordered set of notes with varying pitches, which forms the basis for a melody or harmony. These notes are not assembled randomly; they adhere to a defined structure, ensuring no "foreign" sounds disrupt the established pattern.
                    The relationships between the different notes within a mode are governed by a specific system of steps and half-steps. The individual notes of the mode are called <strong>scale degrees</strong> and are often designated by Roman numerals (I, II, III, etc.), counted in ascending order, starting from the first note—the<strong> tonic</strong>.
                </p>

                <h2>Stable and Unstable Degrees</h2>
                <p>The notes within a mode are categorized as either stable or unstable. This division is key to understanding musical movement and tension.</p>
                <h3>Stable Degrees</h3>
                <p>Stable degrees sound self-sufficient and complete — like a period at the end of a sentence. They serve as the supporting notes of the mode.</p>
                <ul className="tips">
                    <li>The most stable, central, and supportive note is the tonic (I).</li>
                    <li>The other primary stable degrees are the mediant (III) and the dominant (V).</li>
                    <li>Together, the first, third, and fifth degrees (I, III, V) form the tonic triad, which defines the mode's core harmony.</li>
                </ul>

                <h3>Unstable Degrees</h3>
                <p>The term "unstable" perfectly captures the essence of these notes. They feel incomplete or "shaky" and create tension.</p>
                <ul className="tips">
                    <li>Unstable degrees are the second (II), fourth (IV), sixth (VI), and seventh (VII) notes of the scale.</li>
                    <li>These notes require support and a logical transition to a stable note to resolve the tension they create.</li>
                </ul>

                <h2>Tonal Attraction and Resolution</h2>
                <p>The fundamental principle governing the relationship between these notes is called tonal attraction. Unstable degrees naturally gravitate toward, or pull into, the nearest stable degrees.
                    This transition from an unstable note to an adjacent stable note is called resolution. A resolution is the successive execution of an unstable note immediately followed by the stable note it is moving toward.
                    Since the tonic (I) is the most stable note, it is often used as the final note or chord, providing the strongest sense of closure in a musical phrase.

                    <h2>The Necessity of Instability</h2>
                     While unstable notes always strive to resolve into stable ones, remaining in a constant, stable state would result in uninteresting music. Unstable degrees are essential for creating musical action and drama. They constantly lead the melody away from stability, creating tension, only to return and resolve it again, driving the music forward.</p>
            </section>

            < FooterBtn />
        </article>
    );
}