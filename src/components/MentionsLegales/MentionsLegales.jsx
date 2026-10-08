import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./MentionsLegales.css";

function MentionsLegales() {
  const { t } = useTranslation();
  const pageRef = useRef(null);

  const legalSections = [
    {
      number: "01",
      tag: t("legal.sections.s1.tag"),
      title: t("legal.sections.s1.title"),
      content: (
        <>
          {t("legal.sections.s1.part1")}
          <br />
          <br />
          {t("legal.sections.s1.part2")}
        </>
      ),
    },
    {
      number: "02",
      tag: t("legal.sections.s2.tag"),
      title: t("legal.sections.s2.title"),
      content: (
        <>
          {t("legal.sections.s2.part1")}
          <br />
          <br />
          {t("legal.sections.s2.part2")}
        </>
      ),
    },
    {
      number: "03",
      tag: t("legal.sections.s3.tag"),
      title: t("legal.sections.s3.title"),
      content: (
        <>
          {t("legal.sections.s3.part1")}
          <br />
          <br />
          {t("legal.sections.s3.part2")}
        </>
      ),
    },
    {
      number: "04",
      tag: t("legal.sections.s4.tag"),
      title: t("legal.sections.s4.title"),
      content: (
        <>
          {t("legal.sections.s4.part1")}
          <br />
          <br />
          {t("legal.sections.s4.part2")}
          <br />
          <br />
          {t("legal.sections.s4.part3")}
        </>
      ),
    },
    {
      number: "05",
      tag: t("legal.sections.s5.tag"),
      title: t("legal.sections.s5.title"),
      content: (
        <>
          {t("legal.sections.s5.part1")}
          <br />
          <br />
          {t("legal.sections.s5.part2")}
          <br />
          <br />
          {t("legal.sections.s5.part3")}
          <br />
          <br />
          {t("legal.sections.s5.part4")}
        </>
      ),
    },
    {
      number: "06",
      tag: t("legal.sections.s6.tag"),
      title: t("legal.sections.s6.title"),
      content: (
        <>
          {t("legal.sections.s6.part1")}
          <br />
          <br />
          {t("legal.sections.s6.part2")}
        </>
      ),
    },
    {
      number: "07",
      tag: t("legal.sections.s7.tag"),
      title: t("legal.sections.s7.title"),
      content: (
        <>
          {t("legal.sections.s7.part1")}
          <br />
          <br />
          {t("legal.sections.s7.part2")}
          <br />
          <br />
          {t("legal.sections.s7.part3")}
          <br />
          <br />
          {t("legal.sections.s7.part4")}
        </>
      ),
    },
    {
      number: "08",
      tag: t("legal.sections.s8.tag"),
      title: t("legal.sections.s8.title"),
      content: (
        <>
          {t("legal.sections.s8.part1")}
          <br />
          <br />
          {t("legal.sections.s8.part2")}
        </>
      ),
    },
    {
      number: "09",
      tag: t("legal.sections.s9.tag"),
      title: t("legal.sections.s9.title"),
      content: (
        <>
          {t("legal.sections.s9.part1")}
          <br />
          <br />
          {t("legal.sections.s9.part2")}
        </>
      ),
    },
    {
      number: "10",
      tag: t("legal.sections.s10.tag"),
      title: t("legal.sections.s10.title"),
      content: t("legal.sections.s10.content"),
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
    <main ref={pageRef} className="legal-page" id="mentions-legales">
      {/* HERO */}
      <section className="legal-hero">
        <div className="legal-hero__noise" />
        <div className="legal-hero__orb legal-hero__orb--one" />
        <div className="legal-hero__orb legal-hero__orb--two" />

        <div className="legal-hero__vertical">
          <span>MK CREATION WEDDING</span>
          <i />
          <span>INFORMATIONS</span>
        </div>

        <div className="legal-hero__content">
          <span className="legal-hero__eyebrow" data-reveal id="hello">
            {t("legal.hero.eyebrow")}
          </span>

          <h1 data-reveal>
            {t("legal.hero.titleLine1")} <br />
            <em>{t("legal.hero.titleLine2")}</em>
          </h1>

          <div className="legal-hero__ornament" data-reveal>
            <span />
            <i>✦</i>
            <span />
          </div>

          <p data-reveal>
            {t("legal.hero.discover")}
            <br />
            ↓
          </p>
        </div>

        <div className="legal-hero__bottom">
          <span>MK CREATION WEDDING</span>
          <div>
            <span>{t("legal.hero.infoReg")}</span>
            <i />
          </div>
          <span>{t("legal.hero.articlesCount")}</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="legal-intro">
        <div className="legal-intro__number" data-reveal>
          00
        </div>

        <div className="legal-intro__content">
          <span data-reveal>{t("legal.intro.eyebrow")}</span>

          <h2 data-reveal>
            {t("legal.intro.titleLine1")} <br />
            <em>{t("legal.intro.titleLine2")}</em>
          </h2>

          <p data-reveal>{t("legal.intro.description")}</p>
        </div>
      </section>

      {/* ARTICLES LIST */}
      <section className="legal-list">
        <div className="legal-list__side">
          <span>{t("legal.list.sideLabel")}</span>
          <div />
          <span>MK CREATION WEDDING</span>
        </div>

        <div className="legal-list__items">
          {legalSections.map((section) => (
            <article key={section.number} className="legal-item" data-reveal>
              <div className="legal-item__header">
                <span className="legal-item__number">{section.number}</span>
                <div>
                  <span className="legal-item__tag">{section.tag}</span>
                  <h3 className="legal-item__title">{section.title}</h3>
                </div>
              </div>

              <div className="legal-item__body">
                <p>{section.content}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MentionsLegales;