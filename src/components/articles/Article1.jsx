import "./Index.css";
import self from "../../assets/self.jpg";
import keys8 from "../../assets/keys8.jpg";

export default function Article1() {
  return (
    <article class="post">

      <div className="post__header">
        <h1 className="post__title">How to Work at Home</h1>
        <div className="post__meta">
          <img src={self} />
          <div>
            <div className="post__author">Iryna Shkuropii</div>
            <div className="post__byline">Sep 20, 2025</div>
          </div>
        </div>
      </div>

      <section>
          <img className="article-img" src={keys8} />
        <h2>Practice Every Day</h2>
        <p>
          Daily practice is essential. Without it, progress will be slow or may not come at all.
          Music is like a sport: <strong>consistency matters more than intensity</strong>.
        </p>
        <p>
          You don’t need to play for hours without a break. Even 15–20 focused minutes can be
          effective. The key is to practice regularly.
        </p>
      </section>

      <section>
        <h2>Divide, Conquer, and REST</h2>
        <p>Independent practice at home can be divided into three main activities:</p>
        <ul className="tips">
          <li>Technical exercises (scales, arpeggios, chords)</li>
          <li>Learning and analyzing new pieces</li>
          <li>Practicing previously studied pieces</li>
        </ul>

        <p>
          <strong>Choose a gradual approach.</strong> Learn exercises and new pieces gradually: work section by section, hand by hand, and phrase by phrase. Aim to master 2–4 measures before moving forward. This might seem tedious, but it is the most professional and efficient way to master your music piece.
        </p>

        <p>
          <strong>Watch for signs:</strong> if your focus dips or your back/arms feel uncomfortable, it's time to pause. Pushing through when fatigued only wastes effort. Use this time for a short break—get up, move—then return refreshed to better solidify your learning.
        </p>
      </section>

      <section>
        <h2>Organise Your Work</h2>
        <p>A simple homework plan can help. Write down:</p>
        <ul className="tips">
          <li>the date and time</li>
          <li>the length of your practice</li>
          <li>your specific goals, and</li>
          <li>what worked or didn’t work</li>
        </ul>
        <p>These simple tips will help you gain an outside perspective, analyze your learning process, and discover better practices and a more effective style.</p>
      </section>

    </article>
  )
}