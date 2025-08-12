const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gallery-nav border-t border-gallery-border py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informations de l'artiste */}
          <div>
            <h3 className="text-lg font-display font-semibold text-text-primary mb-4">Bernard</h3>
            <p className="text-text-secondary text-sm leading-relaxed font-body">
              Artiste peintre passionné par l'exploration des couleurs et des formes. 
              Chaque œuvre raconte une histoire unique.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-display font-semibold text-text-primary mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-text-secondary hover:text-gold transition-colors duration-200 font-body">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/galerie" className="text-text-secondary hover:text-gold transition-colors duration-200 font-body">
                  Galerie
                </a>
              </li>
              <li>
                <a href="/a-propos" className="text-text-secondary hover:text-gold transition-colors duration-200 font-body">
                  À propos
                </a>
              </li>
              <li>
                <a href="/contact" className="text-text-secondary hover:text-gold transition-colors duration-200 font-body">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-semibold text-text-primary mb-4">Contact</h3>
            <div className="space-y-2 text-text-secondary font-body">
              <p>Email: contact@bernard-artiste.fr</p>
              <p>Téléphone: +33 1 23 45 67 89</p>
              <p>Adresse: 123 Rue de l'Art, Paris</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gallery-border mt-8 pt-8 text-center">
          <p className="text-text-secondary text-sm font-body">
            © {currentYear} Bernard. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;