import { useState } from "react";
import Navbar from "../Components/Navbar";
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import { emailJsConfig } from '../config/globalConfig';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (formData.name.trim() === '') {
      errors.name = 'Le nom est requis.';
      valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      errors.email = 'Veuillez entrer un email valide.';
      valid = false;
    }

    if (formData.message.trim() === '') {
      errors.message = 'Le message ne peut pas être vide.';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(emailJsConfig.serviceId, emailJsConfig.templateId, templateParams, emailJsConfig.options)
      .then((result) => {
        console.log('Message envoyé avec succès : ', result.text);
        setSuccessMessage("Votre message a été envoyé avec succès !");
        
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
        
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      }, (error) => {
        console.log('Erreur d\'envoi : ', error.text);
      });
  }
};

  return (
    <div>
      <Navbar />
      <section className="contact">
        <h1 className="contact_title">Contact</h1>
        <section className="contact_form">
          <h2 className="contact_form_title">Parlons de votre projet !</h2>
          <form id="contactForm" onSubmit={handleSubmit} action="/send-message" method="POST">
            <div className="contact_form_responsive">
            <div className="form_group_row">
              <div className="form_group">
                <label htmlFor="name">Nom :</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  aria-label="Nom"
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>

              <div className="form_group">
                <label htmlFor="email">Email :</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  aria-label="Email"
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
            </div>

            <div className="form_group">
              <label htmlFor="message">Message :</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                aria-label="Message"
              />
              {errors.message && <div className="error">{errors.message}</div>}
            </div>
            </div>
            <button type="submit" aria-label="Envoyer le message">Envoyer</button>

            {successMessage && <div className="success">{successMessage}</div>}

            <div className="icon_handshake">
              <FontAwesomeIcon icon={faHandshake} className="handshake_icon" aria-label="Icône de contact" />
            </div>
            <div className="icon_container">
              <div className="contact_email">
                <a href="mailto:contact@webaju.fr" aria-label="Envoyer un email">
                  <FontAwesomeIcon icon={faEnvelope} className="envelope_icon" aria-label="Icône email" />
                </a>
                <p>contact@webaju.fr</p>
              </div>
              <div className="contact_location">
                <a 
                  href="https://www.google.com/maps/place/France/@45.9965717,-2.6896,6z/data=!3m1!4b1!4m6!3m5!1s0xd54a02933785731:0x6bfd3f96c747d9f7!8m2!3d46.227638!4d2.213749!16zL20vMGY4bDlj?authuser=0&entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Voir la localisation sur Google Maps"
                >
                  <FontAwesomeIcon icon={faLocationDot} className="location_icon" aria-label="Icône de localisation" />
                </a>
                <p>France</p>
              </div>
              <div className="contact_phone">
                <a href="https://www.linkedin.com/in/julie30at" target="_blank" 
                   rel="noopener noreferrer"
                   aria-label="Voir mon linkedin"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="linkedin_icon" aria-label="Icône Linkedin" />
                </a>
                <p>www.linkedin.com/in/julie30at</p>
              </div>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
}

export default Contact;
