import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    // Réinitialiser le formulaire après soumission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gallery-bg w-full">
      {/* En-tête de la page */}
      <section className="relative py-12 sm:py-16 lg:py-20 xl:py-32 bg-gallery-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h1 className="font-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-text-primary leading-tight mb-4 sm:mb-6">
            <span className="text-sage">Contactez</span> l'artiste
          </h1>
          <p className="font-body text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Une question sur une œuvre ? Un projet en tête ? N'hésitez pas à me contacter pour échanger sur l'art et la création.
          </p>
          <div className="w-16 h-px bg-sage mx-auto mt-6 sm:mt-8"></div>
        </div>
      </section>

      {/* Section principale avec formulaire et informations */}
      <section className="py-12 sm:py-16 bg-gallery-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            
            {/* Colonne gauche - Informations de contact */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gallery-card rounded-xl p-6 sm:p-8 border border-gallery-border">
                <h2 className="font-title text-xl sm:text-2xl font-medium text-text-primary mb-6 sm:mb-8 text-center">
                  Informations
                </h2>
                
                <div className="space-y-6 sm:space-y-8">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-sage text-lg sm:text-2xl">📍</span>
                    </div>
                    <h3 className="font-title text-base sm:text-lg font-medium text-text-primary mb-2">Atelier</h3>
                    <p className="font-body text-sm sm:text-base text-text-secondary">
                      123 Rue de l'Art<br />
                      75001 Paris, France
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-sage text-lg sm:text-2xl">✉️</span>
                    </div>
                    <h3 className="font-title text-base sm:text-lg font-medium text-text-primary mb-2">Email</h3>
                    <p className="font-body text-sm sm:text-base text-text-secondary">
                      arthur@galerie-arthur.fr
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-sage text-lg sm:text-2xl">📱</span>
                    </div>
                    <h3 className="font-title text-base sm:text-lg font-medium text-text-primary mb-2">Téléphone</h3>
                    <p className="font-body text-sm sm:text-base text-text-secondary">
                      +33 1 23 45 67 89
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-sage text-lg sm:text-2xl">🕒</span>
                    </div>
                    <h3 className="font-title text-base sm:text-lg font-medium text-text-primary mb-2">Horaires</h3>
                    <p className="font-body text-sm sm:text-base text-text-secondary">
                      Mardi - Samedi<br />
                      10h00 - 18h00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Colonne droite - Formulaire de contact */}
            <div className="bg-gallery-card rounded-xl p-6 sm:p-8 border border-gallery-border">
              <h2 className="font-title text-xl sm:text-2xl font-medium text-text-primary mb-6">
                Envoyer un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-medium text-text-primary mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gallery-bg border border-gallery-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-sage transition-colors duration-300 text-sm sm:text-base"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-medium text-text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gallery-bg border border-gallery-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-sage transition-colors duration-300 text-sm sm:text-base"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-body text-sm font-medium text-text-primary mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gallery-bg border border-gallery-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-sage transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-body text-sm font-medium text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gallery-bg border border-gallery-border rounded-lg text-text-primary placeholder-text-secondary resize-none focus:outline-none focus:border-sage transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Votre message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-sage hover:bg-sage-dark text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
