import React from 'react';
import Button from './ui/Button';

const FinalCta: React.FC = () => {
    return (
        <section id="final-cta" className="py-20 md:py-24 relative overflow-hidden flex flex-col items-center justify-center text-center px-6 bg-white">
            
            {/* Background Layer: Grain/Noise Overlay */}
            <div 
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Background Layer: Soft Animated Aurora Mesh (Green) - Reduced Opacity */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#BFE3A1]/10 rounded-full blur-[120px] animate-blob mix-blend-multiply"></div>
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#EAF5DF]/15 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
                <div className="absolute bottom-[-20%] left-[10%] w-[600px] h-[600px] bg-[#BFE3A1]/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
                    Redo att skala upp effektiviteten?
                </h2>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                    Boka en demo så visar vi exakt hur vi kan automatisera era flaskhalsar. Konkret och tydligt.
                </p>
                
                <div className="flex flex-col items-center gap-6 pt-6">
                    <Button 
                        className="text-xl px-12 py-5 shadow-2xl shadow-[#BFE3A1]/40 hover:shadow-[#BFE3A1]/60 transition-shadow duration-300"
                        onClick={() => window.open('https://calendly.com/carljohan-orndahl/30min', '_blank')}
                    >
                        Boka en demo
                    </Button>
                    <a href="hej@simplestudio.se" className="text-slate-500 hover:text-[#A9D98B] transition-colors border-b border-transparent hover:border-[#A9D98B] pb-0.5 font-medium">
                        Eller maila oss: hej@simplestudio.se
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FinalCta;