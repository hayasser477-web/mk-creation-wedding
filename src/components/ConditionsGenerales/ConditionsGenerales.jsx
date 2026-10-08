import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./ConditionsGenerales.css";

function ConditionsGenerales() {
  const { t } = useTranslation();
  const pageRef = useRef(null);

  const termsArticles = [
    {
      number: "01",
      title: t("cgv.articles.a1.title"),
      content: (
        <>
          {t("cgv.articles.a1.part1")} <strong>MK CREATION WEDDING</strong>{" "}
          {t("cgv.articles.a1.part2")}
        </>
      ),
    },
    {
      number: "02",
      title: t("cgv.articles.a2.title"),
      content: t("cgv.articles.a2.content"),
    },
    {
      number: "03",
      title: t("cgv.articles.a3.title"),
      content: (
        <>
          {t("cgv.articles.a3.part1")} (<b>{t("cgv.articles.a3.curr1")}</b>){" "}
          {t("cgv.articles.a3.part2")} (<b>{t("cgv.articles.a3.curr2")}</b>){" "}
          {t("cgv.articles.a3.part3")}
        </>
      ),
    },
    {
      number: "04",
      title: t("cgv.articles.a4.title"),
      content: (
        <>
          {t("cgv.articles.a4.part1")}{" "}
          <span className="terms__flag">🇩🇿</span> {t("cgv.articles.a4.part2")}{" "}
          <span className="terms__flag">🇫🇷</span> {t("cgv.articles.a4.part3")}{" "}
          <span className="terms__flag">🌍</span>. {t("cgv.articles.a4.part4")}
        </>
      ),
    },
    {
      number: "05",
      title: t("cgv.articles.a5.title"),
      content: (
        <>
          {t("cgv.articles.a5.part1")} <strong>MK CREATION WEDDING</strong>{" "}
          {t("cgv.articles.a5.part2")}
        </>
      ),
    },
    {
      number: "06",
      title: t("cgv.articles.a6.title"),
      content: (
        <>
          {t("cgv.articles.a6.part1")} <strong>MK CREATION WEDDING</strong>.{" "}
          {t("cgv.articles.a6.part2")}
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

  return (
    <main ref={pageRef} className="terms-page" id="cgv">
      {/* HERO */}
      <section className="terms-hero">
        <div className="terms-hero__noise" />
        <div className="terms-hero__orb terms-hero__orb--one" />
        <div className="terms-hero__orb terms-hero__orb--two" />

        <div className="terms-hero__vertical">
          <span>MK</span>
          <i />
          <span>CGV</span>
        </div>

        <div className="terms-hero__content">
          <span className="terms-hero__eyebrow" data-reveal>
            {t("cgv.hero.eyebrow")}
          </span>

          <h1 data-reveal>
            {t("cgv.hero.titleLine1")} <br />
            <em>{t("cgv.hero.titleLine2")}</em>
          </h1>

          <div className="terms-hero__ornament" data-reveal>
            <span />
            <i>✦</i>
            <span />
          </div>

          <p data-reveal>
            {t("cgv.hero.descriptionLine1")}
            <br />
            {t("cgv.hero.descriptionLine2")}
          </p>
        </div>

        <div className="terms-hero__bottom">
          <span>MK WEDDING</span>
          <div>
            <span>{t("cgv.hero.discover")}</span>
            <i />
          </div>
          <span>{t("cgv.hero.articlesCount")}</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="terms-intro">
        <div className="terms-intro__number" data-reveal>
          CGV
        </div>

        <div className="terms-intro__content">
          <span data-reveal>{t("cgv.intro.eyebrow")}</span>

          <h2 data-reveal>
            {t("cgv.intro.titleLine1")} <br />
            <em>{t("cgv.intro.titleLine2")}</em>
          </h2>

          <p data-reveal>{t("cgv.intro.description")}</p>
        </div>
      </section>

      {/* ARTICLES LIST */}
      <section className="terms-list">
        <div className="terms-list__side">
          <span>{t("cgv.list.sideLabel")}</span>
          <div />
          <span>MK CREATION WEDDING</span>
        </div>

        <div className="terms-list__items">
          {termsArticles.map((article) => (
            <article key={article.number} className="terms-item" data-reveal>
              <div className="terms-item__header">
                <span className="terms-item__number">{article.number}</span>
                <h3 className="terms-item__title">{article.title}</h3>
              </div>

              <div className="terms-item__body">
                <p>{article.content}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ConditionsGenerales;