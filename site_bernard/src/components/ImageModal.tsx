import { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  imageTitle: string;
  onClose: () => void;
}

const ImageModal = ({ isOpen, imageUrl, imageTitle, onClose }: ImageModalProps) => {
  // Fermer le modal avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Empêcher le scroll du body quand le modal est ouvert
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-sage text-xl font-light transition-colors duration-300"
        >
          ✕ Fermer
        </button>
        <img 
          src={imageUrl} 
          alt={imageTitle}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default ImageModal;
