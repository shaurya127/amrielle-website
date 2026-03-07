"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function ValueProp() {
    const points = [
        "Authentic Storytelling",
        "Data-Driven Growth",
        "Visual Excellence"
    ];

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section className="w-full px-6 py-20 md:px-12 md:py-32 bg-background">
            <div className="max-w-3xl mx-auto flex flex-col items-start text-left">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl lg:text-5xl font-serif leading-[1.2] mb-8 text-foreground font-bold"
                >
                    Your expertise is hidden behind a quiet profile.<br />
                    <span className="text-accent italic">Let's change that.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed font-sans"
                >
                    In the digital age, being good at what you do isn't enough. You need to be visible. At Amrielle, we don't just "post content." We craft a narrative that resonates with your audience and establishes you as an authority.
                </motion.p>

                <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-5 font-sans text-xl font-medium text-foreground/90"
                >
                    {points.map((point, index) => (
                        <motion.li key={index} variants={item} className="flex items-center gap-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block shrink-0 shadow-[0_0_12px_rgba(253,28,82,0.6)]" />
                            {point}
                        </motion.li>
                    ))}
                </motion.ul>

            </div>
        </section>
    );
}
