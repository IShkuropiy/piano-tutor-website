import React from "react";
import bell from "/src/assets/bell.png";
import pianokeys from "/src/assets/pianokeys.png";
import musicnotes from "/src/assets/musicnotes.png";
import "./Index.css";

export default function Lessons() {

    return (
         <section className="benefits">
                    <div className="benefits-container">
                        <h1>Personalized piano lessons for every age, every stage</h1>
                        <div className="benefits-card-grid">
                            <div className="benefits-card">
                                <img className="icon"
                                    src={pianokeys} />
                                <h3 className="benefits-sub">Flexible</h3>
                                <p className="b-text">
                                    Enjoy the convenience of a flexible lesson schedule designed to fit your busy life.
                                </p>
                            </div>
        
                             <div className="benefits-card">
                                <img className="icon"
                                    src={musicnotes} />
                                <h3 className="benefits-sub">Personalized</h3>
                                <p className="b-text">
                                   Each lesson program is adapted and tailored specifically to the individual student's goals and needs 
                                </p>
                            </div>
                            
                            <div className="benefits-card">
                                <img className="icon"
                                    src={bell} />
                                <h3 className="benefits-sub">Comprehensive</h3>
                                <p className="b-text">
                                    Comprehensive training for all skill levels: engaging lessons for beginners and advanced instruction for experienced musicians.
                                </p>
                            </div>
                        </div>
                    </div>
        
                </section>

    );
}