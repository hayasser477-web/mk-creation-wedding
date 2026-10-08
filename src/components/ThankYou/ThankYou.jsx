import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ThankYou.css";

function ThankYou() {
  const { t } = useTranslation();

  return (
    <div className="thankyou-page">
      <Navbar cartCount={0} />

      <main className="thankyou-main">
        <section className="thankyou-card">
          <div className="thankyou-card__ornament">
            <span />
            <div className="thankyou-card__mark">MK</div>
            <span />
          </div>

          <div className="thankyou-card__eyebrow">
            {t("thankYou.eyebrow")}
          </div>

          <div className="thankyou-card__check">
            <span>✓</span>
          </div>

          <h1>
            {t("thankYou.titleLine1")}
            <br />
            <em>{t("thankYou.titleEmphasis")}</em>
          </h1>

          <p>
            {t("thankYou.description")}
          </p>

          <div className="thankyou-card__note">
            <span className="thankyou-card__note-line" />
            <p>{t("thankYou.note")}</p>
            <span className="thankyou-card__note-line" />
          </div>

          <Link to="/" className="thankyou-card__button">
            <span>{t("thankYou.backHome")}</span>
            <i>→</i>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ThankYou;