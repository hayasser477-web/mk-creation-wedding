import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "./components/intro/Intro";
import Home from "./components/Home/Home";
import MaisonStory from "./components/About/MaisonStory";
import Mariage from "./components/Mariage/Mariage";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import ConditionsGenerales from "./components/ConditionsGenerales/ConditionsGenerales";
import PolitiqueConfidentialite from "./components/PolitiqueConfidentialite/PolitiqueConfidentialite";
import MentionsLegales from "./components/MentionsLegales/MentionsLegales";
import Collection from "./components/Collection/Collection";
import Style from "./components/Style/Style";
import Cart from "./components/Cart/Cart";
import ThankYou from "./components/ThankYou/ThankYou";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <MaisonStory />
              <Mariage />
              <Testimonials />
              <CTA />
              <Footer />

              {showIntro && (
                <Intro onComplete={() => setShowIntro(false)} />
              )}
            </>
          }
        />

        <Route path="/faq" element={<FAQ />} />
        <Route path="/cgv" element={<ConditionsGenerales />} />
        <Route
          path="/PolitiqueConfidentialite"
          element={<PolitiqueConfidentialite />}
        />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/style" element={<Style />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;