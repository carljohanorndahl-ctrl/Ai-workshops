import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import CredibilitySection from './components/CredibilitySection';
import ProductDefinition from './components/ProductDefinition';
import BusinessValue from './components/BusinessValue';
import ProductTimeline from './components/ProductTimeline';
import RoiCalculator from './components/RoiCalculator';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-midnight text-slate-200 selection:bg-[#BFE3A1] selection:text-slate-900">
      {/* Global Background Aurora Effects - Green Theme - Reduced Opacity */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#BFE3A1]/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#EAF5DF]/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#BFE3A1]/3 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <SocialProof />
          <CredibilitySection />
          <ProductDefinition />
          <BusinessValue />
          <ProductTimeline />
          <RoiCalculator />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;