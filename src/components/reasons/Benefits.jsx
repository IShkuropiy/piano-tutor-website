import React from "react";
import musiceducation from "/src/assets/musiceducation.png";
import musicbook from "/src/assets/musicbook.png";
import note from "/src/assets/note.png";
import "./Benefits.css";

export default function Benefits() {
    return (

        <section className="benefits">
            <div className="benefits-container">
                <h1>So many reasons to start</h1>
                <div className="benefits-card-grid">
                    <div className="benefits-card">
                        <img className="icon"
                            src={musicbook} />
                        <h3 className="benefits-sub">Expand Your Cultural Knowledge</h3>
                        <p className="b-text">Playing the piano is a wonderful way to deepen your cultural knowledge and appreciation for art through exploring diverse music and composers.</p>
                    </div>

                     <div className="benefits-card">
                        <img className="icon"
                            src={musiceducation} />
                        <h3 className="benefits-sub">Boost Your Cognitive Functions</h3>
                        <p className="b-text">
                            Playing the piano enhances brain connectivity and engages both hemispheres, improving focus, problem-solving, and fine motor skills to boost performance and delay cognitive decline.
                        </p>
                    </div>
                    
                    <div className="benefits-card">
                        <img className="icon"
                            src={note} />
                        <h3 className="benefits-sub">Enhance Your Creativity</h3>
                        <p className="b-text">Playing the piano cultivates self-expression and creativity. It's a powerful, non-verbal medium for exploring and conveying emotion that boosts imaginative skills.</p>
                    </div>
                </div>
            </div>

        </section>

    );
}
