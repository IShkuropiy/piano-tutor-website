import { Link } from "react-router-dom";
import "./About.css";

export default function About() {

  return (
    <section id="about" className="about">
      <div className="about-img">
        <img src={'./src/assets/img-about.jpg'} />
        <div className="about-overlay">
          <h1 className="overlay-headline">
            Classical Pianist and tutor
          </h1>
        </div>
      </div>
      <div className="about-content">
        <h5>My Expirience</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim animi nemo, eum iste
          porro esse, similique pariatur eligendi consequatur voluptas delectus veniam alias harum. Nobis
          voluptatum omnis dignissimos perferendis
        </p>

        <h5>My Values</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim animi nemo, eum iste
          porro esse, similique pariatur eligendi consequatur voluptas delectus veniam alias harum. Nobis
          voluptatum omnis dignissimos perferendis
          et blanditiis tempora eveniet nostrum obcaecati magni, modi deserunt, recusandae adipisci
          debitis quos ullam sit minus illum incidunt facilis unde!</p>
        <a href="#contact" className="btn">Ask me a Question</a>
      </div>

    </section>
  );
}