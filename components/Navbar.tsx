import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Upplägg', href: '#product-definition' },
        { name: 'Vem det är för', href: '#target-audience' },
        { name: 'Vad ni får', href: '#value' },
        { name: 'Så går det till', href: '#process' },
        { name: 'Räkna på nyttan', href: '#roi' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            // Calculate offset to account for fixed header
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
                scrolled 
                ? 'bg-white/90 backdrop-blur-xl border-slate-200 py-4 shadow-sm' 
                : 'bg-transparent border-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                    {/* New Logo: Circle W */}
                    <svg className="w-10 h-10 text-[#BFE3A1]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" />
                        <path d="M28 38C28 38 32 72 40 72C48 72 50 55 50 55C50 55 52 72 60 72C68 72 72 38 72 38" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Workshops
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-sm font-medium text-slate-600 hover:text-[#A9D98B] transition-colors whitespace-nowrap"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="primary" className="!py-2 !px-5 text-sm" onClick={() => window.location.href = 'https://calendly.com/ai-assistenten-team/30min?month=2026-01'}>
                        Boka en demo
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-slate-900"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                             {navLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.href} 
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-lg font-medium text-slate-900 hover:text-[#A9D98B]"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button className="w-full" onClick={() => {
                                setMobileMenuOpen(false);
                                window.location.href = 'https://calendly.com/ai-assistenten-team/30min?month=2026-01';
                            }}>
                                Boka en demo
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;