import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Check } from 'lucide-react';

const ProductDefinition: React.FC = () => {
    return (
        <section id="product-definition" className="bg-white py-24 md:py-32 relative overflow-hidden">
             {/* Subtle Animated Background - Mesh Gradient - Reduced Opacity */}
             <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#EAF5DF]/15 rounded-full blur-[120px] animate-blob mix-blend-multiply"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#BFE3A1]/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EAF5DF]/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
                
                <motion.h2 
                    className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    En praktisk AI-workshop för snabb affärsnytta
                </motion.h2>
                
                <motion.p 
                    className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12 max-w-2xl font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Vi identifierar var AI gör störst nytta i er verksamhet. Konkreta lösningar anpassade för ert företag.
                </motion.p>

                <motion.div 
                    className="flex flex-col md:flex-row gap-4 md:gap-12 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {[
                        '3 timmar på plats',
                        'Konkreta AI-workflows',
                        'Tydlig handlingsplan'
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#EAF5DF] flex items-center justify-center shrink-0">
                                <Check className="w-4 h-4 text-[#557540]" strokeWidth={3} />
                            </div>
                            <span className="text-lg text-slate-800 font-medium">{item}</span>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex flex-col items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Button 
                        variant="primary" 
                        onClick={() => window.open('https://calendly.com/carljohan-orndahl/30min', '_blank')}
                        className="text-lg px-10 py-4 shadow-xl shadow-[#BFE3A1]/20 hover:shadow-[#BFE3A1]/30"
                    >
                        Boka en demo
                    </Button>
                    <span className="text-slate-500 text-sm font-medium border-b border-transparent hover:border-slate-300 transition-colors cursor-default">
                        Gratis demo på 20 minuter.
                    </span>
                </motion.div>

            </div>
        </section>
    );
};

export default ProductDefinition;