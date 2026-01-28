import React from 'react';
import GlassCard from './ui/GlassCard';
import { TrendingUp, Clock, ShieldCheck, Mail, FileText, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const ValuePropGrid: React.FC = () => {
    return (
        <section id="features" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2 
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Varför ledande bolag väljer oss
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                    
                    {/* Box 1: Sales - Large span */}
                    <GlassCard className="md:col-span-2 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <TrendingUp size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="p-3 bg-blue-500/20 w-fit rounded-lg mb-4">
                                <TrendingUp className="text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Sälj mer, skriv mindre</h3>
                                <p className="text-slate-400">Automatisera prospektering och anbudsskrivning. Våra agenter scannar marknaden och förbereder utkast åt dina säljare, så de kan fokusera på att stänga affärer.</p>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Box 2: Admin */}
                    <GlassCard className="relative overflow-hidden group">
                        <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Clock size={120} />
                        </div>
                        <div className="p-3 bg-cyan-500/20 w-fit rounded-lg mb-4">
                            <Clock className="text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Kapa administrationen</h3>
                        <p className="text-sm text-slate-400">Låt AI sköta mötesanteckningar och CRM-uppdateringar automatiskt.</p>
                    </GlassCard>

                    {/* Box 3: Quality */}
                    <GlassCard className="relative overflow-hidden group">
                         <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <ShieldCheck size={120} />
                        </div>
                        <div className="p-3 bg-sky-500/20 w-fit rounded-lg mb-4">
                            <ShieldCheck className="text-sky-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Säkrad Kvalitet</h3>
                        <p className="text-sm text-slate-400">Enhetlig kommunikation och tonalitet i alla kanaler oavsett vem som skriver.</p>
                    </GlassCard>

                     {/* Box 4: Interactive Micro-features */}
                     <GlassCard className="md:col-span-2 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-white/5 to-white/0">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-4">Integrera med verktygen ni redan använder</h3>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-12 h-12 rounded-lg bg-[#0078D4]/20 flex items-center justify-center border border-[#0078D4]/30">
                                        <Mail className="text-[#0078D4]" />
                                    </div>
                                    <span className="text-xs text-slate-500">Outlook</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-12 h-12 rounded-lg bg-[#2563EB]/20 flex items-center justify-center border border-[#2563EB]/30">
                                        <FileText className="text-[#2563EB]" />
                                    </div>
                                    <span className="text-xs text-slate-500">Docs</span>
                                </div>
                                 <div className="flex flex-col items-center gap-2">
                                    <div className="w-12 h-12 rounded-lg bg-[#6264A7]/20 flex items-center justify-center border border-[#6264A7]/30">
                                        <Mic className="text-[#6264A7]" />
                                    </div>
                                    <span className="text-xs text-slate-500">Teams</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full p-4 bg-midnight/50 rounded-lg border border-white/5 font-mono text-xs text-slate-400">
                            <div className="mb-2 text-green-400">$ connecting to CRM...</div>
                            <div className="mb-2 text-green-400">$ analyzing leads...</div>
                            <div className="mb-2 text-blue-400">$ generating outreach_v1.txt</div>
                            <div className="animate-pulse">_</div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

export default ValuePropGrid;