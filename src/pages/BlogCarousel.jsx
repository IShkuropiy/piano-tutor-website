import { useMemo, useState } from "react";

export default function BlogCarousel({ title, items }) {
    const VISIBLE = 3;

    const maxIndex = useMemo(
        () => Math.max(0, items.length - VISIBLE),
        [items.length]
    );

    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => Math.max(0, i - 1));
    const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

    return (
        <section className="row">
            <div className="row__top">
                <h2 className="row__title">{title}</h2>

                <div className="row__controls">
                    <button type="button" className="row__btn" onClick={prev} disabled={index === 0} aria-label="Previous">
                        ‹
                    </button>
                    <button type="button" className="row__btn" onClick={next} disabled={index === maxIndex} aria-label="Next">
                        ›
                    </button>
                </div>
            </div>

            <div className="row__viewport">
                <div
                    className="row__track"
                    style={{ transform: `translateX(calc(-${index} * (100% / 3)))` }}
                >
                    {items.map((card) => (
                        <a key={card.id} className="card" href={card.href}>
                            <div className="card-img">
                                <img src={card.img} />
                            </div>

                            <div className="card__body">
                                <p className="blog-eyebrow">{card.eyebrow}</p>
                                <h3 className="card-title">{card.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}