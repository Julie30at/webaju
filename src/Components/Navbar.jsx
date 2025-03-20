import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import '../styles/navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className={`navbar ${isOpen ? 'open' : ''}`}> 
            <header className="navbar_header">
                <div
                  className="navbar_burger"
                  onClick={toggleMenu}
                  aria-label="Menu"
                  aria-expanded={isOpen ? "true" : "false"}  
                  aria-controls="navbar_menu"  
                  role="button"  
                  tabIndex={0}  
                >
                    <div className="burger-icon"></div>
                </div>
                <nav className={`navbar_links ${isOpen ? 'open' : ''}`}>
                    <NavLink to="/home" end className="home-link" aria-label="Page d'accueil" onClick={closeMenu}>Accueil</NavLink>
                    <NavLink to="/about" aria-label="À propos de moi" onClick={closeMenu}>À propos</NavLink>
                    <NavLink to="/portfolio" aria-label="Mon portfolio" onClick={closeMenu}>Portfolio</NavLink>
                    <NavLink to="/cv" aria-label="Mon CV" onClick={closeMenu}>CV</NavLink>
                    <NavLink to="/contact" aria-label="Page de contact" onClick={closeMenu}>Contact</NavLink>
                </nav>
            </header>
            <footer className={`navbar_footer ${isOpen ? 'open' : ''}`}>
                <div className="navbar_footer_link">
                    <a 
                      href="https://www.linkedin.com/in/julie30at" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Visiter mon profil LinkedIn"
                    >
                        <FaLinkedin size={41} />
                    </a>
                    <a 
                      href="https://github.com/Julie30at" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Visiter mon profil GitHub"
                    >
                        <FaGithub size={41} />
                    </a>
                </div>
                <div className="navbar_footer_mention">
                    <p>© 2025 Julie AT</p>
                    <p>Tous droits réservés</p>
                </div>
            </footer>
        </div>
    );
}

export default Navbar;
