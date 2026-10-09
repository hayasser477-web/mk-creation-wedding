
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Collection.css";

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

const products = [
  {
    id: 1,
    video: model1,
    name: "Création Nº01",
    category: "algeria",
    priceEUR: 390,
    priceDZD: 59000,
    number: "01",
  },
  {
    id: 2,
    video: model2,
    name: "Création Nº02",
    category: "france",
    priceEUR: 79,
    priceDZD: 19750,
    number: "02",
  },
  {
    id: 3,
    video: model3,
    name: "Création Nº03",
    category: "world",
    priceEUR: 79,
    priceDZD: 19750,
    number: "03",
  },
  {
    id: 4,
    video: model4,
    name: "Création Nº04",
    category: "algeria",
    priceEUR: 79,
    priceDZD: 19750,
    number: "04",
  },
  {
    id: 5,
    video: model5,
    name: "Création Nº05",
    category: "france",
    priceEUR: 190,
    priceDZD: 47500,
    number: "05",
  },
  {
    id: 6,
    video: model6,
    name: "Création Nº06",
    category: "world",
    priceEUR: 169,
    priceDZD: 42250,
    number: "06",
  },
  {
    id: 7,
    video: model7,
    name: "Création Nº07",
    category: "algeria",
    priceEUR: 59,
    priceDZD: 14750,
    number: "07",
  },
  {
    id: 8,
    video: model8,
    name: "Création Nº08",
    category: "france",
    priceEUR: 49,
    priceDZD: 12250,
    number: "08",
  },
  {
    id: 9,
    video: model9,
    name: "Création Nº09",
    category: "world",
    priceEUR: 129,
    priceDZD: 32250,
    number: "09",
  },
  {
    id: 10,
    video: model10,
    name: "Création Nº10",
    category: "algeria",
    priceEUR: 119,
    priceDZD: 29750,
    number: "10",
  },
  {
    id: 11,
    video: model11,
    name: "Création Nº11",
    category: "france",
    priceEUR: 79,
    priceDZD: 19750,
    number: "11",
  },
  {
    id: 12,
    video: model12,
    name: "Création Nº12",
    category: "world",
    priceEUR: 139,
    priceDZD: 34750,
    number: "12",
  },
];

function ProductVideo({ product, active, onSelect }) {
  const videoRef = useRef(null);

 
useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  video.muted = true;
  video.playsInline = true;

  if (active) {
    if (video.readyState >= 2) {
      video.play().catch(() => {});
    } else {
      const handleCanPlay = () => {
        video.play().catch(() => {});
      };

      video.addEventListener("canplay", handleCanPlay, {
        once: true,
      });

      video.load();

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
      };
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
  loop
  muted
  playsInline
  autoPlay={active}
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

function Collection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [filter, setFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState([]);

  const [cartCount, setCartCount] = useState(() => {
    return Number(localStorage.getItem("mk-cart-count")) || 0;
  });

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

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

  // Close the product details with Escape.
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

  // Desktop: play only the first filtered product.
  // Mobile: play products while their cards are visible.
  useEffect(() => {
    const cards = document.querySelectorAll(
      ".collection-grid .collection-product"
    );

    const isMobile = window.matchMedia(
      "(max-width: 700px)"
    ).matches;

    if (!isMobile) {
      setVisibleProducts(
        filteredProducts.length > 0
          ? [filteredProducts[0].id]
          : []
      );

      return;
    }

    if (!("IntersectionObserver" in window)) {
      setVisibleProducts(
        filteredProducts.map((product) => product.id)
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
  }, [filter]);

  return (
    <div
      className={`collection-page ${
        selectedProduct ? "collection-page--product-open" : ""
      }`}
    >
      <Navbar cartCount={cartCount} />

      <main>
        {/* HERO */}
        <section className="collection-hero">
          <div className="collection-hero__background" />

          <div className="collection-hero__content">
            <span className="collection-hero__eyebrow">
              MK CREATION WEDDING
            </span>

            <h1>
              {t("collection.heroLine1")}
              <br />
              <em>{t("collection.heroEmphasis")}</em>
            </h1>

            <p>{t("collection.heroDescription")}</p>
          </div>

          <div className="collection-hero__side">
            <span>01</span>
            <i />
            <span>12</span>
          </div>

          <div className="collection-hero__scroll">
            <span>SCROLL TO EXPLORE</span>
            <i />
          </div>
        </section>

        {/* FILTER */}
        <section className="collection-navigation">
          <div className="collection-navigation__intro">
            <span>{t("collection.navigationEyebrow")}</span>
            <p>{t("collection.navigationText")}</p>
          </div>

          <div className="collection-filters">
            <button
              type="button"
              className={filter === "algeria" ? "is-active" : ""}
              onClick={() => setFilter("algeria")}
            >
              <span>01</span>
              {t("collection.filters.algeria")}
            </button>

            <button
              type="button"
              className={filter === "france" ? "is-active" : ""}
              onClick={() => setFilter("france")}
            >
              <span>02</span>
              {t("collection.filters.france")}
            </button>

            <button
              type="button"
              className={filter === "world" ? "is-active" : ""}
              onClick={() => setFilter("world")}
            >
              <span>03</span>
              {t("collection.filters.world")}
            </button>

            <button
              type="button"
              className={filter === "all" ? "is-active" : ""}
              onClick={() => setFilter("all")}
            >
              <span>04</span>
              {t("collection.filters.all")}
            </button>
          </div>
        </section>

        {/* COLLECTION */}
        <section className="collection-showcase">
          <div className="collection-showcase__heading">
            <span>MK / {filter.toUpperCase()}</span>

            <h2>
              {t("collection.showcaseTitleLine1")}
              <br />
              <em>{t("collection.showcaseTitleEmphasis")}</em>
            </h2>
          </div>

          <div className="collection-grid">
            {filteredProducts.map((product) => (
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
        </section>
      </main>

      <Footer />

      {/* PRODUCT VIEW */}
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
            {/* PRODUCT VIDEO */}
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

            {/* PRODUCT INFORMATION */}
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

export default Collection;