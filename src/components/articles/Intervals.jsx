import React from "react";
import "./Tables.css";

export default function Intervals() {
  const dynamics = [
    { steps: "1 step", name: "Prime"},
    { steps: "2 steps", name: "Second"},
    { steps: "3 steps", name: "Third"},
    { steps: "4 steps", name: "Fourth"},
    { steps: "5 steps", name: "Fifth"},
    { steps: "6 steps", name: "Sixth"},
    { steps: "7 steps", name: "Seventh"},
    { steps: "8 steps", name: "Octave"},
  ];

  return (
    <div className="wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Steps</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {dynamics.map((item, index) => (
            <tr key={index}>
              <td><strong>{item.steps}</strong></td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
