import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-midnight relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                     {/* New Logo: Circle W */}
                    <svg className="w-8 h-8 text-[#BFE3A1]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" />
                        <path d="M28 38C28 38 32 72 40 72C48 72 50 55 50 55C50 55 52 72 60 72C68 72 72 38 72 38" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-slate-200 font-semibold text-lg">Simplestudio</span>
                </div>
                
                <div className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Alla rättigheter reserverade.
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Integritetspolicy</a>
                    <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Villkor</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;