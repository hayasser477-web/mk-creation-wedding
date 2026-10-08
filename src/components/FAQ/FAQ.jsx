import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./FAQ.css";

function FAQ() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const pageRef = useRef(null);

  // FAQ items re-générés à chaque changement de langue
  const faqItems = [
    {
      number: "01",
      question: t("faq.q1.question"),
      answer: (
        <>
          {t("faq.q1.answerLine1")}{" "}
          <span className="faq__flag">🇩🇿</span>
          <br />
          {t("faq.q1.answerLine2")}
        </>
      ),
    },
    {
      number: "02",
      question: t("faq.q2.question"),
      answer: (
        <>
          {t("faq.q2.answerPart1")}{" "}
          <span className="faq__flag">🇫🇷</span>, {t("faq.q2.answerPart2")}{" "}
          <span className="faq__flag">🇩🇿</span>, {t("faq.q2.answerPart3")}
        </>
      ),
    },
    {
      number: "03",
      question: t("faq.q3.question"),
      answer: (
        <>
          {t("faq.q3.answerPart1")}{" "}
          <strong>{t("faq.q3.price1")}</strong> {t("faq.q3.and")}{" "}
          <strong>{t("faq.q3.price2")}</strong>.
        </>
      ),
    },
    {
      number: "04",
      question: t("faq.q4.question"),
      answer: (
        <>
          {t("faq.q4.answerLine1")}{" "}
          <span className="faq__flag">🌍</span>
          <br />
          {t("faq.q4.answerLine2")}
        </>
      ),
    },
  ];

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const elements = page.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const toggleQuestion = (index) => {
    setActive((current) => (current === index ? -1 : index));
  };

  return (
    <main ref={pageRef} className="faq-page" id="faq">
      {/* HERO */}
      <section className="faq-hero">
        <div className="faq-hero__noise" />

        <div className="faq-hero__orb faq-hero__orb--one" />
        <div className="faq-hero__orb faq-hero__orb--two" />

        <div className="faq-hero__vertical">
          <span>MK</span>
          <i />
          <span>01</span>
        </div>

        <div className="faq-hero__content">
          <span className="faq-hero__eyebrow" data-reveal>
            {t("faq.hero.eyebrow")}
          </span>

          <h1 data-reveal>
            {t("faq.hero.titleLine1")}
            <br />
            <em>{t("faq.hero.titleLine2")}</em>
          </h1>

          <div className="faq-hero__ornament" data-reveal>
            <span />
            <i>✦</i>
            <span />
          </div>

          <p data-reveal>
            {t("faq.hero.descriptionLine1")}
            <br />
            {t("faq.hero.descriptionLine2")}
          </p>
        </div>

        <div className="faq-hero__bottom">
          <span>FAQ</span>

          <div>
            <span>{t("faq.hero.scroll")}</span>
            <i />
          </div>

          <span>{t("faq.hero.questionsCount")}</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="faq-intro">
        <div className="faq-intro__number" data-reveal>
          04
        </div>

        <div className="faq-intro__content">
          <span data-reveal>{t("faq.intro.eyebrow")}</span>

          <h2 data-reveal>
            {t("faq.intro.titleLine1")}
            <br />
            <em>{t("faq.intro.titleLine2")}</em>
          </h2>

          <p data-reveal>{t("faq.intro.description")}</p>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="faq-list">
        <div className="faq-list__side">
          <span>{t("faq.list.sideLabel")}</span>
          <div />
          <span>MK CREATION WEDDING</span>
        </div>

        <div className="faq-list__items">
          {faqItems.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.number}
                className={`faq-item ${isActive ? "is-active" : ""}`}
                data-reveal
              >
                <button
                  type="button"
                  className="faq-item__trigger"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isActive}
                >
                  <span className="faq-item__number">{item.number}</span>

                  <span className="faq-item__question">{item.question}</span>

                  <span className="faq-item__icon">
                    <span />
                    <span />
                  </span>
                </button>

                <div
                  className="faq-item__answer-wrapper"
                  aria-hidden={!isActive}
                >
                  <div className="faq-item__answer">
                    <span className="faq-item__answer-label">
                      {t("faq.list.answerLabel")}
                    </span>

                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* END STATEMENT */}
      <section className="faq-end">
        <div className="faq-end__line" />

        <span data-reveal>{t("faq.end.eyebrow")}</span>

        <h2 data-reveal>
          {t("faq.end.titleLine1")}
          <br />
          <em>{t("faq.end.titleLine2")}</em>
        </h2>

        <a href="/collection" className="faq-end__button" data-reveal>
          <span>{t("faq.end.button")}</span>
          <i>→</i>
        </a>

        <div className="faq-end__monogram">MK</div>
      </section>
    </main>
  );
}

export default FAQ;