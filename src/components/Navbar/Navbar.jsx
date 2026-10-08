import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

import logo from "../../assets/images/logo-rbg-preview.webp";
import menuBg from "../../assets/images/navbar.webp";

const languages = [
  {
    code: "fr",
    name: "FR",
    fullName: "Français",
    flag: "https://flagcdn.com/w40/fr.png",
    dir: "ltr",
  },
  {
    code: "en",
    name: "EN",
    fullName: "English",
    flag: "https://flagcdn.com/w40/us.png",
    dir: "ltr",
  },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleSelect = (lang) => {
    i18n.changeLanguage(lang.code);
    localStorage.setItem("language", lang.code);
    document.documentElement.dir = lang.dir;
    document.documentElement.lang = lang.code;
    setIsOpen(false);
  };

  useEffect(() => {
    const currentLang =
      languages.find((lang) => lang.code === i18n.language) || languages[0];
    document.documentElement.dir = currentLang.dir;
    document.documentElement.lang = currentLang.code;
  }, [i18n.language]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="lang-dropdown" ref={dropdownRef}>
      <button
        type="button"
        className="lang-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <img src={currentLanguage.flag} alt={currentLanguage.fullName} className="flag-icon" />
        <span>{currentLanguage.name}</span>
        <span className={`lang-arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <ul className="lang-menu">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={`lang-option ${currentLanguage.code === lang.code ? "active" : ""}`}
              onClick={() => handleSelect(lang)}
            >
              <img src={lang.flag} alt={lang.fullName} className="flag-icon" />
              <span>{lang.fullName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Navbar = ({ cartCount = 0 }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = null;
    const handleScroll = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = documentHeight > 0 ? Math.min((scrollTop / documentHeight) * 100, 100) : 0;
        setScrolled(scrollTop > 30);
        setProgress(currentProgress);
        frameId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // دالة ذكية للتعامل مع الروابط التي تحتوي على Hash (#) لتعمل من أي صفحة
  const handleHashNav = (e, sectionId) => {
    e.preventDefault();
    closeMenu();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={logo} alt="MK Création" width="90" height="90" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar-links" aria-label={t("navbar.mainNavigation")}>
            <Link to="/" onClick={closeMenu}>
              {t("navbar.maison")}
            </Link>

            <Link to="/collection" onClick={closeMenu}>
              {t("navbar.collection")}
            </Link>

            <Link to="/style" onClick={closeMenu}>
              {t("navbar.style")}
            </Link>

            <a href="#mariage-page" onClick={(e) => handleHashNav(e, "mariage-page")}>
              {t("navbar.mariage")}
            </a>

            <a href="#contact" onClick={(e) => handleHashNav(e, "contact")}>
              {t("navbar.contact")}
            </a>
          </nav>

          {/* Actions */}
          <div className="navbar-actions">
            <LanguageSelector />

            <Link
              to="/cart"
              className="navbar-cart"
              aria-label={`${t("navbar.cart")}, ${cartCount} ${t("navbar.items")}`}
            >
              <span className="cart-icon">🛒</span>
              <span className="cart-label">{t("navbar.cart")}</span>
              <span className="cart-count">{cartCount}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`menu-button ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>

        {/* Scroll Progress */}
        <div className="navbar-progress-track" aria-hidden="true">
          <span
            className="navbar-progress"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-background" style={{ backgroundImage: `url(${menuBg})` }} />
        <div className="mobile-menu-overlay" />

        <nav className="mobile-menu-links" aria-label={t("navbar.mobileNavigation")}>
          <Link to="/" onClick={closeMenu}>
            {t("navbar.maison")}
          </Link>

          <Link to="/collection" onClick={closeMenu}>
            {t("navbar.collection")}
          </Link>

          <Link to="/style" onClick={closeMenu}>
            {t("navbar.style")}
          </Link>

          <a href="#mariage-page" onClick={(e) => handleHashNav(e, "mariage-page")}>
            {t("navbar.mariage")}
          </a>

          <a href="#contact" onClick={(e) => handleHashNav(e, "contact")}>
            {t("navbar.contact")}
          </a>

          <Link to="/cart" onClick={closeMenu} className="mobile-cart-link">
            {t("navbar.cart")} <span>({cartCount})</span>
          </Link>
        </nav>

        <div className="mobile-menu-footer">
          <span>MK CRÉATION</span>
          <span>{t("navbar.footerTagline")}</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;