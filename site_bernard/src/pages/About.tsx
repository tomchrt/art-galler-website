import { useState } from 'react';

const About = () => {
  const [newMessage, setNewMessage] = useState('');
  const [guestBook, setGuestBook] = useState([
    {
      id: 1,
      name: "Marie L.",
      message: "Un artiste d'une sensibilité rare. Ses œuvres m'ont profondément touchée.",
      date: "15 janvier 2024"
    },
    {
      id: 2,
      name: "Pierre D.",
      message: "L'audace de ses compositions et la maîtrise technique sont remarquables.",
      date: "8 janvier 2024"
    },
    {
      id: 3,
      name: "Sophie M.",
      message: "Une galerie qui respire l'authenticité et la passion pour l'art contemporain.",
      date: "2 janvier 2024"
    }
  ]);

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newEntry = {
        id: Date.now(),
        name: "Visiteur",
        message: newMessage.trim(),
        date: new Date().toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })
      };
      setGuestBook([newEntry, ...guestBook]);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gallery-bg w-full">
      {/* Section principale - Arthur et son atelier */}
      <section className="relative py-20 lg:py-32 bg-gallery-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Colonne gauche - Image de l'atelier */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] bg-gallery-card rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/src/images/atelier.png" 
                  alt="Atelier d'Arthur" 
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Colonne droite - Description d'Arthur */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="font-title text-4xl lg:text-5xl xl:text-6xl font-light text-text-primary leading-tight mb-6">
                <span className="text-sage">Arthur</span> l'artiste
              </h1>
              <p className="font-body text-lg lg:text-xl text-text-secondary leading-relaxed mb-6">
                Artiste contemporain passionné, Arthur explore les limites de l'expression artistique à travers des œuvres audacieuses et innovantes. Son atelier est le lieu de création où naissent des compositions uniques qui défient les conventions.
              </p>
              <p className="font-body text-lg lg:text-xl text-text-secondary leading-relaxed mb-6">
                Influencé par les mouvements modernes et guidé par une vision personnelle, il crée des pièces qui invitent à la réflexion et éveillent les sens. Chaque œuvre raconte une histoire, capture une émotion, ouvre une porte vers l'inconnu.
              </p>
              <p className="font-body text-lg lg:text-xl text-text-secondary leading-relaxed">
                Son approche unique mélange techniques traditionnelles et innovations contemporaines, créant un style distinctif qui résonne avec les amateurs d'art du monde entier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Exposition */}
      <section className="py-16 bg-gallery-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="font-title text-3xl lg:text-4xl font-light text-text-primary mb-4">
              Expositions
            </h2>
            <div className="w-16 h-px bg-sage mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gallery-card rounded-xl p-6 border border-gallery-border">
              <h3 className="font-title text-xl font-medium text-text-primary mb-3">Galerie Moderne</h3>
              <p className="font-body text-text-secondary mb-4">Exposition collective "Nouveaux Horizons"</p>
              <p className="font-body text-sm text-sage">Mars - Avril 2024</p>
            </div>
            
            <div className="bg-gallery-card rounded-xl p-6 border border-gallery-border">
              <h3 className="font-title text-xl font-medium text-text-primary mb-3">Centre d'Art Contemporain</h3>
              <p className="font-body text-text-secondary mb-4">Solo show "L'Audace du Geste"</p>
              <p className="font-body text-sm text-sage">Janvier - Février 2024</p>
            </div>
            
            <div className="bg-gallery-card rounded-xl p-6 border border-gallery-border">
              <h3 className="font-title text-xl font-medium text-text-primary mb-3">Musée des Beaux-Arts</h3>
              <p className="font-body text-text-secondary mb-4">Exposition "Artistes de Demain"</p>
              <p className="font-body text-sm text-sage">Novembre - Décembre 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Livre d'Or */}
      <section className="py-16 bg-gallery-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="font-title text-3xl lg:text-4xl font-light text-text-primary mb-4">
              Livre d'Or
            </h2>
            <p className="font-body text-lg text-text-secondary mb-8">
              Laissez votre message et faites partie de cette aventure artistique
            </p>
            <div className="w-16 h-px bg-sage mx-auto"></div>
          </div>

          {/* Formulaire d'ajout de message */}
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSubmitMessage} className="bg-gallery-card rounded-xl p-6 border border-gallery-border">
              <div className="mb-4">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Partagez votre ressenti, votre émotion, votre message..."
                  className="w-full h-32 px-4 py-3 bg-gallery-bg border border-gallery-border rounded-lg text-text-primary placeholder-text-secondary resize-none focus:outline-none focus:border-sage transition-colors duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-sage hover:bg-sage-dark text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Ajouter mon message
              </button>
            </form>
          </div>

          {/* Affichage des messages du livre d'or */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {guestBook.map((entry) => (
                <div 
                  key={entry.id}
                  className="bg-gallery-card rounded-xl p-6 border border-gallery-border hover:border-sage/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-title text-lg font-medium text-sage">{entry.name}</h4>
                    <span className="font-body text-sm text-text-secondary">{entry.date}</span>
                  </div>
                  <p className="font-body text-text-primary leading-relaxed">{entry.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
