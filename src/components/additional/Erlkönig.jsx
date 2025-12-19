import React from "react";
import './Index.css'
import self from "../../assets/self.jpg";
import erlking from "../../assets/erlking.png";
import erl from "../../assets/erl.png";


export default function Erlkönig() {
    return (

        <article className="post">
            <div className="post__header">
                <h1 className="post_title">Erlkönig (The Erl-King)</h1>
                <div className="post__meta">
                    <img src={self} />
                    <div>
                        <div className="post__author">Iryna Shkuropii</div>
                        <div className="post__byline">Dec 10, 2025</div>
                    </div>
                </div>
            </div>

            <section>

                <p>Before reading the material below, listen to the music carefully and consider these questions:</p>
                <ul className="questions">
                    <li>What do you hear? Are there instruments or voices, and how many?</li>
                    <li>What do you imagine while listening to this piece?</li>
                    <li>How do you feel while listening to this piece?</li>
                    <li>What techniques did the composer use to create the characters and mood?</li>
                </ul>

                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/zTxiaqvCThg?si=rOOARao1JKxYndUN" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>

                <p className="quote">
                    Who rides so late through the cold, dark night?
                    A father is hurrying home, and his young son is with him.
                </p>
                <p>The father urges his horse forward. He holds his sick child in his arms. Their road cuts through a forest at night; the boy is feverish, weak, and terrified. He tells his father that he sees the Erlking, who wants to take him away. The father tries to calm him, explaining that these are only the sounds of the forest: the rustling leaves, the creaking branches, the howling wind. But the boy hears the king’s voice more and more clearly. The Elf King’s whisper—gentle and tempting at first—slowly turns into threats, driving the child into panic and horror. At last, the father reaches home.
                </p>

                <img src={erlking} className="article-image"/>

                <p>Erlkönig (“The Erl-King”) is a ballad by Schubert, written to the poem by Goethe, in which the real and the fantastical are tightly interwoven.</p>
                <p>A <strong> ballad</strong> is a form of folk poetic storytelling — a narrative work often inspired by myths, legends, and old tales. Its action frequently unfolds against a dark, mysterious, or supernatural backdrop.</p>
                <p>In Schubert’s ballad, reality and imagination are inseparable. The piece has four characters — the narrator, the father, the son, and the Erlking — and all of them are sung by a single vocalist. This is extremely challenging for the performer, as each character must be distinguished through vocal range, tone, and rhythmic patterns.
                </p>

                 <img src={erl} className="article-image"/>
                <p>In just four minutes, using only the voice and the piano, Schubert creates an atmosphere of immense tension and eerie fantasy: the dark night, the frantic gallop of the horse, and the feverish visions of the dying child. You can hear the relentless pounding rhythm — octave and chord repetitions in triplets that imitate the horse’s hoofbeats — interrupted by anxious, scale-like surges in the bass. With every desperate plea from the boy, the father pushes the horse harder. We feel his urgency and fear; we wait for them to escape the dreadful forest so that the nightmare will finally end. It seems that once they reach home, the darkness will lift, and the boy’s fever and terror will fade.</p>
                <p>But the father arrives too late. In his arms lies his lifeless child.</p>
                <p className="quote">
                    He reaches his courtyard with toil and with dread,--
                    The child in his arms finds he motionless, dead.
                </p>

              <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/ao8DGnCBApw?si=lDRHTe-K-tEfT-ni"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

            </section>
        </article>
    );
}