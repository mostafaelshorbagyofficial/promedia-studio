import { useState, useEffect } from 'react';
import type { ActiveExperience, StudioLocation, ProTechProduct, Language } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroStudio } from './components/HeroStudio';
import { LocationsSection } from './components/LocationsSection';
import { LocationDetailModal } from './components/LocationDetailModal';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { HeroProTech } from './components/HeroProTech';
import { ProductsGrid } from './components/ProductsGrid';
import { ProductDetailModal } from './components/ProductDetailModal';
import { BusinessImpact } from './components/BusinessImpact';
import { ProTechCTA } from './components/ProTechCTA';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeExperience, setActiveExperience] = useState<ActiveExperience>('studio');
  const [selectedLocation, setSelectedLocation] = useState<StudioLocation | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProTechProduct | null>(null);
  const [inquireItemName, setInquireItemName] = useState<string>('');

  // Dynamically update document dir and lang for true LTR / RTL layout switching
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleToggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleSwitchExperience = (exp: ActiveExperience) => {
    setActiveExperience(exp);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBookLocation = (locationName: string) => {
    setInquireItemName(locationName);
    setActiveExperience('studio');
    handleNavigate('contact');
  };

  const handleStartProductProject = (productTitle: string) => {
    setInquireItemName(productTitle);
    setActiveExperience('protech');
    handleNavigate('protech-cta');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--bg-dark-deep)',
        direction: lang === 'ar' ? 'rtl' : 'ltr',
      }}
    >
      {/* Dynamic Header with Language Switcher */}
      <Header
        activeExperience={activeExperience}
        onSwitchExperience={handleSwitchExperience}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Main Experience Router */}
      <main style={{ flexGrow: 1 }}>
        {activeExperience === 'studio' ? (
          <div className="animate-fade-in">
            {/* Dark Section: Hero */}
            <HeroStudio
              onExploreLocations={() => handleNavigate('locations')}
              onSwitchToProTech={() => handleSwitchExperience('protech')}
              lang={lang}
            />

            {/* Light Section: Scalable Locations Discovery */}
            <LocationsSection
              onSelectLocation={(loc) => setSelectedLocation(loc)}
              lang={lang}
            />

            {/* Dark Section: 22+ Years Craftsmanship & About */}
            <AboutSection lang={lang} />

            {/* Light Section: Contact & Booking */}
            <ContactSection
              activeExperience="studio"
              preselectedItem={inquireItemName}
              lang={lang}
            />
          </div>
        ) : (
          <div className="animate-fade-in">
            {/* Dark Section: ProTech Technology Hero */}
            <HeroProTech
              onExploreProducts={() => handleNavigate('protech-products')}
              onReturnToStudio={() => handleSwitchExperience('studio')}
              lang={lang}
            />

            {/* Mandatory Light Section: ProTech 18 Products & Solutions */}
            <ProductsGrid
              onSelectProduct={(prod) => setSelectedProduct(prod)}
              lang={lang}
            />

            {/* Dark Section: Business Impact & Values */}
            <BusinessImpact lang={lang} />

            {/* Light Section: ProTech Call to Action Form */}
            <ProTechCTA
              preselectedProduct={inquireItemName}
              onReturnToStudio={() => handleSwitchExperience('studio')}
              lang={lang}
            />
          </div>
        )}
      </main>

      {/* Location Modal */}
      <LocationDetailModal
        location={selectedLocation}
        onClose={() => setSelectedLocation(null)}
        onBookLocation={handleBookLocation}
        lang={lang}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onStartProject={handleStartProductProject}
        lang={lang}
      />

      {/* Adaptive Ecosystem Footer */}
      <Footer
        activeExperience={activeExperience}
        onSwitchExperience={handleSwitchExperience}
        onNavigate={handleNavigate}
        lang={lang}
      />
    </div>
  );
}

export default App;
