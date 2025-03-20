import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import { NavLink } from "react-router-dom";
import "../styles/about.CSS";
import jsLogo from "../assets/logoJs.webp";
import htmlLogo from "../assets/logoHTML..webp";
import sassCssLogo from "../assets/logoSassCSS.webp";
import reactLogo from "../assets/logoREACT.webp";
import nodeLogo from "../assets/logoNodejsexpress.webp";
import mongoLogo from "../assets/logoMongoDB.webp";
import figmaLogo from "../assets/logoFigma.webp";
import postmanLogo from "../assets/logoPostman.webp";
import trelloLogo from "../assets/logoTrello.webp";

const slidesData = [
  {
    id: "react-section",
    className: "about_info_library",
    title: "Bibliothèque",
    img: reactLogo,
    alt: "Logo React - Développement d'applications web dynamiques et réactives",
    text: [
      "React est un outil qui permet de créer des interfaces modernes, rapides et interactives.",
      "Il aide à concevoir des pages qui s'adaptent facilement aux besoins des utilisateurs, offrant ainsi une expérience fluide et agréable.",
      "Grâce à React, la mise à jour de l'interface est rapide et efficace, ce qui garantit une navigation sans lenteur ni interruption.",
    ],
  },
  {
    id: "backend-section",
    className: "about_info_backend",
    title: "Backend et Base de données",
    img: nodeLogo,
    alt: "Logo Node.js et Express - Backend rapide et scalable pour applications web",
    text: [
      "Si React est la vitrine de votre application, Node.js et Express.js en sont les coulisses.",
      "Ils travaillent ensemble pour faire fonctionner votre site web en arrière-plan, en gérant les demandes des utilisateurs et en leur fournissant les informations qu'ils souhaitent.",
    ],
    extraImg: mongoLogo,
    extraAlt: "Logo MongoDB - Gestion de données flexibles et évolutives avec MongoDB",
    extraText: "MongoDB est une base de données NoSQL, idéale pour gérer des données complexes et non structurées, adaptée aux projets modernes.",
  },
  {
    id: "seo-section",
    className: "about_info_seo",
    title: "Optimisation pour les moteurs de recherche (SEO)",
    text: [
      "Le SEO (Search Engine Optimization) c'est l'ensemble des techniques qui permettent d'améliorer la visibilité d'un site web dans les moteurs de recherche comme Google.",
      "Outils : Google Analytics, Google Search Console, GTmetrix, Lighthouse, Wave.",
    ],
  },
];

function About() {
  return (
    <div>
      <Navbar />
      <section className="about">
        <h1 className="about_title">à propos</h1>
        <section className="about_info">
          <section className="about_info_presentation">
             <div className="about_info_background"></div>
             <div className="about_info_presentation_introduction">
              <div className="about_info_presentation_text">
              <p>
                Je suis <strong>Développeuse web</strong> Freelance spécialisée en <strong>React.</strong>
              </p>
              <p>
                Je conçois des interfaces visuelles modernes et réactives pour des applications et sites web.
              </p>
              <p>
                Grâce à ma formation et aux projets réalisés, j’ai acquis les compétences nécessaires pour répondre aux exigences du développement et de l’optimisation.
              </p>
              <p>
                Motivée et déterminée, j’ai à cœur de relever des nouveaux défis et de continuer à évoluer afin d'apporter des solutions adaptées aux besoins de chaque projet.
              </p>
              <p>
                Je propose mes services pour la <strong>création de sites web</strong>, avec une attention particulière à l’optimisation 
                <strong> SEO</strong> et à la gestion de projet pour garantir des solutions performantes et sur mesure.
              </p>
              </div>
              <div className="about_info_presenation_perso">
              <h2>Informations personnelles</h2>
              <ul>
                <li>Julie AT</li>
                <li>33 ans</li>
                <li>Nîmes, France</li>
                <li>Certification professionnelle</li>
                <li>niveau V</li>
                <li>Développeur informatique</li>
               </ul>
               <div className="about_info_presenation_perso_CV">
                <NavLink to="/cv" aria-label="Voir mon CV">CV</NavLink>
              </div>
            </div>
            </div>
          </section>
          <div className="about_info_tech">
          <section className="about_info_langage">
            <h2>Langages de programmation</h2>
              <div className="about_info_langage_logo">
                <img src={jsLogo} alt="Logo JavaScript - Compétence en développement web moderne avec JavaScript" title="Logo JavaScript - Compétence en développement web moderne avec JavaScript" />
                <img src={htmlLogo} alt="Logo HTML - Création de structures HTML solides pour des sites web performants" title="Logo HTML - Création de structures HTML solides pour des sites web performants" />
                <img src={sassCssLogo} alt="Logo Sass / CSS - Mise en forme avancée et responsive avec Sass et CSS" title="Logo Sass / CSS - Mise en forme avancée et responsive avec Sass et CSS" />
              </div>
          </section>
          <Carousel slides={slidesData} />
          <section className="about_info_other">
            <h2>AUTRES</h2>
            <div className="about_info_other_logo">
              <img src={figmaLogo} alt="Logo Figma - Outil de design collaboratif pour la création de maquettes web" title="Logo Figma - Outil de design collaboratif pour la création de maquettes web" />
              <img src={postmanLogo} alt="Logo Postman - Test des API pour assurer la performance des backends" title="Logo Postman - Test des API pour assurer la performance des backends" />
              <img src={trelloLogo} alt="Logo Trello - Outil de gestion de projet pour un suivi efficace des tâches" title="Logo Trello - Outil de gestion de projet pour un suivi efficace des tâches" />
            </div>
          </section>
          </div>
        </section>
      </section>
    </div>
  );
}

export default About;
