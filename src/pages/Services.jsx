import Navbar from "../Components/Navbar";
import { NavLink } from "react-router-dom";
import '../styles/services.css';

function Services() {
  return (
    <div>
      <Navbar />
      <section className="services">
        <h1 className="services_title">Mes Services</h1>
        <div className="services_julie">

          <div className="service_block">
            <h2>Création de site web</h2>
                <h3>Site vitrine avec WordPress</h3>
                <p>Un site professionnel, rapide à mettre en place, entièrement administrable via WordPress.</p>
                <h3>Application web avec React</h3>
                <p>Des applications modernes, dynamiques et évolutives développées avec React.js.</p>
          </div>

          <div className="service_block">
            <h2>Optimisation SEO</h2>
                <h3>Audit SEO</h3>
                <p>Analyse complète de votre site pour identifier les freins à son bon référencement.</p>
                <h3>Optimisation One-page</h3>
                <p>Optimisation technique et éditoriale de vos pages clés pour un meilleur positionnement sur Google.</p>
          </div>

          <div className="service_block">
            <h2>Maintenance et mise à jour</h2>
            <p>Assurez la sécurité et le bon fonctionnement de votre site avec une maintenance régulière et des mises à jour.</p>
          </div>

          <div className="service_block">
            <h2>Refonte de site web</h2>
            <p>Modernisez l’apparence et les performances de votre site existant tout en conservant son contenu.</p>
          </div>

          <div className="service_block">
            <h2>Maquettage</h2>
            <p>Conception de maquettes UX/UI pour visualiser l’interface de votre futur site avant son développement.</p>
          </div>
          <div className="service_contact">
                <NavLink to="/contact" aria-label="Demande de devis">Demander un devis</NavLink>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Services;
