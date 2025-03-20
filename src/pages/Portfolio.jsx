import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../styles/portfolio.css";
import projectsData from "../data/projects.json";
import ohMyFoodPhoto from "../assets/ohMyFoodPhoto.webp";
import sophieBluelPhoto from "../assets/SophieBluelPhoto.webp";
import kasaPhoto from "../assets/KasaPhoto.webp";
import ninaCarducciPhoto from "../assets/NinaCarducciPhoto.webp";
import argentBankPhoto from "../assets/argentBankPhoto.webp";

function Portfolio() {
  const projectImages = {
    1: ohMyFoodPhoto,
    2: sophieBluelPhoto,
    3: kasaPhoto,
    4: ninaCarducciPhoto,
    5: argentBankPhoto,
  };

  return (
    <div>
      <Navbar />
      <section className="portfolio">
        <h1 className="portfolio_title">Portfolio</h1>
        <div className="portfolioProject">
          <h2 className="portfolio_title_project">Focus projets de formation</h2>
          <section className="portfolio_project">
            {projectsData.map((project) => (
              <div key={project.id} className="portfolio_project_item">
                <img src={projectImages[project.id]} alt={`${project.name} photo`} />
                <h3 className="portfolio_project_name">{project.name}</h3>
                <Link to={`/project/${project.id}`} className="portfolio_project_link">
                  Voir plus
                </Link>
              </div>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
