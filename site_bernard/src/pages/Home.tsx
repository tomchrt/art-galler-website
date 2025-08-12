import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gallery-bg w-full">
      {/* Hero Section - Design sobre et professionnel */}
      <section className="relative py-20 lg:py-32 bg-gallery-bg">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Colonne gauche - Image principale */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gallery-card border border-gallery-border rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-sage rounded-full mx-auto mb-4"></div>
                    <p className="text-text-secondary text-sm">Œuvre principale</p>
                  </div>
                </div>
              </div>
              
              {/* Image secondaire en superposition */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gallery-card border border-gallery-border rounded-lg shadow-lg">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-text-secondary text-sm font-medium">Œuvre secondaire</p>
                </div>
              </div>
            </div>

            {/* Colonne droite - Contenu */}
            <div className="space-y-8">
              {/* Titre principal */}
              <div>
                <h1 className="text-5xl lg:text-6xl font-display font-bold text-text-primary leading-tight mb-6">
                  Un espace pour{' '}
                  <span className="text-sage">l'art audacieux</span>
                  {' '}et les nouvelles idées
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed max-w-lg font-body">
                  Découvrez une collection unique d'œuvres contemporaines qui repoussent les limites 
                  de l'expression artistique et invitent à la réflexion.
                </p>
              </div>

              {/* Bouton principal */}
              <div className="pt-4">
                <Link
                  to="/galerie"
                  className="inline-block bg-sage hover:bg-sage-dark text-text-primary px-8 py-4 text-lg font-semibold transition-colors duration-200 rounded-lg"
                >
                  VOIR LA GALERIE
                </Link>
              </div>

              {/* Boutons flottants */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="flex items-center gap-3 bg-sage hover:bg-sage-dark text-text-primary px-6 py-3 rounded-lg transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  Acheter maintenant
                </button>
                
                <button className="flex items-center gap-3 border-2 border-brick text-brick hover:bg-brick hover:text-text-primary px-6 py-3 rounded-lg transition-all duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  Personnaliser
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Œuvres récentes" */}
      <section className="py-20 bg-gallery-card">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-text-primary mb-6">
              Œuvres récentes
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto font-body">
              Une sélection de mes créations les plus récentes, explorant de nouvelles 
              techniques et perspectives artistiques.
            </p>
          </div>

          {/* Grille d'œuvres */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="aspect-square bg-gallery-bg border border-gallery-border rounded-lg overflow-hidden mb-4 group-hover:border-sage group-hover:shadow-lg transition-all duration-200">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-text-secondary text-sm">Œuvre {item}</p>
                  </div>
                </div>
                <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
                  Composition {item}
                </h3>
                <p className="text-text-secondary text-sm font-body">
                  Exploration des formes et couleurs contemporaines
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/galerie"
              className="inline-flex items-center text-text-primary hover:text-sage font-semibold transition-colors duration-200"
            >
              Voir toutes les œuvres
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;