import React from 'react';

const SocialProof: React.FC = () => {
    const testimonials = [
        {
            quote: "En praktisk och tydlig workshop som var direkt användbar.",
            author: "COO"
        },
        {
            quote: "Hjälpte oss snabbt att implementera AI i flera processer.",
            author: "VD"
        },
        {
            quote: "Carl-Johan visade hur AI kunde anpassas till just vårt företag.",
            author: "Säljchef"
        }
    ];

    return (
        <section className="py-16 border-y border-slate-200 bg-slate-50 relative overflow-hidden">
             {/* Subtle Animated Background - Mesh Gradient - Reduced Opacity */}
             <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-[#BFE3A1]/10 rounded-full blur-[100px] animate-blob mix-blend-multiply"></div>
                <div className="absolute bottom-[-50%] right-[-20%] w-[500px] h-[500px] bg-[#EAF5DF]/15 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                    {testimonials.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <p className="text-lg text-slate-700 font-medium leading-relaxed">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="h-px w-8 bg-slate-300"></div>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                                    {item.author}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;