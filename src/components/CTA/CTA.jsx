import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./CTA.css";

function CTA() {
  const { t } = useTranslation();

  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta__glow" />

      <div className="cta__container">
        <div className="cta__header">
          <span className="cta__eyebrow">
            {t("cta.eyebrow")}
          </span>

          <h2 id="cta-title">
            {t("cta.titleLine1")} <br />
            <em>{t("cta.titleEmphasis")}</em>
          </h2>

          <div className="cta__ornament">
            <span />
            <i>✦</i>
            <span />
          </div>
        </div>

        <div className="cta__cards">
          {/* Collection */}
          <div className="cta__card cta__card--collection">
            <div className="cta__card-glow" />

            <div className="cta__card-content">
              <span className="cta__card-tag">
                {t("cta.collection.tag")}
              </span>

              <h3>{t("cta.collection.title")}</h3>

              <p>{t("cta.collection.text")}</p>

              <Link
                to="/collection"
                className="cta__btn cta__btn--primary"
              >
                <span>{t("cta.collection.button")}</span>
                <i className="cta__btn-icon">→</i>
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="cta__card cta__card--contact">
            <div className="cta__card-glow" />

            <div className="cta__card-content">
              <span className="cta__card-tag">
                {t("cta.contact.tag")}
              </span>

              <h3>{t("cta.contact.title")}</h3>

              <p>{t("cta.contact.text")}</p>

              <a
                href="#contact"
                className="cta__btn cta__btn--gold"
                onClick={(e) => {
                  e.preventDefault();

                  const contactElement =
                    document.getElementById("contact");

                  if (contactElement) {
                    contactElement.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <span>{t("cta.contact.button")}</span>
                <i className="cta__btn-icon">↓</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;