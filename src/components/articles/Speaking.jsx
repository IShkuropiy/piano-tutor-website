import React from "react";
import "./Tables.css";

export default function Speaking() {
  const dynamics = [
    { dynamic: "Pianissimo (pp)", level: "Whispering", meaning: "Sharing a secret!" },
    { dynamic: "Mezzo Forte (mf)", level: "Normal Talking", meaning: "Everyday conversations" },
    { dynamic: "Crescendo (Gradually Louder)", level: "Getting Excited", meaning: "Eagerness and joy in sharing the news" },
    { dynamic: "Fortissimo (ff)", level: "Shouting", meaning: "An argument or cheering at a game" },
  ];

  return (
    <div className="wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Dynamic</th>
            <th>Speaking Level</th>
            <th>What It Feels Like</th>
          </tr>
        </thead>
        <tbody>
          {dynamics.map((item, index) => (
            <tr key={index}>
              <td><strong>{item.dynamic}</strong></td>
              <td>{item.level}</td>
              <td>{item.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};