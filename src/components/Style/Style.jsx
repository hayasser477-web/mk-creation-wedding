
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./Style.css";
import "../Collection/Collection.css";

import model1 from "../../assets/images/model.mp4";
import model2 from "../../assets/images/model (2).mp4";
import model3 from "../../assets/images/model (3).mp4";
import model4 from "../../assets/images/model (4).mp4";
import model5 from "../../assets/images/model (5).mp4";
import model6 from "../../assets/images/model (6).mp4";
import model7 from "../../assets/images/model (7).mp4";
import model8 from "../../assets/images/model (8).mp4";
import model9 from "../../assets/images/model (9).mp4";
import model10 from "../../assets/images/model (10).mp4";
import model11 from "../../assets/images/model (11).mp4";
import model12 from "../../assets/images/model (12).mp4";

const questions = [
  {
    id: "model",
    number: "01",
    title: "style.questions.model.title",
    options: [
      "Mlhfa",
      "Caftans",
      "Whrani",
      "Karakou",
      "Frgani",
      "autre",
    ],
  },
  {
    id: "occasion",
    number: "02",
    title: "style.questions.occasion.title",
    options: [
      "Mariage",
      "Réception",
      "Soirée",
      "Fiançailles",
      "Henna",
    ],
  },
  {
    id: "style",
    number: "03",
    title: "style.questions.personality.title",
    options: [
      "Traditionnel",
      "Élégant",
      "Moderne",
      "Royal",
    ],
  },
];

const products = [
  {
    id: 1,
    video: model1,
    name: "Création Nº01",
    category: "algeria",
    priceEUR: 390,
    priceDZD: 59000,
    number: "01",
    model: "Mlhfa",
    occasion: "Mariage",
    style: "Traditionnel",
  },
  {
    id: 2,
    video: model2,
    name: "Création Nº02",
    category: "france",
    priceEUR: 79,
    priceDZD: 19750,
    number: "02",
    model: "Caftans",
    occasion: "Réception",
    style: "Traditionnel",
  },
  {
    id: 3,
    video: model3,
    name: "Création Nº03",
    category: "world",
    priceEUR: 79,
    priceDZD: 19750,
    number: "03",
    model: "Caftans",
    occasion: "Réception",
    style: "Traditionnel",
  },
  {
    id: 4,
    video: model4,
    name: "Création Nº04",
    category: "algeria",
    priceEUR: 79,
    priceDZD: 19750,
    number: "04",
    model: "Caftans",
    occasion: "Réception",
    style: "Traditionnel",
  },
  {
    id: 5,
    video: model5,
    name: "Création Nº05",
    category: "france",
    priceEUR: 190,
    priceDZD: 47500,
    number: "05",
    model: "whrani",
    occasion: "Mariage",
    style: "Traditionnel",
  },
  {
    id: 6,
    video: model6,
    name: "Création Nº06",
    category: "world",
    priceEUR: 169,
    priceDZD: 42250,
    number: "06",
    model: "Karakou",
    occasion: "Mariage",
    style: "Élégant",
  },
  {
    id: 7,
    video: model7,
    name: "Création Nº07",
    category: "algeria",
    priceEUR: 59,
    priceDZD: 14750,
    number: "07",
    model: "autre",
    occasion: "Soirée",
    style: "Moderne",
  },
  {
    id: 8,
    video: model8,
    name: "Création Nº08",
    category: "france",
    priceEUR: 49,
    priceDZD: 12250,
    number: "08",
    model: "Karakou",
    occasion: "Fiançailles",
    style: "Élégant",
  },
  {
    id: 9,
    video: model9,
    name: "Création Nº09",
    category: "world",
    priceEUR: 129,
    priceDZD: 32250,
    number: "09",
    model: "Frgani",
    occasion: "Mariage",
    style: "Royal",
  },
  {
    id: 10,
    video: model10,
    name: "Création Nº10",
    category: "algeria",
    priceEUR: 119,
    priceDZD: 29750,
    number: "10",
    model: "Caftans",
    occasion: "Henna",
    style: "Traditionnel",
  },
  {
    id: 11,
    video: model11,
    name: "Création Nº11",
    category: "france",
    priceEUR: 79,
    priceDZD: 19750,
    number: "11",
    model: "Caftans",
    occasion: "Henna",
    style: "Moderne",
  },
  {
    id: 12,
    video: model12,
    name: "Création Nº12",
    category: "world",
    priceEUR: 139,
    priceDZD: 34750,
    number: "12",
    model: "autre",
    occasion: "Réception",
    style: "Royal",
  },
];

