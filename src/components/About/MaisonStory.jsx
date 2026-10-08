import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./MaisonStory.css";

const chapters = [
  {
    number: "01",
    letter: "M",
    label: "maison.chapter1.label",
    title: "maison.chapter1.title",
    text: "maison.chapter1.text",
  },
  {
    number: "02",
    letter: "K",
    label: "maison.chapter2.label",
    title: "maison.chapter2.title",
    text: "maison.chapter2.text",
  },
  {
    number: "03",
    letter: "C",
    label: "maison.chapter3.label",
    title: "maison.chapter3.title",
    text: "maison.chapter3.text",
  },
  {
    number: "04",
    letter: "W",
    label: "maison.chapter4.label",
    title: "maison.chapter4.title",
    text: "maison.chapter4.text",
  },
];

function MaisonStory() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const items = section.querySelectorAll(".maison-story__chapter");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="maison-story"
      id="la-maison"
      aria-labelledby="maison-story-title"
    >
      <div className="maison-story__intro">
        <span className="maison-story__eyebrow">
          {t("maison.eyebrow")}
        </span>

        <h2 id="maison-story-title">
          {t("maison.titleLine1")}
          <br />
          <em>{t("maison.titleEmphasis")}</em>
        </h2>
      </div>

      <div className="maison-story__chapters">
        {chapters.map((chapter) => (
          <article
            className="maison-story__chapter"
            key={chapter.number}
          >
            <div className="maison-story__chapter-number">
              {chapter.number}
            </div>

            <div className="maison-story__content">
              <span className="maison-story__label">
                {t(chapter.label)}
              </span>

              <h3>
                {t(chapter.title).split("|").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index === 0 && <br />}
                  </span>
                ))}
              </h3>

              <p>{t(chapter.text)}</p>

              <div className="maison-story__line" />
            </div>

            <div
              className="maison-story__letter"
              aria-hidden="true"
            >
              {chapter.letter}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MaisonStory;