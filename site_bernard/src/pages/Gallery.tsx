import { useState } from 'react';
import { artworks } from '../data/artworks';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<'Toutes' | 'Peintures' | 'Autres'>('Toutes');

  const categories = [
    { id: 'Toutes', label: 'Toutes les œuvres', count: artworks.length },
    { id: 'Peintures', label: 'Peintures', count: artworks.filter(a => a.category === 'Peintures').length },
    { id: 'Autres', label: 'Autres', count: artworks.filter(a => a.category === 'Autres').length }
  ];

  const filteredArtworks = selectedCategory === 'Toutes' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gallery-bg w-full py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Titre de la page */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-display font-bold text-text-primary mb-4">
            Galerie
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-body">
            Découvrez l'ensemble de mes créations, des peintures aux installations
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu de catégories - Gauche */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-gallery-card border border-gallery-border rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-display font-semibold text-text-primary mb-4">
                Catégories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id as 'Toutes' | 'Peintures' | 'Autres')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-body ${
                      selectedCategory === category.id
                        ? 'bg-sage text-text-primary'
                        : 'text-text-secondary hover:text-text-primary hover:bg-gallery-bg'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.label}</span>
                      <span className="text-sm opacity-75">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Informations supplémentaires */}
              <div className="mt-8 pt-6 border-t border-gallery-border">
                <h4 className="text-sm font-display font-semibold text-text-primary mb-3">
                  À propos de la collection
                </h4>
                <p className="text-xs text-text-secondary font-body leading-relaxed">
                  Cette galerie présente une sélection de mes œuvres les plus représentatives, 
                  allant des peintures traditionnelles aux créations contemporaines.
                </p>
              </div>
            </div>
          </div>

          {/* Grille des œuvres - Droite */}
          <div className="flex-1">
            {filteredArtworks.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-text-secondary text-lg font-body">
                  Aucune œuvre trouvée dans cette catégorie.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredArtworks.map((artwork) => (
                  <div key={artwork.id} className="group">
                    <div className="bg-gallery-card border border-gallery-border rounded-lg overflow-hidden group-hover:border-sage group-hover:shadow-lg transition-all duration-200">
                      {/* Image de l'œuvre */}
                      <div className="aspect-[4/3] bg-gallery-bg border-b border-gallery-border overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-sage rounded-lg mx-auto mb-2 opacity-60"></div>
                            <p className="text-text-secondary text-xs">Image de l'œuvre</p>
                          </div>
                        </div>
                      </div>

                      {/* Informations de l'œuvre */}
                      <div className="p-4">
                        <div className="mb-3">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            artwork.category === 'Peintures' 
                              ? 'bg-sage bg-opacity-20 text-sage' 
                              : 'bg-brick bg-opacity-20 text-brick'
                          }`}>
                            {artwork.category}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-display font-semibold text-text-primary mb-2 group-hover:text-sage transition-colors">
                          {artwork.title}
                        </h3>
                        
                        <p className="text-text-secondary text-sm mb-3 font-body leading-relaxed">
                          {artwork.description}
                        </p>
                        
                        <div className="space-y-1 text-xs text-text-secondary font-body">
                          {artwork.technique && (
                            <p><span className="font-medium">Technique:</span> {artwork.technique}</p>
                          )}
                          {artwork.dimensions && (
                            <p><span className="font-medium">Dimensions:</span> {artwork.dimensions}</p>
                          )}
                          {artwork.year && (
                            <p><span className="font-medium">Année:</span> {artwork.year}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination ou bouton "Voir plus" */}
            {filteredArtworks.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-sage hover:bg-sage-dark text-text-primary px-8 py-3 rounded-lg transition-colors duration-200 font-medium">
                  Charger plus d'œuvres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;