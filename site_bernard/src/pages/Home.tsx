import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gallery-bg w-full">
      {/* Hero Section - Design sobre et professionnel */}
      <section className="relative py-12 sm:py-16 lg:py-20 xl:py-32 bg-gallery-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Colonne gauche - Image principale (image 0013) - Format carré préservé */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square bg-gallery-card rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                <img 
                  src="/src/images/image00013.jpeg" 
                  alt="Œuvre principale" 
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Colonne droite - Texte et CTA */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="font-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-text-primary leading-tight mb-4 sm:mb-6">
                Un espace pour <span className="text-sage">l'art audacieux</span> et les nouvelles idées
              </h1>
              <p className="font-body text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Découvrez une collection unique d'œuvres contemporaines qui repoussent les limites de l'expression artistique et invitent à la réflexion.
              </p>
              <Link 
                to="/galerie" 
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-sage hover:bg-sage-dark text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base"
              >
                VOIR LA GALERIE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Œuvres récentes */}
      <section className="py-12 sm:py-16 bg-gallery-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-light text-text-primary mb-4">
              Œuvres récentes
            </h2>
            <div className="w-16 h-px bg-sage mx-auto"></div>
          </div>
          
          {/* Grille des 3 œuvres récentes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Image 1 */}
            <div className="group">
              <div className="aspect-[4/5] bg-gallery-card rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src="/src/images/image00001.jpeg" 
                  alt="Œuvre récente 1" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Image 12 */}
            <div className="group sm:col-span-2 lg:col-span-1">
              <div className="aspect-[4/5] bg-gallery-card rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src="/src/images/image00012.jpeg" 
                  alt="Œuvre récente 2" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Image 6 */}
            <div className="group">
              <div className="aspect-[4/5] bg-gallery-card rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src="/src/images/image00006.jpeg" 
                  alt="Œuvre récente 3" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;