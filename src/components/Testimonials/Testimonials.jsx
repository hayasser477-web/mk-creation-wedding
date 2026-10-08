import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Testimonials.css";

import Testimonials1 from "../../assets/images/testimonials.webp";
import Testimonials2 from "../../assets/images/testimonials (2).webp";
import Testimonials3 from "../../assets/images/testimonials (3).webp";
import Testimonials4 from "../../assets/images/testimonials (4).webp";

const testimonials = [
  {
    number: "01",
    image: Testimonials1,
    name: "Sarah",
    location: "Paris",
    occasion: "Mariage",
  },
  {
    number: "02",
    image: Testimonials2,
    name: "Nour",
    location: "Lyon",
    occasion: "Henna",
  },
  {
    number: "03",
    image: Testimonials3,
    name: "Meriem",
    location: "Marseille",
    occasion: "Fiançailles",
  },
  {
    number: "04",
    image: Testimonials4,
    name: "Yasmine",
    location: "Paris",
    occasion: "Soirée",
  },
];

function Testimonials() {
  const { t } = useTranslation();

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [visible, setVisible] = useState(false);

  const current = testimonials[active];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const changeTestimonial = (nextIndex, nextDirection) => {
    setVisible(false);
    setDirection(nextDirection);

    setTimeout(() => {
      setActive(nextIndex);
      setVisible(true);
    }, 450);
  };

  const next = () => {
    const nextIndex =
      active === testimonials.length - 1 ? 0 : active + 1;

    changeTestimonial(nextIndex, 1);
  };

  const previous = () => {
    const previousIndex =
      active === 0 ? testimonials.length - 1 : active - 1;

    changeTestimonial(previousIndex, -1);
  };

  return (
    <section
      className="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="testimonials__glow" />

      <div className="testimonials__top">
        <span className="testimonials__eyebrow">
          {t("testimonials.eyebrow")}
        </span>

        <h2 id="testimonials-title">
          {t("testimonials.titleLine1")}
          <br />
          <em>{t("testimonials.titleEmphasis")}</em>
        </h2>

        <div className="testimonials__ornament">
          <span />
          <i>✦</i>
          <span />
        </div>
      </div>

      <div className="testimonials__stage">
        <div
          className="testimonials__giant-mark testimonials__giant-mark--left"
          aria-hidden="true"
        >
          “
        </div>

        <div
          className={`testimonials__content ${
            visible ? "is-visible" : ""
          } testimonials__content--direction-${direction}`}
        >
          <div className="testimonials__image-container">
            <img
              src={current.image}
              alt={t("testimonials.imageAlt", {
                name: current.name,
                occasion: t(
                  `testimonials.occasions.${current.occasion}`
                ),
              })}
              className="testimonials__image"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="testimonials__number">
            <span>{current.number}</span>
            <div className="testimonials__number-divider" />
            <span>04</span>
          </div>
        </div>

        <div
          className="testimonials__giant-mark testimonials__giant-mark--right"
          aria-hidden="true"
        >
          ”
        </div>

        <div className="testimonials__side">
          <span>{t("testimonials.side")}</span>
          <div className="testimonials__side-line" />
        </div>
      </div>

      <div className="testimonials__controls">
        <div className="testimonials__progress">
          {testimonials.map((item, index) => (
            <button
              type="button"
              key={item.number}
              onClick={() =>
                changeTestimonial(
                  index,
                  index > active ? 1 : -1
                )
              }
              className={index === active ? "is-active" : ""}
              aria-label={t("testimonials.pagination", {
                number: index + 1,
              })}
            >
              <span>{item.number}</span>
            </button>
          ))}
        </div>

        <div className="testimonials__arrows">
          <button
            type="button"
            onClick={previous}
            aria-label={t("testimonials.previous")}
          >
            <span>←</span>
          </button>

          <button
            type="button"
            onClick={next}
            aria-label={t("testimonials.next")}
          >
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;