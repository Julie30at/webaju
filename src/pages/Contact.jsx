
import Navbar from "../Components/Navbar";
import "../styles/contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div>
      <Navbar />

      <main className="contact">
        <h1 className="contact_title">Contact</h1>

        <div className="contact_form">
          <h2 className="contact_form_title">
            Parlons de votre projet !
          </h2>

          <p>
            Vous avez un projet de création de site web ?
            Contactez-moi pour en discuter.
          </p>

          <div className="icon_container">
            <div className="contact_email">
              <a href="mailto:contact@webaju.fr" aria-label="Envoyer un email">
                <FontAwesomeIcon icon={faEnvelope} className="envelope_icon" />
              </a>
              <p>contact@webaju.fr</p>
            </div>

            <div className="contact_location">
              <FontAwesomeIcon icon={faLocationDot} className="location_icon" />
              <p>France</p>
            </div>

            <div className="contact_phone">
              <a href="tel:+33783889728" aria-label="Appeler">
                <FontAwesomeIcon icon={faPhone} className="phone_icon" />
              </a>
              <p>07.83.88.97.28</p>
            </div>

            <div className="contact_reseaux">
              <a
                href="https://www.linkedin.com/in/julie30at"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir mon profil LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="linkedin_icon" />
              </a>
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