function ProductVideo({ product, active, onSelect }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (active) {
      video.muted = true;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
    }
  }, [active]);

  return (
    <article
      className={`collection-product ${
        active ? "collection-product--active" : ""
      }`}
      data-product-id={product.id}
      onClick={() => onSelect(product)}
    >
      <div className="collection-product__media">
        <video
          ref={videoRef}
          src={product.video}
          autoPlay={active}
          loop
          muted
          playsInline
          preload="auto"
        />

        <div className="collection-product__veil" />

        <div className="collection-product__number">
          {product.number}
        </div>

        <div className="collection-product__discover">
          <span>+</span>
          <small>VIEW</small>
        </div>

        <div className="collection-product__bottom">
          <span>{product.name}</span>
          <i>↗</i>
        </div>
      </div>
    </article>
  );
}

function Style() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState("forward");
  const [completed, setCompleted] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState([]);

  const [cartCount, setCartCount] = useState(() => {
    return Number(localStorage.getItem("mk-cart-count")) || 0;
  });

  const currentQuestion = questions[currentStep];

  const selectOption = (option) => {
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: option,
    }));
  };

  const nextStep = () => {
    if (!answers[currentQuestion.id]) return;

    if (currentStep === questions.length - 1) {
      setCompleted(true);

      setTimeout(() => {
        document.getElementById("style-results")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);

      return;
    }

    setDirection("forward");

    setTimeout(() => {
      setCurrentStep((previous) => previous + 1);
    }, 100);
  };

  const previousStep = () => {
    if (currentStep === 0) return;

    setDirection("backward");

    setTimeout(() => {
      setCurrentStep((previous) => previous - 1);
    }, 100);
  };

  const restart = () => {
    setAnswers({});
    setCurrentStep(0);
    setCompleted(false);
    setDirection("forward");
    setVisibleProducts([]);
    setSelectedProduct(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Smart matching: model 100, occasion 10, style 1.
  const getRecommendedProducts = () => {
    const scoredProducts = products.map((product, originalIndex) => {
      let score = 0;

      if (product.model === answers.model) score += 100;
      if (product.occasion === answers.occasion) score += 10;
      if (product.style === answers.style) score += 1;

      return {
        ...product,
        matchScore: score,
        originalIndex,
      };
    });

    return scoredProducts
      .sort((a, b) => {
        if (b.matchScore !== a.matchScore) {
          return b.matchScore - a.matchScore;
        }

        return a.originalIndex - b.originalIndex;
      })
      .slice(0, 6);
  };

  const recommendedProducts = completed
    ? getRecommendedProducts()
    : [];

  // Desktop: first recommendation only.
  // Mobile: activate videos when their cards enter the viewport.
  useEffect(() => {
    if (!completed) {
      setVisibleProducts([]);
      return;
    }

    const cards = document.querySelectorAll(
      "#style-results .collection-product"
    );

    const isMobile = window.matchMedia(
      "(max-width: 700px)"
    ).matches;

    if (!isMobile) {
      setVisibleProducts(
        recommendedProducts.length > 0
          ? [recommendedProducts[0].id]
          : []
      );

      return;
    }

    if (!("IntersectionObserver" in window)) {
      setVisibleProducts(
        recommendedProducts.map((product) => product.id)
      );

      return;
    }

    setVisibleProducts([]);

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleProducts((previous) => {
          const next = new Set(previous);

          entries.forEach((entry) => {
            const id = Number(entry.target.dataset.productId);

            if (!id) return;

            if (entry.isIntersecting) {
              next.add(id);
            } else {
              next.delete(id);
            }
          });

          return [...next];
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px 80px 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [completed]);

  const addToCart = () => {
    if (!selectedProduct) return;

    let existingCart;

    try {
      existingCart = JSON.parse(
        localStorage.getItem("mk-cart") || "[]"
      );

      if (!Array.isArray(existingCart)) {
        existingCart = [];
      }
    } catch {
      existingCart = [];
    }

    const existingProduct = existingCart.find(
      (item) => item.id === selectedProduct.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map((item) =>
        item.id === selectedProduct.id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...selectedProduct,
          quantity: 1,
        },
      ];
    }

    const totalCount = updatedCart.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );

    localStorage.setItem("mk-cart", JSON.stringify(updatedCart));
    localStorage.setItem("mk-cart-count", String(totalCount));

    setCartCount(totalCount);
    navigate("/cart");
  };

  // Prevent background scrolling while the product modal is open.
  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  // Close the product modal with Escape.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={`style-page ${
        selectedProduct ? "collection-page--product-open" : ""
      }`}
    >
      <Navbar cartCount={cartCount} />

      <main>
        {/* HERO */}
        <section className="style-hero">
          <div className="style-hero__background" />

          <div className="style-hero__ornament style-hero__ornament--left">
            M
          </div>

          <div className="style-hero__ornament style-hero__ornament--right">
            K
          </div>

          <div className="style-hero__content">
            <span className="style-hero__eyebrow">
              MK CREATION WEDDING
            </span>

            <h1>
              {t("style.hero.titleLine1")}
              <br />
              <em>{t("style.hero.titleEmphasis")}</em>
            </h1>

            <p>{t("style.hero.description")}</p>

            <a href="#style-atelier" className="style-hero__start">
              <span>{t("style.hero.button")}</span>
              <i>↓</i>
            </a>
          </div>

          <div className="style-hero__bottom">
            <span>01</span>
            <i />
            <span>03</span>
          </div>
        </section>

        {/* ATELIER */}
        <section id="style-atelier" className="style-atelier">
          <div className="style-atelier__header">
            <div>
              <span className="style-atelier__eyebrow">
                {t("style.atelier.eyebrow")}
              </span>

              <h2>
                {t("style.atelier.titleLine1")}
                <br />
                <em>{t("style.atelier.titleEmphasis")}</em>
              </h2>
            </div>

            <div className="style-atelier__counter">
              <span>
                {String(currentStep + 1).padStart(2, "0")}
              </span>
              <i />
              <span>03</span>
            </div>
          </div>

          {!completed ? (
            <div
              className={`style-question style-question--${direction}`}
              key={currentQuestion.id}
            >
              <div className="style-question__top">
                <span>{currentQuestion.number}</span>
                <div className="style-question__line" />
                <span>{t("style.questionLabel")}</span>
              </div>

              <h3>{t(currentQuestion.title)}</h3>

              <div className="style-options">
                {currentQuestion.options.map((option, index) => {
                  const selected = answers[currentQuestion.id] === option;

                  return (
                    <button
                      type="button"
                      key={option}
                      className={`style-option ${
                        selected ? "is-selected" : ""
                      }`}
                      onClick={() => selectOption(option)}
                    >
                      <span className="style-option__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="style-option__name">
                        {t(`style.options.${option}`)}
                      </span>

                      <span className="style-option__mark">
                        {selected ? "✓" : "↗"}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="style-question__controls">
                <button
                  type="button"
                  className="style-back"
                  onClick={previousStep}
                  disabled={currentStep === 0}
                >
                  <span>←</span>
                  {t("style.controls.previous")}
                </button>

                <button
                  type="button"
                  className="style-next"
                  onClick={nextStep}
                  disabled={!answers[currentQuestion.id]}
                >
                  <span>
                    {currentStep === questions.length - 1
                      ? t("style.controls.result")
                      : t("style.controls.next")}
                  </span>
                  <i>→</i>
                </button>
              </div>
            </div>
          ) : (
            /* RESULT SUMMARY */
            <div className="style-result">
              <span className="style-result__eyebrow">
                {t("style.result.eyebrow")}
              </span>

              <h3>
                {t("style.result.titleLine1")}
                <br />
                <em>{t("style.result.titleEmphasis")}</em>
              </h3>

              <p>{t("style.result.description")}</p>

              <div className="style-result__summary">
                <div>
                  <span>{t("style.result.model")}</span>
                  <strong>{t(`style.options.${answers.model}`)}</strong>
                </div>

                <div>
                  <span>{t("style.result.occasion")}</span>
                  <strong>{t(`style.options.${answers.occasion}`)}</strong>
                </div>

                <div>
                  <span>{t("style.result.style")}</span>
                  <strong>{t(`style.options.${answers.style}`)}</strong>
                </div>
              </div>

              <div className="style-result__actions">
                <button
                  type="button"
                  className="style-result__primary"
                  onClick={() => {
                    document.getElementById("style-results")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  <span>{t("style.result.collectionButton")}</span>
                  <i>↓</i>
                </button>

                <button
                  type="button"
                  className="style-result__restart"
                  onClick={restart}
                >
                  {t("style.result.restart")}
                </button>
              </div>
            </div>
          )}
        </section>

        {/* PERSONALIZED RESULTS */}
        {completed && (
          <section
            id="style-results"
            className="collection-showcase style-results"
          >
            <div className="collection-showcase__heading">
              <span>MK / YOUR SELECTION</span>

              <h2>
                {t("style.result.titleLine1")}
                <br />
                <em>{t("style.result.titleEmphasis")}</em>
              </h2>
            </div>

            <div className="style-results__intro">
              <span>
                {recommendedProducts.length}{" "}
                {t("style.result.recommendations")}
              </span>

              <p>{t("style.result.recommendationsDescription")}</p>
            </div>

            <div className="collection-grid">
              {recommendedProducts.map((product) => (
                <ProductVideo
                  key={product.id}
                  product={product}
                  active={
                    !selectedProduct &&
                    visibleProducts.includes(product.id)
                  }
                  onSelect={setSelectedProduct}
                />
              ))}
            </div>

            <div className="style-results__footer">
              <Link to="/collection" className="style-results__all">
                <span>{t("style.result.viewFullCollection")}</span>
                <i>→</i>
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div
          className="collection-product-view"
          role="dialog"
          aria-modal="true"
          aria-labelledby="selected-product-title"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="collection-product-view__backdrop" />

          <button
            type="button"
            className="collection-product-view__close"
            onClick={() => setSelectedProduct(null)}
            aria-label={t("collection.close")}
          >
            <span />
            <span />
          </button>

          <div
            className="collection-product-view__content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="collection-product-view__media">
              <video
                key={selectedProduct.id}
                src={selectedProduct.video}
                controls
                autoPlay
                loop
                playsInline
                preload="metadata"
              />

              <div className="collection-product-view__media-overlay" />

              <span className="collection-product-view__number">
                {selectedProduct.number}
              </span>
            </div>

            <div className="collection-product-view__info">
              <span className="collection-product-view__label">
                MK CREATION WEDDING
              </span>

              <h2 id="selected-product-title">
                {selectedProduct.name}
              </h2>

              <div className="collection-product-view__line" />

              <div className="collection-product-view__prices">
                <div>
                  <span>EUR</span>
                  <strong>
                    {selectedProduct.priceEUR.toLocaleString("fr-FR")} €
                  </strong>
                </div>

                <div>
                  <span>DZD</span>
                  <strong>
                    {selectedProduct.priceDZD.toLocaleString("fr-FR")} DA
                  </strong>
                </div>
              </div>

              <div className="style-product-details">
                <div>
                  <span>{t("style.result.model")}</span>
                  <strong>
                    {t(`style.options.${selectedProduct.model}`)}
                  </strong>
                </div>

                <div>
                  <span>{t("style.result.occasion")}</span>
                  <strong>
                    {t(`style.options.${selectedProduct.occasion}`)}
                  </strong>
                </div>

                <div>
                  <span>{t("style.result.style")}</span>
                  <strong>
                    {t(`style.options.${selectedProduct.style}`)}
                  </strong>
                </div>
              </div>

              <p>{t("collection.productDescription")}</p>

              <button
                type="button"
                className="collection-product-view__add"
                onClick={addToCart}
              >
                <span>{t("collection.addToCart")}</span>
                <i>+</i>
              </button>

              <div className="collection-product-view__meta">
                <span>{t("collection.delivery")}</span>
                <span>MK — {selectedProduct.number}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Style;