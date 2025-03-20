import { lazy, Suspense } from "react";
import Navbar from "../Components/Navbar"; 
import julieAtPhoto from '../assets/webaju.webp'; 
import '../styles/home.css';

const About = lazy(() => import("./About"));
const Portfolio = lazy(() => import("./Portfolio"));
const Cv = lazy(() => import("./Cv"));
const Contact = lazy(() => import("./Contact"));

function Home() {
  return (
    <div className="home_page">
      <Navbar /> 
      <section className="home">
        <img 
          src={julieAtPhoto} 
          alt="Logo de Webaju" 
          className="home_photo" 
          title="Logo de Webaju, création d'applications web"
        />
        <h1 className="static-text">Julie At</h1> 
        <h2>
          <span className="dynamic-text">
            <span className="highlight">Développeuse Web</span> Freelance
          </span>
        </h2>
      </section>

      {/* Affichage du contenu des autres pages seulement sur mobile/tablette */}
      <Suspense fallback={<div>Chargement...</div>}>
        <div className="extra-sections">
          <About />
          <Portfolio />
          <Cv />
          <Contact />
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
