import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gallery-nav border-b border-gallery-border sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo/Nom du site à gauche */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gallery-card rounded-full overflow-hidden border-2 border-gallery-border group-hover:border-sage transition-colors duration-300">
              <img 
                src="/src/images/logo.png" 
                alt="Logo" 
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-title text-2xl font-medium text-text-primary group-hover:text-sage transition-colors duration-300">
              Galerie Arthur
            </span>
          </Link>
          
          {/* Navigation au centre */}
          <nav className="hidden md:flex items-center space-x-8">
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
        </div>
      </div>
    </header>
  );
};

export default Header;