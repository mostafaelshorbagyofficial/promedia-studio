import React from 'react';

interface ProMediaLogoProps {
  isDarkBackground?: boolean;
  className?: string;
}

export const ProMediaLogo: React.FC<ProMediaLogoProps> = ({
  isDarkBackground = true,
  className = '',
}) => {
  return (
    <div className={`promedia-logo-container ${isDarkBackground ? 'on-dark' : 'on-light'} ${className}`}>
      <img
        src="/assets/logos/promedia-logo.jpg"
        alt="ProMedia Logo"
        className="promedia-logo-img"
        loading="eager"
      />
    </div>
  );
};
