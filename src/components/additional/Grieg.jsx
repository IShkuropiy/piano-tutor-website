import React from "react";
import './Index.css'
import self from "../../assets/self.jpg";
import ibsen from "../../assets/ibsen.png";

export default function Grieg() {
    return (

        <article className="post">
            <div className="post__header">
                <h1 className="post_title">Peer Gynt</h1>
                <div className="post__meta">
                    <img src={self} />
                    <div>
                        <div className="post__author">Iryna Shkuropii</div>
                        <div className="post__byline">Dec 9, 2025</div>
                    </div>
                </div>
            </div>

            <section>

                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/bEiqRETWb6Q?si=LTG-mc5smtdIQIVw" title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen></iframe>
                </div>

                <p>Edvard Grieg composed the Peer Gynt musical suite in 1867, based on Henrik Ibsen’s drama of the same title. Originally, the score included twenty-three musical numbers, but after, he chose the best parts and turned them into two suites with nine pieces in total.</p>
                <p><strong>Suite</strong> is a musical composition consisting of several movements or pieces, often with a common theme or key.</p>

                <img src={ibsen} className="article-image" />

                <p>In his play, Ibsen used elements of Norwegian folk tales but infused them with a new, modern spirit. At the center of his drama lies the rebellion of an individual against the social constraints that bind and shape human life. At the same time, Peer Gynt is a story of egoism and self-absorption—traits that ultimately lead the hero into conflict with reality. Grieg did not focus on the social problems in Norway like Ibsen did. Instead, he created a musical world filled with lyrical landscapes, fairy-tale imagery, and genre scenes.</p>

                <h2>The story of Peer Gynt</h2>

                <p>Peer Gynt is a young man who gets kicked out of his village for seducing and abandoning another man’s bride. He travels far away, visiting strange and magical places. After many years of travel, once a wealthy adventurer but now having lost everything, Peer returns home as an old man. Despite all the unbelievable adventures, he ends up exactly where he began. Exhausted, with a conscience burdened by his misdeeds, the impoverished old Peer Gynt returns home to die in Solveig’s arms. She has waited for him all these years. Her unwavering spiritual strength awakens in Peer a profound realization of a life wasted thoughtlessly and without purpose, and of a lost sense of self:</p>

                <div className="quote">
                    <p>She preserved what he squandered…
                        Oh, if only one could begin life again…
                    </p>
                </div>

                <p>Peer Gynt is a young man with a boundless imagination and a relentless craving for adventure. He is brave and charming, yet lacks the inner integrity so typical of the ancient heroes of Scandinavia. Peer does not care where he goes, and he easily sets off onto unknown paths. He does not care who he becomes, and so he is ready to be a troll among trolls, a slave-trader among slave-traders, or a monkey among monkeys—so long as these transformations are not permanent. In the end, he becomes an unlucky man who never finds his true self, trapped in a mysterious loop that forces him to circle endlessly, unable to follow his own path. Having completed the full journey of his life, he finds himself back at the very place where he started.</p>

                <hr />

                <h2>Grieg: <span>Peer Gynt</span> Suite No. 1 - Program Notes</h2>

                <p>The first suite opens with <strong>“Morning Mood”</strong>, a tranquil melody that flows with the serenity of a mountain stream. The flute and oboe gently alternate, establishing a peaceful, pastoral atmosphere. The central section swells as the strings, and then the full orchestra, enter with a rich and bright texture, as if the sun's rays are suddenly flooding the entire valley.</p>

                <p> <strong>“The Death of Åse”</strong> is a concentrated miniature of immense dramatic power. This restrained piece for strings is written in the solemn, austere, and laconic character of a funeral march, conveying deep grief through its focused, almost desolate tone.
                </p>
                <p><strong>“Anitra’s Dance”</strong> provides a sharp, almost mocking contrast to the previous mournful scene. The sheikh’s daughter dances for Peer, accompanied by graceful string writing. Flexible melodic lines and colorful orchestration vividly paint an image of seductive yet treacherous beauty.</p>

                <p><strong>"In the Hall of the Mountain King".</strong>
                    The Dovre King—ruler of trolls, kobolds, goblins, and witches—offers Peer his daughter's hand but demands he adopt the troll's life: never leaving the forest, wearing a tail, and drinking foul, fermented mead. Peer reluctantly agrees, but finds the palace grotesque, crooked, and moss-covered; even the troll princess is hideous. The King explains this ugliness is merely a flaw of human perception. He offers Peer an operation to distort his sight so that he will see black as white and the hideous as beautiful—the true troll worldview. Peer, though seeking power and glory, refuses to sacrifice his humanity. The trolls attack, but are repelled by the sound of a distant church bell, allowing Peer to escape.
                </p>

                <p>The musical theme begins almost inaudibly, approaching from a distance, and gradually grows in strength. The simple, almost primitive melody bears a striking resemblance to a Scottish folk tune—one Grieg may have known through his father's Scottish heritage. The theme subtly echoes the previous movement, suggesting the girl Peer meets in the desert is another embodiment of the forest's magic (in the play, Anitra’s scene immediately follows Peer’s adventures with the Dovre King).</p>

                <p>The march grows relentlessly fuller and more powerful, finally utilizing the orchestra at its maximum force. The music swells like a terrifying avalanche, becoming not humorous, but elemental and demonic. Grieg masterfully unfolds the scene: from the mysterious, subdued bass statements of the theme (pp), rising steadily in dynamics and register, to its brilliant, thunderous culmination.</p>

                <hr />
                
                 <h2>Grieg: <span>Peer Gynt</span> Suite No. 2 - Program Notes</h2>

                <p><strong>"Ingrid's Lament"</strong> is a song tells a story of sadness and anger. It begins with a super fast and wild part called allegro furioso. Then, the violins and other string instruments play a very sad and beautiful melody. This is Ingrid's Lament (her cry). She is the bride who was kidnapped and then left alone by Peer Gynt. The music ends just like it began—with a sudden burst of wild, fast energy!</p>

                <p><strong>"Arabian Dance"</strong> is a fun, made-up tune that sounds like it's from the Arabian Desert where Peer Gynt is having his adventures.</p>

                <p><strong>"Peer Gynt's Homecoming": </strong>You can hear the crashing waves and wind! The orchestra uses loud, trumpet-like calls and the strings make a shivering sound (called tremolo) to sound like the ship being tossed around. It's not just a storm! The wild, changing music shows Peer Gynt's life is a big mess, spiraling out of control.</p>

                <p><strong>"Solveig's Song"</strong> is the very last song in the suite and is the opposite of the storm—it is peaceful and very tender. The tune is beautiful and comes from the lovely folk songs of Norway and Sweden. The way the rhythm jumps (a little skip called a dotted rhythm) is very typical of Norwegian music. This song is about Solveig, the woman who waited patiently for Peer Gynt to come home.</p>

            </section>
        </article>
    );
}