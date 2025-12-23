import "./Index.css";
import self from "../../assets/self.jpg";
import tempo from "../../assets/tempo.png";
import TempoTable from "./TempoTable";
import BasicTempoRangeTable from "./BasicTempoRangeTable";


export default function Article8() {
    return (
        <article class="post">

            <div className="post__header">
                <h1 className="post__title">Introduction to Musical Tempos</h1>
                <div className="post__meta">
                    <img src={self} />
                    <div>
                        <div className="post__author">Iryna Shkuropii</div>
                        <div className="post__byline">Oct 29, 2025</div>
                    </div>
                </div>
            </div>

            <section>
                
                <img className="article-img" src={tempo} />
                <p>
                    Tempo is one of the ways musicians bring music to life. Along with rhythm, melody, and harmony, it helps us feel the mood and energy of a piece.
                </p>
                <p>
                    So, what exactly is tempo?
                    In simple words,<strong> tempo means how fast or slow the music moves</strong>. But it’s not measured in seconds or minutes like regular time. Musical time works differently—it’s more like the beating of our hearts. Imagine your heartbeat: sometimes it’s calm and steady, other times it races when you’re excited. Music has a similar pulse—a quiet, invisible beat that musicians feel inside while they play.</p>
                <p>
                    Even though we don’t hear this beat directly, every musician counts it deep down. It keeps the music steady and helps everyone play or sing together, staying true to the same rhythm and tempo.
                </p>
                <h3>Tempo Markings</h3>
                <p>
                    Usually we can see something like this: a quarter note (♩), followed by an equal sign, and then a number.
                    For example, ♩ = 100 means that the piece should have one hundred beats per minute, according to the Maelzel metronome.
                    You can see an example of this notation in the image below.
                </p>
                <p>
                    In many pieces, you’ll notice extra words written beside the main tempo marking. These words help describe how the music should move or what kind of character it should have. For example: <strong>Allegro molto</strong> (means very fast), or <strong>Allegro ma non troppo</strong> (means fast, but not too fast), or <strong>Allegro con brio</strong> (means fast and full of energy).
                </p>
                <p>
                    These little phrases give musicians more than just speed — they tell us about the feeling and personality of the music. Should it sparkle? Flow gently? Burst with excitement? The composer’s words help us bring those emotions to life.

                </p>
                <p className="tips">
                    All tempos can be grouped into three main types: <strong>slow, moderate, and fast</strong>.
                </p>
                <h3>Common Tempo Markings and Their Speeds</h3>
                <p>Below you’ll find a table of the most common Italian tempo terms, their meanings, and approximate speeds in beats per minute (BPM). It’s a great quick guide for students and parents learning how tempo markings work.
                </p>
                  <BasicTempoRangeTable />
                <h3>Terms For Changes In Tempo</h3>
                <p>
                    Usually, the tempo set at the beginning of a piece stays the same until the end.
                    But music is full of emotion, and sometimes it needs to slow down or speed up to match the mood. That’s why the tempo can change during a performance—either gradually or suddenly.
                </p>
                <p>
                    To show these changes, composers use special Italian words.
                    Some tell us to play faster, such as:<strong> accelerando, stringendo, stretto, and animando.</strong>
                </p>
                <p>
                    Others mean to slow down, like: <strong>ritenuto, ritardando, rallentando, and allargando.</strong>
                </p>
                <p>
                    These markings help musicians shape the flow of the music—just like how our breathing or heartbeat changes when we feel calm, excited, or inspired.
                </p>
                <TempoTable />

            </section>
            <footer className="post__footer">
                <a href="/tempo.pdf"
                    target="_blank"
                    rel="noopener norefferer"
                    className="post-btn">Download PDF</a>
                <a className="post-btn btn--ghost" href="#">Share</a>
            </footer>
        </article>
    );
}