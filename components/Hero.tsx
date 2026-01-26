import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Plus, Command } from 'lucide-react';

const Hero: React.FC = () => {
    // Updated prompts as requested
    const prompts = [
        "Identifiera 100 bolag i Stockholm som matchar vår målgrupp och strukturera dem i Excel",
        "Bygg en AI-agent som bevakar priser, erbjudanden och förändringar i vår bransch",
        "Skapa en intern GPT som hjälper medarbetare att svara snabbare och korrekt på kundfrågor enligt våra produkter, processer och vårt tonläge",
        "Skapa en levande konkurrensöversikt som uppdateras automatiskt av en AI-agent",
        "Skapa en effektiv onboarding-presentation av vår verksamhet för nya medarbetare",
        "Identifiera var teamet lägger mest tid manuellt och vad vi bör automatisera först"
    ];

    const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    
    // Typewriter effect logic
    useEffect(() => {
        const currentPrompt = prompts[currentPromptIndex];
        // Adjusted speeds for longer texts and premium feel
        const typeSpeed = 30; // Slightly faster to handle long text smoothly
        const deleteSpeed = 10; // Fast efficient clearing
        const pauseTime = 2000; // Calm 2s pause

        let timer: ReturnType<typeof setTimeout>;

        if (!isDeleting && displayedText !== currentPrompt) {
            // Typing phase
            timer = setTimeout(() => {
                setDisplayedText(currentPrompt.substring(0, displayedText.length + 1));
            }, typeSpeed);
        } else if (!isDeleting && displayedText === currentPrompt) {
            // Pause before deleting
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, pauseTime);
        } else if (isDeleting && displayedText !== "") {
            // Deleting phase
            timer = setTimeout(() => {
                setDisplayedText(currentPrompt.substring(0, displayedText.length - 1));
            }, deleteSpeed);
        } else if (isDeleting && displayedText === "") {
            // Move to next prompt
            setIsDeleting(false);
            setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentPromptIndex, prompts]);

    return (
        <section className="relative pt-32 pb-36 md:pt-48 md:pb-44 overflow-hidden bg-white">
            {/* Subtle Light Accents - Reduced Opacity */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#EAF5DF]/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#BFE3A1]/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4 pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                
                {/* Left Column: Text Content */}
                <div className="flex flex-col gap-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            Jobba smartare med AI?
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                            Från sälj och admin till HR. Vi implementerar praktisk AI-automation som frigör hundratals timmar – på en enda förmiddag.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Button className="w-full sm:w-auto text-lg px-8 py-4 group" onClick={() => window.location.href = 'https://calendly.com/ai-assistenten-team/30min?month=2026-01'}>
                            Boka en demo
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button 
                            variant="ghost" 
                            className="w-full sm:w-auto !text-slate-600 hover:!text-slate-900 hover:!bg-slate-100" 
                            onClick={() => document.getElementById('product-definition')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Vad ingår
                        </Button>
                    </motion.div>

                    <motion.p 
                        className="text-sm text-slate-500 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Se effekten på 15 minuter. Inga förpliktelser.
                    </motion.p>
                </div>

                {/* Right Column: Interactive AI Demo */}
                <div className="relative w-full flex flex-col justify-center pl-0 md:pl-10 z-20">
                     
                     {/* Greeting Text */}
                     <motion.div 
                        className="mb-8 pl-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                     >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                            En AI-workshop hjälper er med
                        </h2>
                     </motion.div>

                     {/* The Input Card */}
                     <motion.div 
                        className="w-full relative max-w-[800px]"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                     >
                        {/* Soft Glow - Reduced Opacity */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#BFE3A1]/10 to-[#EAF5DF]/10 rounded-[35px] blur-xl opacity-0 md:opacity-100 pointer-events-none"></div>

                        {/* Card Structure */}
                        <div className="relative bg-white rounded-[32px] px-6 py-4 shadow-2xl shadow-slate-200/50 flex flex-col justify-between min-h-[160px] md:min-h-[180px] border border-slate-100">
                            
                            {/* TOP: Typing Area */}
                            <div className="flex-1 flex items-start">
                                {/* Typography updated to ChatGPT style: smaller, normal weight, relaxed leading */}
                                <p className="text-slate-800 text-base md:text-lg font-normal leading-relaxed break-words w-full">
                                    {displayedText}
                                    <span className="inline-block w-[3px] h-[1.2em] bg-[#A9D98B] ml-1.5 align-middle rounded-full opacity-80"></span>
                                </p>
                            </div>

                            {/* BOTTOM: Toolbar */}
                            <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-50">
                                {/* Left Tools */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center shrink-0 text-slate-400 transition-colors">
                                        <Plus size={20} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 text-sm font-semibold transition-colors">
                                        <Command size={14} strokeWidth={2.5} />
                                        <span>Actions</span>
                                    </div>
                                </div>

                                {/* Right Send Action */}
                                <div className="w-12 h-12 rounded-full bg-[#BFE3A1] text-slate-900 flex items-center justify-center shrink-0 shadow-lg shadow-[#BFE3A1]/20 hover:shadow-[#BFE3A1]/40 transition-shadow">
                                    <ArrowRight size={22} strokeWidth={3} />
                                </div>
                            </div>

                        </div>
                     </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
