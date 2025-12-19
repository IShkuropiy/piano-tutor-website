import { Link } from "react-router-dom";
import { useRef } from 'react';

const pieces = [
  {
    title: "Scheherazade",
    to: "/additional/Rimskiy",
    desc: "... He wrote Scheherazade in 1888, inspired by the world of One Thousand and One Nights. This collection of Middle Eastern tales — shaped by Indian, Persian, and Arabic folklore — revolves around the stern Sultan Shahryar and his wise, quick-witted wife, Scheherazade.",
    src: "https://www.youtube.com/embed/zY4w4_W30aQ?si=0ofqOtPEdqj9lfnU",
  },
  {
    title: "Peer Gynt",
    to: "/additional/Grieg",
    desc: "Edvard Grieg composed the Peer Gynt musical suite in 1867, based on Henrik Ibsen’s drama of the same title. Originally, the score included twenty-three musical numbers, but after, he chose the best parts and turned them into two suites with nine pieces in total.",
    src: "https://www.youtube.com/embed/bEiqRETWb6Q?si=LTG-mc5smtdIQIVw",
  },
  {
    title: "The Carnival of the Animals",
    to: "/additional/SaintSaens",
    desc: "“The Carnival of the Animals” (Le Carnaval des animaux) is a “grand zoological fantasy” by the French composer Camille Saint-Saëns (1886), written for orchestra and two pianos.",
    src: "https://www.youtube.com/embed/zwe4k6HaiYo?si=iHQiXDnk84f2bXcs",
  },
  {
    title: "Erlkönig (The Erl-King)",
    to: "/additional/Erlkönig",
    desc: " Who rides so late through the cold, dark night? A father is hurrying home, and his young son is with him.",
    src: "https://www.youtube.com/embed/zTxiaqvCThg?si=rOOARao1JKxYndUN",
  },
  {
    title: "Taras Bulba",
    to: "/additional/TarasBulba",
    desc: "Taras Bulba is a four-act opera by the Ukrainian composer Mykola Lysenko. We will, however, focus only on the overture today.",
    src: "https://www.youtube.com/embed/8IIgW59A_88?si=0gHFPGW_cpzyjMF_",
  },
  {
    title: "The Circus",
    to: "/additional/Turina",
    desc: "Joaquín Turina wrote his children’s piano cycle in 1931. It consists of six miniature pieces, each one portraying a different circus act. As in much of his music, Turina infuses these pieces with unmistakable Spanish colors, and the spirit and folklore of his native Andalusia. His writing is vivid, richly detailed, and instantly recognizable; it stands apart from that of any other composer of his time.",
    src: "https://www.youtube.com/embed/SzTAKMbx4rU?si=QNR97Mv9KHyL4_Dn",
  },
];

function FeatureRow({ title, to, desc, src, reverse = false }) {
  return (
    <section className={`feature-row ${reverse ? "reverse" : ""}`}>
      <div className="media">
        <iframe
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="feature-text">
        <h2 className="feature-title">
          <Link to={to}>{title}</Link>
        </h2>

        <p className="feature-desc">{desc}</p>

        <Link to={to} className="feature-link">
          Read more
        </Link>
      </div>
    </section>
  );
}

export default function MusicPage() {
  return (
    <main className="music-page">
      <header className="page-header">
        <h1>The Wonderful World of Music</h1>
        <p>
          Listen, imagine, and explore! These hand-picked pieces will help you discover new sounds, stories, and musical adventures.
        </p>
      </header>

      <div className="feature-list">
        {pieces.map((p, i) => (
          <FeatureRow key={p.title} {...p} reverse={i % 2 === 1} />
        ))}
      </div>
    </main>
  );
}