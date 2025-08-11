import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Design épuré */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Colonne gauche - Image principale */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-500 text-sm">Œuvre principale</p>
                  </div>
                </div>
              </div>
              
              {/* Image secondaire en superposition */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-white text-sm font-medium">Œuvre secondaire</p>
                </div>
              </div>
            </div>

            {/* Colonne droite - Contenu */}
            <div className="space-y-8">
              {/* Titre principal */}
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Un espace pour{' '}
                  <span className="text-orange-500">l'art audacieux</span>
                  {' '}et les nouvelles idées
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Découvrez une collection unique d'œuvres contemporaines qui repoussent les limites 
                  de l'expression artistique et invitent à la réflexion.
                </p>
              </div>

              {/* Bouton principal */}
              <div className="pt-4">
                <Link
                  to="/galerie"
                  className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  VOIR LA GALERIE
                </Link>
              </div>

              {/* Boutons flottants */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  Acheter maintenant
                </button>
                
                <button className="flex items-center gap-3 bg-white text-gray-900 border-2 border-gray-200 px-6 py-3 rounded-lg hover:border-gray-300 transition-colors">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Œuvres récentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une sélection de mes créations les plus récentes, explorant de nouvelles 
              techniques et perspectives artistiques.
            </p>
          </div>

          {/* Grille d'œuvres */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden mb-4 group-hover:shadow-xl transition-shadow">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Œuvre {item}</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Composition {item}
                </h3>
                <p className="text-gray-600 text-sm">
                  Exploration des formes et couleurs contemporaines
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/galerie"
              className="inline-flex items-center text-gray-900 hover:text-blue-600 font-semibold transition-colors"
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
