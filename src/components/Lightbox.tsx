import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCurrentIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
      if (e.key === 'ArrowRight') setCurrentIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, onClose]);

  const prevImage = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const nextImage = () => {
    setCurrentIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(7, 11, 20, 0.96)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
      className="animate-fade-in"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.25rem',
          color: '#FFFFFF',
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          padding: '0.65rem',
          borderRadius: 'var(--radius-pill)',
          zIndex: 210,
        }}
        aria-label="Close Lightbox"
      >
        <X size={24} />
      </button>

      {/* Counter */}
      <div
        style={{
          position: 'absolute',
          top: '1.5rem',
          left: '1.5rem',
          color: 'var(--text-dark-secondary)',
          fontSize: '0.9rem',
          fontWeight: 600,
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={prevImage}
          style={{
            position: 'absolute',
            left: '1rem',
            color: '#FFFFFF',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            padding: '0.75rem',
            borderRadius: 'var(--radius-pill)',
            zIndex: 210,
          }}
          aria-label="Previous Image"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Main Image */}
      <div style={{ maxWidth: '90vw', maxHeight: '85vh', position: 'relative' }}>
        <img
          src={images[currentIndex]}
          alt={`Studio View ${currentIndex + 1}`}
          style={{
            maxWidth: '100%',
            maxHeight: '85vh',
            objectFit: 'contain',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-card-dark)',
          }}
        />
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={nextImage}
          style={{
            position: 'absolute',
            right: '1rem',
            color: '#FFFFFF',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            padding: '0.75rem',
            borderRadius: 'var(--radius-pill)',
            zIndex: 210,
          }}
          aria-label="Next Image"
        >
          <ChevronRight size={28} />
        </button>
      )}
    </div>
  );
};
