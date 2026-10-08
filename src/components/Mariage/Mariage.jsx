import { useTranslation } from "react-i18next";
import "./Mariage.css";
import imgMarriage from "../../assets/images/mariage.webp";

function Mariage() {
  const { t } = useTranslation();

  return (
    <main className="mariage-page" id="mariage-page">
      <section className="mariage-hero">
        <div className="mariage-hero__media">
          <img
            src={imgMarriage}
            alt={t("mariage.hero.imageAlt")}
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className="mariage-hero__veil" />

        <div className="mariage-hero__frame" />

        <div className="mariage-hero__content">
          <span className="mariage-hero__eyebrow">
            MK CREATION WEDDING
          </span>

          <h1>
            {t("mariage.hero.titleLine1")}
            <br />
            <em>{t("mariage.hero.titleEmphasis")}</em>
            <br />
            {t("mariage.hero.titleLine3")}
          </h1>

          <p>{t("mariage.hero.occasions")}</p>

          <a
            href="/collection"
            className="mariage-hero__cta"
          >
            <span>{t("mariage.hero.button")}</span>
            <span className="mariage-hero__arrow">→</span>
          </a>
        </div>

        <div className="mariage-hero__scroll">
          <span>{t("mariage.hero.scroll")}</span>
          <i />
        </div>
      </section>

      <section id="occasions" className="mariage-intro">
        <span>{t("mariage.intro.eyebrow")}</span>

        <h2>
          {t("mariage.intro.titleLine1")}
          <br />
          <em>{t("mariage.intro.titleEmphasis")}</em>
        </h2>
      </section>
    </main>
  );
}

export default Mariage;