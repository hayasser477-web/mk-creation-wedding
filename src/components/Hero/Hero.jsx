import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";

import heroImg1 from "../../assets/images/hero.webp";
import heroImg2 from "../../assets/images/hero (2).webp";
import heroImg3 from "../../assets/images/hero (3).webp";
import heroImg4 from "../../assets/images/hero (4).webp";
import heroImg5 from "../../assets/images/hero (5).webp";
import heroImg6 from "../../assets/images/hero (6).webp";
import heroImg7 from "../../assets/images/hero (7).webp";

const images = [
  heroImg7,
  heroImg1,
  heroImg2,
  heroImg3,
  heroImg4,
  heroImg5,
  heroImg6,
];

const Hero = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % images.length);
        setIsTransitioning(false);
      }, 1250);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    return (index - activeIndex + images.length) % images.length;
  };

  const backgroundImage = images[activeIndex];

  return (
    <section className="hero" id="hero">
      {/* BACKGROUND IMAGE */}
      <div
        className={`hero-background ${
          isTransitioning ? "hero-background--transition" : ""
        }`}
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
      >
        <div className="hero-background__overlay" />
        <div className="hero-background__glow" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow"></span>

          <h1>
            {t("hero.titleLine1")}
            <br />
            <em>{t("hero.titleEmphasis")}</em>
          </h1>

          <p>{t("hero.description")}</p>

          <a href="/collection" className="hero__link">
            {t("hero.link")}
            <span>↗</span>
          </a>
        </div>

        <div className="hero__visual">
          <div
            className={`hero__stack ${
              isTransitioning ? "hero__stack--transitioning" : ""
            }`}
          >
            {images.map((image, index) => {
              const position = getPosition(index);

              return (
                <div
                  key={index}
                  className={`hero-card hero-card--${position}`}
                >
                  <img
                    src={image}
                    alt={`${t("hero.imageAlt", "Création MK")} ${index + 1}`}
                    draggable="false"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                  />
                </div>
              );
            })}
          </div>

          <div className="hero__brand">
            <span>MK</span>
            <small>CRÉATION</small>
          </div>

          <div className="hero__scroll">
            <span>{t("hero.scroll", "SCROLL")}</span>
            <i />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;