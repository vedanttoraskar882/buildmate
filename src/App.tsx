import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HomeHero } from './components/HomeHero';
import { AboutSection } from './components/AboutSection';
import { PlatformSection } from './components/PlatformSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';
import { StorageInfoModal } from './components/StorageInfoModal';

export function App() {
  const [pilotModalOpen, setPilotModalOpen] = useState(false);
  const [storageModalOpen, setStorageModalOpen] = useState(false);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const handleOpenPilotModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    lastTriggerRef.current = e.currentTarget;
    setPilotModalOpen(true);
  };

  const handleOpenStorageModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    lastTriggerRef.current = e.currentTarget;
    setStorageModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-teal-100 selection:text-teal-900">
      {/* Sticky Navigation */}
      <Navbar onRequestPilot={handleOpenPilotModal} />

      {/* Main Content Sections in Exact Required Order: 1 to 6 */}
      <main className="flex-1">
        {/* 1. Home */}
        <HomeHero onRequestPilot={handleOpenPilotModal} />

        {/* 2. About */}
        <AboutSection />

        {/* 3. Platform */}
        <PlatformSection />

        {/* 4. How It Works */}
        <HowItWorksSection />

        {/* 5. Market & Pricing */}
        <PricingSection onRequestPilot={handleOpenPilotModal} />

        {/* Closing Atmospheric CTA Banner */}
        <CtaBanner onRequestPilot={handleOpenPilotModal} />

        {/* 6. FAQ */}
        <FAQSection />
      </main>

      {/* 7. Footer */}
      <Footer
        onRequestPilot={handleOpenPilotModal}
        onOpenStorageInfo={handleOpenStorageModal}
      />

      {/* Accessible Modals */}
      <PilotModal
        isOpen={pilotModalOpen}
        onClose={() => setPilotModalOpen(false)}
        triggerElement={lastTriggerRef.current}
      />

      <StorageInfoModal
        isOpen={storageModalOpen}
        onClose={() => setStorageModalOpen(false)}
        triggerElement={lastTriggerRef.current}
      />
    </div>
  );
}

export default App;
