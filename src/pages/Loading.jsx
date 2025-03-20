import '../styles/loading.css';
import julieAtPhoto from '../assets/webaju.webp'; 

function Loading() {
  return (
    <div className="loading">
      <section className="loading_Text" role="main">
        <img 
          src={julieAtPhoto} 
          alt="Logo de Webaju" 
          className="loading_photo" 
          title="Logo de Webaju, création d'applications web" 
        />
        <div className="loading_dots">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
          <span className="dot dot5"></span>
        </div>
        <h1 className="loading_text_catchphrase">Transformer les idées en réalité numérique...</h1>
      </section>
    </div>
  );
}

export default Loading;
