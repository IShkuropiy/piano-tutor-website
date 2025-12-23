import React from "react";
import "./Tables.css";

const TempoTable = () => {
  const tempoData = [
    { term: "Accelerando (accel.)", meaning: "Gradually speeding up" },
    { term: "Allargando", meaning: "Broadening the sound; becoming slower and fuller" },
    { term: "Calando", meaning: "Gradually slowing down and becoming softer" },
    { term: "Doppio movimento / Doppio più mosso", meaning: "Double speed (twice as fast)" },
    { term: "Doppio più lento", meaning: "Half speed (twice as slow)" },
    { term: "Lentando", meaning: "Gradually slowing down and softening" },
    { term: "Meno mosso", meaning: "Less movement; slower" },
    { term: "Meno moto", meaning: "Less motion; slightly slower" },
    { term: "Più mosso", meaning: "More movement; faster" },
    { term: "Mosso", meaning: "With motion; lively and a bit quicker" },
    { term: "Precipitando", meaning: "Hurrying forward; becoming faster" },
    { term: "Rallentando (rall.)", meaning: "Gradually slowing down" },
    { term: "Ritardando (rit.)", meaning: "Gradually slowing down (similar to rallentando)" },
    { term: "Ritenuto", meaning: "Suddenly a little slower; held back" },
    { term: "Rubato", meaning: "Freely adjusting the tempo for expression" },
    { term: "Stringendo", meaning: "Pressing forward; gradually getting faster" },
    { term: "Tardando", meaning: "Gradually slowing down (like ritardando)" },
    { term: "Tempo giusto", meaning: "In strict, steady time" },
    { term: "Tempo primo", meaning: "Return to the original tempo" },
  ];

  return (
    <div className="wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Term</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          {tempoData.map((row, index) => (
            <tr key={index}>
              <td><strong>{row.term}</strong></td>
              <td>{row.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TempoTable;