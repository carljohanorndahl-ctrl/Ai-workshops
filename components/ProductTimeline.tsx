import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, Rocket } from 'lucide-react';

const ProductTimeline: React.FC = () => {
    const steps = [
        {
            icon: <Search className="w-6 h-6 text-slate-900" />,
            title: "Analys",
            subtitle: "Vi hittar flaskhalsarna",
            desc: "Vi kartlägger era nuvarande processer och identifierar var AI gör mest nytta direkt."
        },
        {
            icon: <Code2 className="w-6 h-6 text-slate-900" />,
            title: "Workshop",
            subtitle: "Vi bygger lösningen live",
            desc: "Under en halvdag sätter vi upp era custom GPTs och automationer. Ingen långdragen utvecklingstid."
        },
        {
            icon: <Rocket className="w-6 h-6 text-slate-900" />,
            title: "Resultat",
            subtitle: "Ni sparar tid från Dag 1",
            desc: "Teamet går därifrån med fungerande verktyg och kunskapen att använda dem."
        }
    ];

    return (
        <section id="process" className="py-24 relative overflow-hidden bg-white">
            {/* Background Layer: Grain/Noise Overlay */}
            <div 
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Background Layer: Animated Mesh Gradients (Green-style) - Reduced Opacity */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                {/* Blob 1 */}
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#EAF5DF]/15 rounded-full blur-[120px] animate-blob mix-blend-multiply"></div>
                
                {/* Blob 2 */}
                <div className="absolute top-[20%] left-[-20%] w-[700px] h-[700px] bg-[#BFE3A1]/10 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
                
                {/* Blob 3 */}
                <div className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] bg-[#EAF5DF]/15 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
                
                {/* Blob 4 */}
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#BFE3A1]/5 rounded-full blur-[80px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Left: Text & Steps - Order 2 on mobile, 1 on desktop */}
                    <div className="flex flex-col justify-center order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-slate-900 mb-2">Ingen teori. Bara verkstad.</h2>
                            <p className="text-slate-600 mb-12">Vi levererar färdiga lösningar, inte powerpoints.</p>
                        </motion.div>

                        <div className="space-y-12 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-100">
                            {steps.map((step, idx) => (
                                <motion.div 
                                    key={idx}
                                    className="relative pl-20"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                >
                                    <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-[#BFE3A1] flex items-center justify-center shadow-lg shadow-[#BFE3A1]/20 z-10 border border-white/20">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{step.title} <span className="text-[#A9D98B] text-sm font-normal ml-2">/ {step.subtitle}</span></h3>
                                    <p className="text-slate-600 mt-2">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image - Order 1 on mobile, 2 on desktop */}
                    <motion.div 
                        className="relative h-[300px] lg:h-full w-full order-1 lg:order-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                         <img 
                            src="/kontorsrum.jpg" 
                            alt="Kontorsrum workshop" 
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProductTimeline;
