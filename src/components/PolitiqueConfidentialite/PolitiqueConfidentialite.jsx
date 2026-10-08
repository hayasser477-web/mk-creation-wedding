import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./PolitiqueConfidentialite.css";

function PolitiqueConfidentialite() {
  const { t } = useTranslation();
  const pageRef = useRef(null);

  const privacySections = [
    {
      number: "01",
      title: t("privacy.sections.s1.title"),
      content: (
        <>
          {t("privacy.sections.s1.part1")}{" "}
          <strong>MK CREATION WEDDING</strong>,{" "}
          {t("privacy.sections.s1.part2")}{" "}
          <span className="privacy__flag">🇫🇷</span>{" "}
          {t("privacy.sections.s1.part3")}{" "}
          <span className="privacy__flag">🇩🇿</span>
          {t("privacy.sections.s1.part4")}
        </>
      ),
    },
    {
      number: "02",
      title: t("privacy.sections.s2.title"),
      content: (
        <>
          {t("privacy.sections.s2.part1")}{" "}
          <strong>{t("privacy.sections.s2.bold")}</strong>{" "}
          {t("privacy.sections.s2.part2")}
        </>
      ),
    },
    {
      number: "03",
      title: t("privacy.sections.s3.title"),
      content: t("privacy.sections.s3.content"),
    },
    {
      number: "04",
      title: t("privacy.sections.s4.title"),
      content: t("privacy.sections.s4.content"),
    },
    {
      number: "05",
      title: t("privacy.sections.s5.title"),
      content: t("privacy.sections.s5.content"),
    },
    {
      number: "06",
      title: t("privacy.sections.s6.title"),
      content: t("privacy.sections.s6.content"),
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
    <main ref={pageRef} className="privacy-page" id="confidentialite">
      {/* HERO */}
      <section className="privacy-hero">
        <div className="privacy-hero__noise" />
        <div className="privacy-hero__orb privacy-hero__orb--one" />
        <div className="privacy-hero__orb privacy-hero__orb--two" />

        <div className="privacy-hero__vertical">
          <span>MK</span>
          <i />
          <span>RGPD</span>
        </div>

        <div className="privacy-hero__content">
          <span className="privacy-hero__eyebrow" data-reveal>
            {t("privacy.hero.eyebrow")}
          </span>

          <h1 data-reveal id="title">
            {t("privacy.hero.titleLine1")} <br />
            <em>{t("privacy.hero.titleLine2")}</em>
          </h1>

          <div className="privacy-hero__ornament" data-reveal>
            <span />
            <i>✦</i>
            <span />
          </div>

          <p data-reveal>
            {t("privacy.hero.descriptionLine1")}
            <br />
            {t("privacy.hero.descriptionLine2")}
          </p>
        </div>

        <div className="privacy-hero__bottom">
          <span>MK WEDDING</span>
          <div>
            <span>{t("privacy.hero.discover")}</span>
            <i />
          </div>
          <span>{t("privacy.hero.articlesCount")}</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="privacy-intro">
        <div className="privacy-intro__number" data-reveal>
          RGPD
        </div>

        <div className="privacy-intro__content">
          <span data-reveal>{t("privacy.intro.eyebrow")}</span>

          <h2 data-reveal>
            {t("privacy.intro.titleLine1")} <br />
            <em>{t("privacy.intro.titleLine2")}</em>
          </h2>

          <p data-reveal>{t("privacy.intro.description")}</p>
        </div>
      </section>

      {/* ARTICLES LIST */}
      <section className="privacy-list">
        <div className="privacy-list__side">
          <span>{t("privacy.list.sideLabel")}</span>
          <div />
          <span>MK CREATION WEDDING</span>
        </div>

        <div className="privacy-list__items">
          {privacySections.map((section) => (
            <article key={section.number} className="privacy-item" data-reveal>
              <div className="privacy-item__header">
                <span className="privacy-item__number">{section.number}</span>
                <h3 className="privacy-item__title">{section.title}</h3>
              </div>

              <div className="privacy-item__body">
                <p>{section.content}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PolitiqueConfidentialite;