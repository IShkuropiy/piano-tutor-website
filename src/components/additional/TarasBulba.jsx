import React from "react";
import './Index.css'
import self from "../../assets/self.jpg";
import taras from "../../assets/taras.png";

export default function TarasBulba() {
    return (

        <article className="post">
            <div className="post__header">
                <h1 className="post_title">Taras Bulba</h1>
                <div className="post__meta">
                    <img src={self} />
                    <div>
                        <div className="post__author">Iryna Shkuropii</div>
                        <div className="post__byline">Dec 10, 2025</div>
                    </div>
                </div>
            </div>

            <section>
                <p>Before reading the material below, listen to the music carefully and think about these questions:</p>
                <ul className="questions">
                    <li>What do you imagine while listening to this piece? What picture or story comes to your mind?</li>
                    <li>How would you describe this music?</li>
                    <li>Do you hear how the main theme changes? Which instruments carry the lead at different moments?</li>
                </ul>

                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/8IIgW59A_88?si=0gHFPGW_cpzyjMF_" title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>

                <p>Taras Bulba is a four-act opera by the Ukrainian composer Mykola Lysenko. We will, however, focus only on the overture today.</p>
                <p>An <strong>overture</strong> is like the musical “opening scene” of an opera or ballet. It gives us the first feeling of the story — its mood, energy, and main idea.</p>

                <p>The overture to the opera “Taras Bulba” is full of brave, dramatic music. The composer used real Ukrainian folk tunes and Cossack songs to show courage, adventure, and the spirit of the past.
                </p>
                <p>The opera tells the story of the Ukrainian people fighting for their freedom in the 1650s. The main hero is Taras Bulba, a strong Cossack leader, and his two sons, Ostap and Andrii. They join the Cossack army to stand against the Polish forces.
                    But then something unexpected happens: Andrii falls in love with a girl from the enemy’s side, the daughter of a Polish nobleman. His love makes him choose the polish side, and he betrays his father. This brings a tragic and powerful moment to the story.</p>
                <p>The overture shows all these emotions through music.
                    At first, it sounds grand and majestic — like the beginning of a huge adventure.
                    Then the music becomes tense and dramatic, as if calling the warriors to battle.
                    You will hear exciting changes: a heroic theme, then a gentle, song-like melody, and then a return to fast, fiery, powerful music.</p>
                <p>These musical contrasts show the big conflict of the story:
                    the love for one’s homeland vs. the love for another person,
                    a father’s feelings vs. loyalty to the country,
                    and the struggle between calm, peaceful moments and the storm of battle,  and, above all, the fierce battle you wage for freedom. </p>

                    <img src={taras} className="article-image"/>

            </section>
        </article>
    );
}