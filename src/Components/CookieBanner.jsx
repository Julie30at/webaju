import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/cookieBanner.css'; 

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const EXPIRATION_DAYS = 180;

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    const consentDate = localStorage.getItem("cookie_consent_date");

    if (!consent || !consentDate) {
      setVisible(true);
      return;
    }

    const savedDate = new Date(consentDate);
    const now = new Date();
    const diffInDays = (now - savedDate) / (1000 * 60 * 60 * 24);

    if (diffInDays > EXPIRATION_DAYS) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    // Mettre à jour le consentement des cookies pour Google Analytics
    window.gtag && window.gtag('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted',
      'functionality_storage': 'granted',
      'personalization_storage': 'granted'
    });

    // Charger Google Analytics seulement après le consentement
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=GTM-5HBTNVM8";
    script.async = true;
    script.onload = () => {
      window.gtag('js', new Date());
      window.gtag('config', 'GTM-5HBTNVM8');
    };
    document.head.appendChild(script);

    // Sauvegarder le consentement dans le localStorage
    localStorage.setItem("cookie_consent", "true");
    localStorage.setItem("cookie_consent_date", new Date().toISOString());
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "false");
    localStorage.setItem("cookie_consent_date", new Date().toISOString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner-content">
        <p className="cookie-banner-text">
          Ce site utilise des cookies pour améliorer votre expérience.{" "}
          <NavLink to="/mentions" style={{ color: "#00ABE4" }} aria-label="Mentions légales">En savoir plus</NavLink>
        </p>
        <div>
          <button
            onClick={acceptCookies}
            className="cookie-banner-button"
          >
            Accepter
          </button>
          <button
            onClick={declineCookies}
            className="cookie-banner-button cookie-banner-button-decline"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
