import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gallery-nav border-b border-gallery-border sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo/Nom du site à gauche */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gallery-card rounded-full overflow-hidden border-2 border-gallery-border group-hover:border-sage transition-colors duration-300">
              <img 
                src="/src/images/logo.png" 
                alt="Logo" 
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-title text-lg sm:text-xl lg:text-2xl font-medium text-text-primary group-hover:text-sage transition-colors duration-300">
              Galerie Arthur
            </span>
          </Link>
          
          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              to="/" 
              className="font-body text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              Accueil
            </Link>
            <Link 
              to="/galerie" 
              className="font-body text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              Galerie
            </Link>
            <Link 
              to="/a-propos" 
              className="font-body text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              À propos
            </Link>
            <Link 
              to="/contact" 
              className="font-body text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-primary hover:text-sage transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gallery-border bg-gallery-nav">
            <nav className="py-4 space-y-2">
              <Link 
                to="/" 
                className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-gallery-card/50 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/galerie" 
                className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-gallery-card/50 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Galerie
              </Link>
              <Link 
                to="/a-propos" 
                className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-gallery-card/50 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-gallery-card/50 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;