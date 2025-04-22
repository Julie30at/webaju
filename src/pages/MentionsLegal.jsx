import '../styles/mentions.css';
import Navbar from "../Components/Navbar"; 

function Mentions() {
  return (
    <div>
        <Navbar /> 
        <section className='mentions'>
            <h1 className='mentions_title'>Mentions légales</h1>
            <div className='mentions_text'>
                <h2>1. Site internet</h2>
                <ul>
                    <li>Nom du site : webaju.fr</li>
                    <li>URL complète : <a href="https://www.webaju.fr" target="_blank" rel="noopener noreferrer">www.webaju.fr</a></li>
                </ul>
                
                <h2>2. Propriétaire du site</h2>
                <ul>
                    <li>Propriétaire : Julie At</li>
                    <li>Adresse du siège social : 14 rue Benoît Germain, 30900 Nîmes, France</li>
                    <li>Numéro de téléphone : 07.83.88.97.28</li>
                    <li>Adresses e-mail : 
                        <a href="mailto:contact@webaju.fr" aria-label="Envoyer un email">contact@webaju.fr</a> ou
                        <a href="mailto:webajuwebsitecreation@gmail.com" aria-label="Envoyer un email">webajuwebsitecreation@gmail.com</a>
                    </li>
                </ul>
                
                <h2>3. Informations légales</h2>
                <ul>
                    <li>Numéro SIRET : 94260882900019</li>
                    <li>Date de création : 31/03/2025</li>
                    <li>Forme juridique : Profession libérale (code : 1500)</li>
                    <li>Activité principale : Programmation informatique (code : 6201Z)</li>
                    <li>Nom du responsable de la publication : Julie AT</li>                   
                </ul>
                
                <h2>4. Hébergement</h2>
                <ul>
                    <li>Nom de l'hébergeur : OVH</li>
                    <li>Adresse : 2 rue Kellermann, 59100 Roubaix, France</li>
                    <li>Numéro de téléphone : +33 9 72 10 10 07</li>
                </ul>
                
                <h2>5. Propriété intellectuelle</h2>
                <p>Tous les éléments présents sur ce site (textes, images, logos, vidéos, etc.) sont protégés par les lois françaises sur la propriété intellectuelle.
                    <br />L'utilisation de ces éléments sans l'autorisation préalable de Julie At est interdite.</p>
                
                <h2>6. Données personnelles et cookies</h2>
                <h3>Collecte de données personnelles</h3>
                <p>De manière générale, vous pouvez visiter notre site sans avoir à fournir d'informations personnelles vous concernant.
                    <br />Cependant, ce site collecte des données personnelles via un formulaire de contact et les outils d’analyse, notamment Google Analytics et Google Tag Manager, afin d'améliorer l'expérience utilisateur.</p>
                
                <h3>Utilisation des cookies</h3>
                <p>Des cookies sont utilisés pour collecter et analyser des informations sur l'utilisation du site, telles que les pages visitées, les liens cliqués et d'autres interactions.
                    <br />Ces cookies sont également utilisés pour personnaliser les publicités diffusées aux utilisateurs en fonction de leur navigation.
                    <br />Conformément à la législation sur la protection des données (RGPD), un consentement préalable est requis avant l'activation de certains cookies, 
                    notamment ceux utilisés à des fins analytiques ou publicitaires. 
                    <br />Vous avez la possibilité de gérer ou de refuser l’utilisation des cookies via les paramètres de votre navigateur 
                    ou en ajustant vos préférences de consentement via notre gestionnaire de cookies.</p>
                
                <h3>Droit d'accès et gestion des données personnelles</h3>
                <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, et d'opposition concernant vos données personnelles.
                    <br />Pour exercer vos droits ou pour toute question relative à la gestion de vos données, vous pouvez nous contacter par email à :
                    <a href="mailto:contact@webaju.fr" aria-label="Envoyer un email">contact@webaju.fr</a> ou
                    <a href="mailto:webajuwebsitecreation@gmail.com" aria-label="Envoyer un email">webajuwebsitecreation@gmail.com</a></p>
                
                <h2>7. Responsabilité</h2>
                <p>Nous mettons tout en œuvre pour que les informations fournies sur ce site soient exactes et à jour.
                    <br />Cependant, nous ne pouvons garantir l'exactitude, la complétude ou la mise à jour des informations.
                    <br />Les utilisateurs sont responsables de l'usage qu'ils font des informations présentes sur le site.</p>
            </div>
        </section>
    </div>
  );
}

export default Mentions;
