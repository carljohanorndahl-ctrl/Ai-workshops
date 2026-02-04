import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Check } from 'lucide-react';

const BusinessValue: React.FC = () => {
    const features = [
        {
            category: "Försäljning",
            headline: "Effektivisera för säljteamet",
            subheading: "Maximera säljteamets effektivitet med smarta verktyg.",
            bullets: [
                "Öka konverteringen per lead",
                "Fokusera på rätt leads vid rätt tidpunkt",
                "Skala top-performers arbetssätt till hela säljteamet",
                "Skapa mer träffsäkra budskap för specifika leads",
                "Få betydligt snabbare och mer träffsäkra uppföljningar"
            ]
        },
        {
            category: "Kundservice",
            headline: "Snabba upp kundsupporten",
            subheading: "Höj servicenivån utan att tumma på kvalitét",
            bullets: [
                "Hur AI kan användas för snabbare svarstider",
                "Exempel på kundsvar i rätt tonalitet",
                "Hur intern kunskap kan samlas i en AI-lösning",
                "Hur AI kan stötta onboarding av nya medarbetare"
            ]
        },
        {
            category: "Ledning",
            headline: "Bättre beslutsunderlag, analyser och insikter.",
            subheading: "Få snabbare insikter och tydligare överblick.",
            bullets: [
                "Hur möten kan sammanfattas till beslut och åtgärder",
                "Hur AI kan användas för presentationer och beslutsunderlag",
                "Exempel på AI-stöd för analyser och omvärldsbevakning",
                "AI som stöd för professionellt skrivande"
            ]
        }
    ];

    return (
        <section id="value" className="bg-slate-50 py-10 md:py-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Effektivisera där det gör störst skillnad
                    </motion.h2>
                    <motion.p 
                        className="text-lg md:text-xl text-slate-600 font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Vi visar konkreta exempel och arbetssätt för hur AI kan användas i er verksamhet
                    </motion.p>
                </div>

                {/* Feature Boxes */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-[24px] p-6 md:p-8 border border-slate-200 shadow-xl shadow-slate-200/40 flex flex-col h-full hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 transform hover:-translate-y-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Category Label */}
                            <div className="inline-block px-3 py-1 bg-[#EAF5DF] text-[#557540] text-[11px] font-bold uppercase tracking-wider rounded-md mb-4 w-fit">
                                {feature.category}
                            </div>
                            
                            {/* Headlines */}
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 leading-tight tracking-tight">
                                {feature.headline}
                            </h3>
                            <p className="text-slate-500 mb-6 leading-relaxed font-medium text-sm md:text-base">
                                {feature.subheading}
                            </p>

                            {/* Divider */}
                            <div className="w-full h-px bg-slate-100 mb-6"></div>

                            {/* Bullets */}
                            <ul className="space-y-3 flex-grow">
                                {feature.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-0.5 w-5 h-5 rounded-full bg-[#EAF5DF] flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-[#557540]" strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-700 font-medium text-sm leading-snug">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div 
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Button 
                        variant="primary" 
                        onClick={() => window.open('https://calendly.com/carljohan-orndahl/30min', '_blank')}
                        className="text-lg px-10 py-4 shadow-xl shadow-[#BFE3A1]/10 hover:shadow-[#BFE3A1]/20 mb-4"
                    >
                        Boka en demo
                    </Button>
                    <p className="text-slate-500 font-medium text-sm">
                        Anpassat efter ert team och era verktyg.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default BusinessValue;
