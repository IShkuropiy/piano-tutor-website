import React from "react";
import "./Tables.css";

export default function DynamicsTable() {
  const dynamics = [
    { term: "forte", abbr: "(f)", meaning: "loud, strong" },
    { term: "piano", abbr: "(p)", meaning: "soft, quiet" },
    { term: "mezzo forte", abbr: "(mf)", meaning: "moderately loud" },
    { term: "mezzo piano", abbr: "(mp)", meaning: "moderately quiet" },
    { term: "fortissimo", abbr: "(ff)", meaning: "very loud" },
    { term: "pianissimo", abbr: "(pp)", meaning: "very quiet" },
    { term: "forte-fortissimo ", abbr: "(fff)", meaning: "extremely loud" },
    { term: "piano-pianissimo", abbr: "(ppp)", meaning: "extremely quiet" },
  ];

  return (
    <div className="wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Term</th>
            <th>Abbr</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          {dynamics.map((item, index) => (
            <tr key={index}>
              <td><strong>{item.term}</strong></td>
              <td>{item.abbr}</td>
              <td>{item.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
