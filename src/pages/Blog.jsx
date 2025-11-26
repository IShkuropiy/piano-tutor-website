import { Link } from "react-router-dom";
import "./Blog.css";
import classicalmusic from "/src/assets/classicalmusic.png";
import musics from "/src/assets/musics.png";
import pianist from "/src/assets/pianist.png";
import boy from "/src/assets/boy.jpg";

export default function Blog() {

    return (
       <main className="blog">
      <section className="hero">
        <img className="hero__img"
          src={boy} />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1>Your Path to Piano Mastery starts here </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autem maxime delectus temporibus! Ut ratione ducimus, a voluptate vel beatae sed ea consectetur officia rem.</p>
          <div className="hero__cta">
            <Link to="/sheets" className="btn">Read more</Link>
          </div>
        </div>
      </section>

      <section className="blog-section">

        <div className="blog-inner">
          <h1 className="blog-title">Go beyond the classroom with these curated resources. Dive deeper into topics, practice with new sheet music, and continue your educational journey at your own pace.
        </h1>
        <p className="blog-intro">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab animi fuga fugit nemo nesciunt reiciendis tempore est repellat accusantium quam.</p>

        <div className="blog-grid">

          <article className="blog-card">
              <Link to="/articles/theory/theory" className="b-eyebrow">Music Theory</Link>
             <Link to="/articles/theory/theory"  className="card-title">
              Your source for foundational music theory articles.</Link>
              <Link to="/theory" className="blog-btn">Read more</Link>

            <div className="blog-icon">
              <img src={classicalmusic} />
            </div>
          </article>

           <article className="blog-card">
              <Link to="/articles/theory/practice" className="b-eyebrow">Independent Practice</Link>
              <Link to="/articles/theory/practice"  className="card-title">
                Practical strategies and tips for parents to structure successful, positive piano sessions with their young musician</Link>
              <Link to="/practice" className="blog-btn">Read more</Link>

            <div className="blog-icon">
              <img src={musics} />
            </div>
          </article>

           <article className="blog-card">
              <Link to="/articles/theory/inspire" className="b-eyebrow">Inspire & Archive</Link>
              <Link to="/articles/theory/inspire"  className="card-title">
                Essential guides for parents and students on creating a positive and effective home piano routine.</Link>
              <Link to="/inspire" className="blog-btn">Read more</Link>

            <div className="blog-icon">
              <img src={pianist} />
            </div>
          </article>

           <article className="blog-card">
              <Link to="/articles/theory/theory" className="b-eyebrow">Music Theory</Link>
              <Link to="/articles/theory/theory" className="card-title">
                The Architecture of Sound. </Link>
              <Link to="/theory" className="blog-btn">Read more</Link>

            <div className="blog-icon">
              <img src={classicalmusic} />
            </div>
          </article>

        </div>
        </div>
        
      </section>
    </main>
    );
  }