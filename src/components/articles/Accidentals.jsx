import React from "react";
import "./Accidentals.css";

export default function Accidentals() {
  const tempos = [
    { Symbol: "#", Name: "Sharp", Action: "Raises the note by a semitone (half-step)." },
    { Symbol: "♭", Name: "Flat", Action: "Lowers the note by a semitone (half-step)." },
    { Symbol: "♮", Name: "Natural", Action: "Cancels any previous sharp or flat." },
    { Symbol: "𝄪", Name: "Double Sharp", Action: "Raises the note by a whole tone." },
    { Symbol: "♭♭", Name: "Double Flat", Action: "Lowers the note by a whole tone." },
  ];

  return (
    <div className="wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>What it Does</th>
          </tr>
        </thead>
        <tbody>
          {tempos.map((item, index) => (
            <tr key={index}>
              <td><strong>{item.Symbol}</strong></td>
              <td>{item.Name}</td>
              <td>{item.Action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};