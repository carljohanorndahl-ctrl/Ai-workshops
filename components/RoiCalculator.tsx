import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RoiCalculator: React.FC = () => {
    const [employees, setEmployees] = useState(10);
    const hourlyRate = 370;
    const hoursSavedPerWeek = 3;
    const weeksPerMonth = 4;

    const totalHoursSaved = employees * hoursSavedPerWeek * weeksPerMonth;
    const totalMoneySaved = totalHoursSaved * hourlyRate;

    return (
        <section id="roi" className="py-24 relative overflow-hidden bg-slate-50">
            {/* Background Layer: Grain/Noise Overlay */}
            <div 
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Background Layer: Centered Soft Aurora Gradient - Reduced Opacity */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EAF5DF]/20 rounded-full blur-[100px] animate-blob mix-blend-multiply"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#BFE3A1]/10 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#EAF5DF]/15 rounded-full blur-[80px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Vad är 12 timmar värt?</h2>
                    <p className="text-xl text-slate-600 font-medium">Räkna på besparingen om vi automatiserar det tråkiga.</p>
                </div>

                <motion.div 
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        
                        {/* Input Side */}
                        <div className="w-full md:w-1/2 space-y-8">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-4">
                                    Antal anställda i teamet: <span className="text-[#557540] font-bold text-lg ml-2">{employees}</span>
                                </label>
                                <input 
                                    type="range" 
                                    min="2" 
                                    max="100" 
                                    step="1"
                                    value={employees} 
                                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#BFE3A1] hover:accent-[#A9D98B] transition-colors"
                                />
                                <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                                    <span>2</span>
                                    <span>100</span>
                                </div>
                            </div>
                            
                            <div className="p-4 bg-[#EAF5DF]/50 border border-[#BFE3A1]/30 rounded-xl">
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Vi antar att vi sparar <span className="font-bold text-slate-900">3 timmar</span> per person/vecka genom borttagen administration.
                                </p>
                            </div>
                        </div>

                        {/* Result Side */}
                        <div className="w-full md:w-1/2 text-center md:text-left border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0 md:pl-12">
                            <div className="mb-6">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Sparad tid / månad</p>
                                <div className="text-5xl font-bold text-slate-900 tracking-tight">
                                    {totalHoursSaved} <span className="text-2xl text-slate-400 font-medium">timmar</span>
                                </div>
                            </div>
                            
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Värde (ca {hourlyRate}kr/h)</p>
                                <div className="text-5xl font-bold text-[#557540] tracking-tight">
                                    {totalMoneySaved.toLocaleString('sv-SE')} <span className="text-2xl text-slate-400 font-medium">SEK</span>
                                </div>
                            </div>

                            <div className="mt-8 text-xs text-slate-400 font-medium italic">
                                "Beräknat på 370 kr/h (motsvarar ca 45 000 kr/mån inkl. arbetsgivaravgift) och 3 sparade timmar per person och vecka."
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RoiCalculator;