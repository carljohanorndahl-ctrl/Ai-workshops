import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

const CredibilitySection: React.FC = () => {
    const points = [
        {
            title: "För ledningsgrupper som måste fatta beslut",
            desc: "För organisationer där tid, tydlighet och genomförande är avgörande."
        },
        {
            title: "Affärsnytta före teknik",
            desc: "Vi utgår från effekt, tidsbesparing och konkreta resultat – inte AI-verktyg."
        },
        {
            title: "På plats, i er vardag",
            desc: "Workshops genomförs on-site i Stockholm och runt om i Sverige."
        },
        {
            title: "Från analys till faktisk förändring",
            desc: "Ni lämnar workshopen med fungerande arbetssätt och tydliga nästa steg."
        }
    ];

    return (
        <section id="target-audience" className="bg-white py-12 md:py-16 relative overflow-hidden">
             {/* Subtle Animated Background - Mesh Gradient - Reduced Opacity */}
             <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                 <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-[#BFE3A1]/10 rounded-full blur-[120px] animate-blob mix-blend-multiply"></div>
                 <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[#EAF5DF]/15 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    För vem är workshopen?
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column: Content - Order 2 on mobile, 1 on desktop */}
                    <div className="flex flex-col justify-center order-2 lg:order-1">
                        <motion.div 
                            className="grid sm:grid-cols-2 gap-x-8 gap-y-8 mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.1 }}
                        >
                            {points.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex flex-col items-start group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {/* Solid Green Accent Line */}
                                    <div className="w-10 h-1 bg-[#BFE3A1] mb-4"></div>
                                    
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight leading-snug">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-[15px] text-slate-600 font-medium leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Section */}
                        <motion.div 
                            className="flex flex-col items-start pl-0"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Button 
                                variant="primary" 
                                onClick={() => window.open('https://calendly.com/ai-assistenten-team/30min?month=2026-01', '_blank')}
                                className="text-lg px-8 py-3 shadow-xl shadow-[#BFE3A1]/10 hover:shadow-[#BFE3A1]/20 group"
                            >
                                Boka en demo 
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <p className="mt-4 text-sm text-slate-500 font-medium tracking-wide">
                                Ingen förberedelse. Inga förpliktelser.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Image - Order 1 on mobile, 2 on desktop */}
                    <motion.div 
                        className="relative h-[300px] lg:h-full w-full order-1 lg:order-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <img 
                            src="/motesrum.png" 
                            alt="Mötesrum workshop" 
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default CredibilitySection;