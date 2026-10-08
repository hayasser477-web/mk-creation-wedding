import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { getCountries } from "@countrystatecity/countries-browser";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

import "./Cart.css";

function Cart() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* =====================================================
     CART
  ===================================================== */

  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("mk-cart") || "[]");
    } catch {
      return [];
    }
  });

  const [cartCount, setCartCount] = useState(() => {
    return Number(localStorage.getItem("mk-cart-count")) || 0;
  });

  /* =====================================================
     COUNTRIES
  ===================================================== */

  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  const countryPickerRef = useRef(null);

  /* =====================================================
     FORM
  ===================================================== */

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    country: "DZ",
    city: "",
    delivery: "bureau",
  });

  /* =====================================================
     LOAD COUNTRIES
  ===================================================== */

  useEffect(() => {
    let mounted = true;

    const loadCountries = async () => {
      try {
        const data = await getCountries();

        if (!mounted) return;

        const sortedCountries = [...data].sort((a, b) =>
          a.name.localeCompare(b.name, undefined, {
            sensitivity: "base",
          })
        );

        setCountries(sortedCountries);
      } catch (error) {
        console.error("Failed to load countries:", error);
      } finally {
        if (mounted) {
          setLoadingCountries(false);
        }
      }
    };

    loadCountries();

    return () => {
      mounted = false;
    };
  }, []);

  /* =====================================================
     CLOSE COUNTRY PICKER
  ===================================================== */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        countryPickerRef.current &&
        !countryPickerRef.current.contains(event.target)
      ) {
        setCountryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* =====================================================
     COUNTRY DATA
  ===================================================== */

  const selectedCountry = countries.find(
    (country) => country.iso2 === form.country
  );

  const filteredCountries = useMemo(() => {
    const search = countrySearch.trim().toLowerCase();

    if (!search) return countries;

    return countries.filter((country) => {
      const name = String(country.name || "").toLowerCase();
      const iso2 = String(country.iso2 || "").toLowerCase();
      const phonecode = String(country.phonecode || "").toLowerCase();

      return (
        name.includes(search) ||
        iso2.includes(search) ||
        phonecode.includes(search)
      );
    });
  }, [countries, countrySearch]);

  /* =====================================================
     COUNTRY TYPE
  ===================================================== */

  const isAlgeria = form.country === "DZ";
  const isFrance = form.country === "FR";

  /* =====================================================
     CURRENCY
  ===================================================== */

  const currency = isAlgeria ? "DZD" : "EUR";
  const currencySymbol = isAlgeria ? "DA" : "€";

  /* =====================================================
     PRODUCTS TOTAL
  ===================================================== */

  const productsTotal = useMemo(() => {
    return cart.reduce((total, item) => {
      const price = isAlgeria
        ? Number(item.priceDZD || 0)
        : Number(item.priceEUR || 0);

      const quantity = Number(item.quantity || 1);

      return total + price * quantity;
    }, 0);
  }, [cart, isAlgeria]);

  /* =====================================================
     DELIVERY PRICE
     
     Algeria:
       Bureau = 600 DA
       Domicile = 900 DA

     France:
       Both = 6 €

     Other:
       Both = 15 €
  ===================================================== */

  const deliveryPrice = useMemo(() => {
    if (isAlgeria) {
      return form.delivery === "bureau" ? 600 : 900;
    }

    if (isFrance) {
      return 6;
    }

    return 15;
  }, [form.delivery, isAlgeria, isFrance]);

  /* =====================================================
     TOTAL
  ===================================================== */

  const total = productsTotal + deliveryPrice;

  /* =====================================================
     UPDATE FORM
  ===================================================== */

  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  /* =====================================================
     PHONE
  ===================================================== */

  const handlePhoneChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");

    updateField("phone", value);
  };

  /* =====================================================
     COUNTRY CHANGE
  ===================================================== */

  const handleCountrySelect = (countryCode) => {
    setForm((previous) => ({
      ...previous,
      country: countryCode,
      city: "",
      delivery: "bureau",
      phone: "",
    }));

    setCountryOpen(false);
    setCountrySearch("");
  };

  /* =====================================================
     REMOVE PRODUCT
  ===================================================== */

  const removeProduct = (productId) => {
    const updatedCart = cart.filter(
      (item) => item.id !== productId
    );

    const updatedCount = updatedCart.reduce(
      (total, item) => total + Number(item.quantity || 1),
      0
    );

    setCart(updatedCart);
    setCartCount(updatedCount);

    localStorage.setItem(
      "mk-cart",
      JSON.stringify(updatedCart)
    );

    localStorage.setItem(
      "mk-cart-count",
      String(updatedCount)
    );
  };

  /* =====================================================
     SUBMIT ORDER
  ===================================================== */

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!cart.length) return;

    const order = {
      products: cart.map((item) => ({
        id: item.id,
        name: item.name,
        number: item.number,
        priceEUR: item.priceEUR,
        priceDZD: item.priceDZD,
        quantity: Number(item.quantity || 1),
      })),

      customer: {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        phone: form.phone,
        country: selectedCountry?.name || form.country,
        countryCode: form.country,
        city: form.city,
        delivery: form.delivery,
      },

      pricing: {
        products: productsTotal,
        shipping: deliveryPrice,
        total,
        currency,
      },

      createdAt: new Date().toISOString(),
    };

    console.log("MK ORDER:", order);

    /* =================================================
       CLEAR CART
    ================================================= */

    localStorage.removeItem("mk-cart");
    localStorage.setItem("mk-cart-count", "0");

    setCart([]);
    setCartCount(0);

    /* =================================================
       THANK YOU
    ================================================= */

    navigate("/thank-you");
  };

  /* =====================================================
     EMPTY CART
  ===================================================== */

  if (!cart.length) {
    return (
      <div className="cart-page">
        <Navbar cartCount={cartCount} />

        <main className="cart-empty">
          <span className="cart-empty__eyebrow">
            MK CREATION WEDDING
          </span>

          <h1>
            {t("cart.emptyTitleLine1")}
            <br />
            <em>{t("cart.emptyTitleEmphasis")}</em>
          </h1>

          <p>{t("cart.emptyDescription")}</p>

          <a
            href="/collection"
            className="cart-empty__button"
          >
            <span>{t("cart.discoverCollection")}</span>
            <i>→</i>
          </a>
        </main>

        <Footer />
      </div>
    );
  }

  /* =====================================================
     MAIN
  ===================================================== */

  return (
    <div className="cart-page">
      <Navbar cartCount={cartCount} />

      <main className="cart-main">

        {/* =================================================
            HEADER
        ================================================= */}

        <section className="cart-header">
          <span>MK / CHECKOUT</span>

          <h1>
            {t("cart.titleLine1")}
            <br />
            <em>{t("cart.titleEmphasis")}</em>
          </h1>

          <p>{t("cart.description")}</p>
        </section>

        {/* =================================================
            CONTENT
        ================================================= */}

        <section className="cart-layout">

          {/* =================================================
              PRODUCTS
          ================================================= */}

          <div className="cart-products">

            {cart.map((item) => {
              const itemPrice = isAlgeria
                ? Number(item.priceDZD || 0)
                : Number(item.priceEUR || 0);

              const quantity = Number(item.quantity || 1);

              return (
                <div
                  className="cart-product"
                  key={item.id}
                >

                  <div className="cart-product__media">

                    <video
                      src={item.video}
                      muted
                      playsInline
                      preload="metadata"
                    />

                    <div className="cart-product__veil" />

                    <span className="cart-product__number">
                      {item.number}
                    </span>

                    <div className="cart-product__caption">
                      <span>MK CREATION WEDDING</span>

                      <strong>
                        {item.name}
                      </strong>
                    </div>

                  </div>

                  <div className="cart-product__details">

                    <div>
                      <span>
                        {t("cart.selectedCreation")}
                      </span>

                      <strong>
                        {item.name}
                      </strong>

                      {quantity > 1 && (
                        <small>
                          × {quantity}
                        </small>
                      )}
                    </div>

                    <strong className="cart-product__price">
                      {(
                        itemPrice * quantity
                      ).toLocaleString("fr-FR")}{" "}
                      {currencySymbol}
                    </strong>

                  </div>

                  <button
                    type="button"
                    className="cart-product__remove"
                    onClick={() => removeProduct(item.id)}
                    aria-label="Remove product"
                  >
                    ×
                  </button>

                </div>
              );
            })}

          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <div className="cart-form-wrapper">

            <div className="cart-form-heading">

              <span>
                {t("cart.formEyebrow")}
              </span>

              <h2>
                {t("cart.formTitleLine1")}
                <br />
                <em>
                  {t("cart.formTitleEmphasis")}
                </em>
              </h2>

            </div>

            <form
              className="cart-form"
              onSubmit={handleSubmit}
            >

              {/* =================================================
                  FIRST / LAST NAME
              ================================================= */}

              <div className="cart-form__row">

                <label>
                  <span>
                    {t("cart.firstName")}
                  </span>

                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(event) =>
                      updateField(
                        "firstName",
                        event.target.value
                      )
                    }
                    required
                    autoComplete="given-name"
                    placeholder={t(
                      "cart.firstNamePlaceholder"
                    )}
                  />
                </label>

                <label>
                  <span>
                    {t("cart.lastName")}
                  </span>

                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(event) =>
                      updateField(
                        "lastName",
                        event.target.value
                      )
                    }
                    required
                    autoComplete="family-name"
                    placeholder={t(
                      "cart.lastNamePlaceholder"
                    )}
                  />
                </label>

              </div>

              {/* =================================================
                  PHONE
              ================================================= */}

              <label>
                <span>
                  {t("cart.phone")}
                </span>

                <div className="cart-phone">

                  <span className="cart-phone__prefix">
                    {selectedCountry?.emoji || "🌍"}{" "}
                    {selectedCountry?.phonecode
                      ? `+${selectedCountry.phonecode}`
                      : ""}
                  </span>

                  <input
                    type="tel"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={handlePhoneChange}
                    required
                    placeholder={t(
                      "cart.phonePlaceholder"
                    )}
                  />

                </div>
              </label>

              {/* =================================================
                  COUNTRY
              ================================================= */}

              <label>
                <span>
                  {t("cart.country")}
                </span>

                <div
                  className="cart-country-picker"
                  ref={countryPickerRef}
                >

                  <button
                    type="button"
                    className="cart-country-picker__trigger"
                    onClick={() =>
                      setCountryOpen(
                        (previous) => !previous
                      )
                    }
                    disabled={loadingCountries}
                  >

                    <span className="cart-country-picker__selected">

                      <span className="cart-country-picker__flag">
                        {selectedCountry?.emoji || "🌍"}
                      </span>

                      <span>
                        {loadingCountries
                          ? t("cart.loadingCountries")
                          : selectedCountry?.name ||
                            t("cart.countryPlaceholder")}
                      </span>

                    </span>

                    <span
                      className={`cart-country-picker__arrow ${
                        countryOpen ? "is-open" : ""
                      }`}
                    >
                      ⌄
                    </span>

                  </button>

                  {countryOpen && (
                    <div className="cart-country-picker__menu">

                      <div className="cart-country-picker__search">

                        <span>⌕</span>

                        <input
                          type="text"
                          value={countrySearch}
                          onChange={(event) =>
                            setCountrySearch(
                              event.target.value
                            )
                          }
                          placeholder={t(
                            "cart.countrySearchPlaceholder"
                          )}
                          autoFocus
                        />

                      </div>

                      <div className="cart-country-picker__list">

                        {filteredCountries.length > 0 ? (
                          filteredCountries.map(
                            (country) => (
                              <button
                                type="button"
                                key={country.iso2}
                                className={
                                  country.iso2 ===
                                  form.country
                                    ? "is-selected"
                                    : ""
                                }
                                onClick={() =>
                                  handleCountrySelect(
                                    country.iso2
                                  )
                                }
                              >

                                <span className="cart-country-picker__country">

                                  <span>
                                    {country.emoji ||
                                      "🌍"}
                                  </span>

                                  <span>
                                    {country.name}
                                  </span>

                                </span>

                                <small>
                                  +{country.phonecode}
                                </small>

                              </button>
                            )
                          )
                        ) : (
                          <div className="cart-country-picker__empty">
                            {t("cart.noCountries")}
                          </div>
                        )}

                      </div>

                    </div>
                  )}

                </div>
              </label>

              {/* =================================================
                  CITY
              ================================================= */}

              <label>
                <span>
                  {t("cart.city")}
                </span>

                <input
                  type="text"
                  value={form.city}
                  onChange={(event) =>
                    updateField(
                      "city",
                      event.target.value
                    )
                  }
                  required
                  autoComplete="address-level2"
                  placeholder={t(
                    "cart.cityPlaceholder"
                  )}
                />
              </label>

              {/* =================================================
                  DELIVERY
              ================================================= */}

              <div className="cart-delivery">

                <span className="cart-delivery__label">
                  {t("cart.deliveryTitle")}
                </span>

                <div className="cart-delivery__options">

                  <button
                    type="button"
                    className={
                      form.delivery === "bureau"
                        ? "is-selected"
                        : ""
                    }
                    onClick={() =>
                      updateField(
                        "delivery",
                        "bureau"
                      )
                    }
                  >

                    <span className="cart-delivery__radio" />

                    <strong>
                      {t("cart.bureau")}
                    </strong>

                    <small>
                      {(
                        isAlgeria
                          ? 600
                          : isFrance
                          ? 6
                          : 15
                      ).toLocaleString("fr-FR")}{" "}
                      {currencySymbol}
                    </small>

                  </button>

                  <button
                    type="button"
                    className={
                      form.delivery === "domicile"
                        ? "is-selected"
                        : ""
                    }
                    onClick={() =>
                      updateField(
                        "delivery",
                        "domicile"
                      )
                    }
                  >

                    <span className="cart-delivery__radio" />

                    <strong>
                      {t("cart.home")}
                    </strong>

                    <small>
                      {(
                        isAlgeria
                          ? 900
                          : isFrance
                          ? 6
                          : 15
                      ).toLocaleString("fr-FR")}{" "}
                      {currencySymbol}
                    </small>

                  </button>

                </div>

              </div>

              {/* =================================================
                  SUMMARY
              ================================================= */}

              <div className="cart-summary">

                <div>

                  <span>
                    {t("cart.product")}
                  </span>

                  <strong>
                    {productsTotal.toLocaleString(
                      "fr-FR"
                    )}{" "}
                    {currencySymbol}
                  </strong>

                </div>

                <div>

                  <span>
                    {t("cart.shipping")}
                  </span>

                  <strong>
                    {deliveryPrice.toLocaleString(
                      "fr-FR"
                    )}{" "}
                    {currencySymbol}
                  </strong>

                </div>

                <div className="cart-summary__total">

                  <span>
                    {t("cart.total")}
                  </span>

                  <strong>
                    {total.toLocaleString(
                      "fr-FR"
                    )}{" "}
                    {currencySymbol}
                  </strong>

                </div>

              </div>

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button
                type="submit"
                className="cart-submit"
              >

                <span>
                  {t("cart.confirm")}
                </span>

                <i>→</i>

              </button>

            </form>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Cart;