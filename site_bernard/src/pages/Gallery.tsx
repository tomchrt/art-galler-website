import { useState } from 'react';
import { imageList } from '../data/imageImports';

// Génération automatique des artworks avec les images importées
const artworks = imageList.map((imageUrl, index) => ({
  id: index + 1,
  imageUrl: imageUrl,
  category: "Toutes"
}));

const ImageModal = ({ isOpen, imageUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white/80 hover:text-white text-xs sm:text-sm font-light tracking-wide transition-colors duration-300 z-10 bg-black/50 px-2 sm:px-3 py-1 sm:py-2 rounded-lg"
        >
          Fermer ✕
        </button>
        
        {/* Image agrandie - Maintenant elle s'adapte à l'écran */}
        <img 
          src={imageUrl} 
          alt="Œuvre d'art"
          className="max-w-[98vw] sm:max-w-[95vw] max-h-[98vh] sm:max-h-[95vh] object-contain shadow-2xl rounded-lg scale-105 hover:scale-110 transition-transform duration-500"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gallery-bg">
      {/* En-tête simplifié et réduit */}
      <div className="bg-gradient-to-b from-gallery-card via-gallery-card to-transparent border-b border-gallery-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center relative">
          {/* Titre principal avec dégradé */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-title font-light bg-gradient-to-r from-sage via-text-primary to-sage bg-clip-text text-transparent tracking-wider mb-4 sm:mb-6 animate-fadeIn">
            Galerie
          </h1>
          
          {/* Ligne décorative avec effet */}
          <div className="relative mx-auto w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-sage to-transparent animate-fadeIn" style={{animationDelay: '0.3s'}}>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 sm:w-3 h-2 sm:h-3 bg-sage rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Grille des images - Design identique mais avec zoom appliqué */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {artworks.map((artwork) => (
            <div 
              key={artwork.id} 
              className="group cursor-pointer"
              onClick={() => openImageModal(artwork.imageUrl)}
            >
              <div className="bg-gallery-card rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 border border-gallery-border">
                <div className="relative overflow-hidden">
                  <img 
                    src={artwork.imageUrl} 
                    alt={`Œuvre ${artwork.id}`}
                    className="w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] min-h-[250px] sm:min-h-[300px] object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay subtil au hover */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Indicateur de clic discret */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gallery-card/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 border border-gallery-border">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal pour l'image agrandie */}
      <ImageModal
        isOpen={!!selectedImage}
        imageUrl={selectedImage || ''}
        onClose={closeImageModal}
      />
    </div>
  );
};

export default Gallery;