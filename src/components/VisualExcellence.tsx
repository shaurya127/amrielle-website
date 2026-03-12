"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function VisualExcellence() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, x: 50 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    };

    return (
        <section className="hidden md:block w-full py-20 bg-background overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h3 className="text-sm font-bold tracking-widest text-accent uppercase">
                    Visual Excellence
                </h3>
            </motion.div>

            {/* Horizontally scrolling showcase */}
            <div className="relative w-full overflow-x-auto no-scrollbar pb-16 px-6">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex w-[250vw] md:w-[150vw] lg:w-[120vw] xl:w-full space-x-6 px-12 lg:justify-center"
                >

                    {/* Card 1 */}
                    <motion.div variants={item} className="relative w-80 md:w-96 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] shrink-0 border border-foreground/5 bg-white group hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
                            alt="Vision Board"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                            <span className="font-serif text-xl">Strategy</span>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div variants={item} className="relative w-80 md:w-96 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] shrink-0 border border-foreground/5 bg-pink-100 group hover:-translate-y-2 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-300/40 to-accent/20 blur-md" />
                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                            alt="User Profile"
                            className="w-full h-full object-cover mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
                            {/* Faux Glass Morphism UI */}
                            <div className="w-full max-w-[200px] bg-white/30 backdrop-blur-md border border-white/40 p-4 rounded-xl shadow-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-white/50 border border-white transition-transform group-hover:scale-110" />
                                    <div className="flex-1 h-3 rounded bg-white/50 transition-all group-hover:w-full" />
                                </div>
                                <div className="space-y-2">
                                    <div className="w-full h-2 rounded bg-white/40" />
                                    <div className="w-2/3 h-2 rounded bg-white/40" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 z-20">
                            <span className="font-serif text-xl">Execution</span>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
