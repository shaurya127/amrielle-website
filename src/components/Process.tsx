"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <Search className="w-8 h-8 text-accent" strokeWidth={1.5} />,
        title: "1. The Audit",
        description: "We analyze your current digital footprint to identify gaps and opportunities for high-impact positioning."
    },
    {
        icon: <Map className="w-8 h-8 text-accent" strokeWidth={1.5} />,
        title: "2. The Strategy",
        description: "We craft a personalized roadmap including visual identity guidelines, content pillars, and growth tactics."
    },
    {
        icon: <Rocket className="w-8 h-8 text-white" strokeWidth={1.5} />,
        title: "3. The Execution",
        description: "Our team implements the strategy, producing premium content and managing your brand's explosive growth.",
        isHighlight: true
    }
];

export default function Process() {
    const container: any = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const item: any = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    };

    return (
        <section className="w-full px-6 py-24 md:py-32 bg-background flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl mb-16 md:mb-24"
            >
                <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">
                    Our Proven Framework
                </h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                    How We Elevate You.
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed font-sans">
                    A structured, strategic approach to ensure your personal brand is built on a solid foundation and scales sustainably.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl w-full"
            >
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className={`p-10 rounded-[2rem] flex flex-col items-start shadow-sm border transition-transform duration-300 hover:-translate-y-2 ${step.isHighlight
                            ? 'bg-gradient-to-br from-accent to-pink-500 border-transparent text-white shadow-xl shadow-accent/20'
                            : 'bg-white border-foreground/5 text-foreground'
                            }`}
                    >
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${step.isHighlight ? 'bg-white/20' : 'bg-accent/10'
                            }`}>
                            {step.icon}
                        </div>
                        <h4 className={`text-2xl font-serif font-bold mb-4 ${step.isHighlight ? 'text-white' : 'text-foreground'}`}>
                            {step.title}
                        </h4>
                        <p className={`text-lg leading-relaxed ${step.isHighlight ? 'text-white/90' : 'text-foreground/70'}`}>
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
