import React from 'react';

interface ProTechLogoProps {
  className?: string;
}

export const ProTechLogo: React.FC<ProTechLogoProps> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src="/assets/logos/protech-logo.jpg"
        alt="ProTech Logo"
        className="protech-logo-img"
        loading="eager"
      />
    </div>
  );
};
