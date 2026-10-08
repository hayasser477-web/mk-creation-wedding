import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add("is-visible");
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // دالة ذكية للتعامل مع الأقسام والانتقال إليها من أي صفحة في الموقع
  const handleHashNav = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer ref={footerRef} className="luxury-footer" id="contact">
      <div className="luxury-footer__grain" />

      <div className="luxury-footer__top-line">
        <span>MK CREATION WEDDING</span>
        <span>{t("footer.topLineMaison")}</span>
      </div>

      <div className="luxury-footer__hero">
        <div className="luxury-footer__halo" />

        <div className="luxury-footer__monogram">
          <span>MK</span>
        </div>

        <div className="luxury-footer__brand">
          <span className="luxury-footer__small">
            {t("footer.topLineMaison")}
          </span>

          <h2>
            MK CREATION
            <br />
            <em>WEDDING</em>
          </h2>

          <div className="luxury-footer__ornament">
            <span />
            <i>✦</i>
            <span />
          </div>

          <p>
            {t("footer.sloganLine1")}
            <br />
            {t("footer.sloganLine2")}
          </p>
        </div>
      </div>

      <div className="luxury-footer__navigation">
        {/* LA MAISON */}
        <div className="luxury-footer__column">
          <span className="luxury-footer__label">
            {t("footer.sections.laMaison")}
          </span>

          <a href="#hero" onClick={(e) => handleHashNav(e, "hero")}>
            {t("footer.links.home")}
          </a>

          <a href="#mariage-page" onClick={(e) => handleHashNav(e, "mariage-page")}>
            {t("footer.links.weddingEvents")}
          </a>

          <Link to="/collection">{t("footer.links.collection")}</Link>

          <a href="#la-maison" onClick={(e) => handleHashNav(e, "la-maison")}>
            {t("footer.links.ourHouse")}
          </a>
        </div>

        {/* ASSISTANCE */}
        <div className="luxury-footer__column">
          <span className="luxury-footer__label">
            {t("footer.sections.assistance")}
          </span>

          <Link to="/faq">{t("footer.links.faq")}</Link>
        </div>

        {/* INFORMATIONS */}
        <div className="luxury-footer__column">
          <span className="luxury-footer__label">
            {t("footer.sections.informations")}
          </span>

          <Link to="/cgv">{t("footer.links.terms")}</Link>

          <Link to="/PolitiqueConfidentialite">{t("footer.links.privacy")}</Link>

          <Link to="/mentions-legales">{t("footer.links.legal")}</Link>
        </div>

        {/* SUIVEZ-NOUS */}
        <div className="luxury-footer__column">
          <span className="luxury-footer__label">
            {t("footer.sections.followUs")}
          </span>

          <a
            href="https://www.instagram.com/mk_creations_wedding/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@mk_creation_wedding"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>

          <a href="tel:+33749810668">+33 7 49 81 06 68</a>
        </div>
      </div>

      <div className="luxury-footer__bottom">
        <span>© {new Date().getFullYear()} MK CREATION WEDDING</span>

        <span>{t("footer.madeWithElegance")}</span>

        <span>{t("footer.locations")}</span>

        <button
          type="button"
          className="luxury-footer__back-top"
          onClick={scrollToTop}
          aria-label={t("footer.backToTop")}
        >
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;