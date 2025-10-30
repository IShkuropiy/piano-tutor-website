import { Link } from "react-router-dom";
import "./Blog.css";

export default function Blog() {
    return (
        <section id="blog" className="blog">
        <div className="container">
          <h2 className="section-title">Featured articles</h2>

          <div className="card-grid">

            <article className="card">
              <span className="eyebrow">Independent Practice</span>
              <h3 className="card-title">Independent Practice At Home</h3>
              <p className="card-snippet">
                Daily practice is essential. Without it, progress will be slow or may not come at all...
              </p>
              <div className="card-meta">
                <Link to="/blog/article1" className="card-link">Read more</Link>
              </div>
            </article>

            <article className="card">
              <span className="eyebrow">Student's Tips</span>
              <h3 className="card-title">Motivation</h3>
              <p className="card-snippet">
                t’s not motivation that drives action, but action that drives motivation...
              </p>
              <div className="card-meta">
                <a href="#read-3" className="card-link">Read more</a>
              </div>
            </article>

              <article className="card">
              <span className="eyebrow">Inspire And Achieve</span>
              <h3 className="card-title">The Psychological Benefits of Piano Playing</h3>
              <p className="card-snippet">
                Playing the piano is not only an artistic pursuit—it is also a powerful tool for mental well-being...
              </p>
              <div className="card-meta">
                <Link to="/blog/article3" className="card-link">Read more</Link>
              </div>
            </article>

             <article className="card">
              <span className="eyebrow">Independent Practice</span>
              <h3 className="card-title">Effective Strategies for Practicing Music</h3>
              <p className="card-snippet">
               Practice Slowly and Deliberately...
              </p>
              <div className="card-meta">
                <Link to="/blog/article4" className="card-link">Read more</Link>
              </div>
            </article>

              <article className="card">
              <span className="eyebrow">Your Technique</span>
              <h3 className="card-title">Effective Strategies for Practicing Music</h3>
              <p className="card-snippet">
                Practice Slowly and Deliberately...
              </p>
              <div className="card-meta">
                <a href="#practice2" className="card-link">Read more</a>
              </div>
            </article>

            <article className="card">
              <span className="eyebrow">Inspire And Achieve</span>
              <h3 className="card-title">The Art of Stumbling Forward</h3>
              <p className="card-snippet">
                Playing the piano is unlike almost anything most students have ever done. In the beginning, every new pianist struggles
              </p>
              <div className="card-meta">
                <Link to="/blog/article6" className="card-link">Read more</Link>
              </div>
            </article>

            <article className="card">
              <span className="eyebrow">Student's Tips</span>
              <h3 className="card-title">Motivation</h3>
              <p className="card-snippet">
                t’s not motivation that drives action, but action that drives motivation...
              </p>
              <div className="card-meta">
                <a href="#read-3" className="card-link">Read more</a>
              </div>
            </article>

            <article className="card">
              <span className="eyebrow">Music Theory</span>
              <h3 className="card-title">Tempo</h3>
              <p className="card-snippet">
                Tempo is one of the ways musicians bring music to life. Along with rhythm, melody, and harmony, it helps us feel the mood and energy of a piece...
              </p>
              <div className="card-meta">
                <Link to="/blog/article8" className="card-link">Read more</Link>
              </div>
            </article>

            <article className="card">
              <span className="eyebrow">Inspire And Achieve</span>
              <h3 className="card-title">Being a Pianist Is an Honor</h3>
              <p className="card-snippet">
               To be a pianist is more than simply pressing keys—it is a privilege, a discipline, and a journey of personal growth.
              </p>
              <div className="card-meta">
                <Link to="/blog/article9" className="card-link">Read more</Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    )
}