import "./Index.css";
import self from "../../assets/self.jpg";
import kid3 from "../../assets/kid3.png";

export default function Article6() {
    return (
        <article class="post">

            <div className="post__header">
                <h1 className="post__title">The Art of Stumbling Forward</h1>
                <div className="post__meta">
                    <img src={self} />
                    <div>
                        <div className="post__author">Iryna Shkuropii</div>
                        <div className="post__byline">Oct 28, 2025</div>
                    </div>
                </div>
            </div>

            <section>
                <img className="article-img" src={kid3} />
                <p>
                    Playing the piano is unlike almost anything most students have ever done. In the beginning, every new pianist struggles. Just as a child learning to walk will stumble and fall, so will a student learning to play the piano. Both require patience, repetition, and the courage to stand up again after every mistake.
                </p>

                <p>
                    Piano playing is both an art and a skill. The skill part is fundamental. You can’t learn it by simply observing or memorising it like in some fields of study. Learning music theory, forming proper fingerings, developing a good sense of touch, coordination, and musicality all take countless attempts—and plenty of mistakes along the way.
                </p>
                <p>
                    Students of piano embark on one of the most rewarding yet demanding human pursuits. When frustration sets in, remember: every student struggles. Crucially, each wrong note simply brings you closer to mastery.
                </p>
                <p>
                    Most people give up because they mistake the first few confusing months for failure. But that’s how learning works. Feeling lost, tired, or discouraged doesn’t mean you’re failing—it means you’re growing. Give yourself time. Don’t rush. And above all, don’t quit yet. Keep going, because you deserve to see what happens when all your effort pays off. Keep going, because you are stronger than you think. Every step forward brings you closer to your goal. The best is yet to come.
                </p>

            </section>

        </article>
    );
}