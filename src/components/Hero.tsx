"use client";

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="relative w-full px-6 pt-32 pb-16 md:px-12 md:pt-48 md:pb-24 flex flex-col items-center justify-center text-center bg-background overflow-hidden min-h-[90vh]">
            {/* Decorative gradient blur */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute bottom-0 left-0 w-80 h-80 bg-pink-300/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="z-10 flex flex-col items-center max-w-4xl"
            >
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-foreground/10 text-xs font-semibold tracking-widest text-foreground uppercase mb-8 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    Personal Branding Agency
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-[5rem] font-serif leading-[1.1] mb-6 text-foreground tracking-tight"
                >
                    We create brands that <br className="hidden md:block" />
                    <span className="text-accent italic pr-2">stand out</span> from the first look.
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl leading-relaxed font-sans"
                >
                    Amrielle is built on the belief that every story deserves to be seen in its best light. We turn your expertise into a magnetic online presence.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "var(--foreground)", color: "#fff" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto px-8 py-4 rounded-full border border-foreground text-foreground font-semibold flex items-center justify-center gap-2 transition-colors duration-300"
                    >
                        View Services
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(253 28 82 / 0.25), 0 8px 10px -6px rgb(253 28 82 / 0.25)" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-accent to-pink-500 text-white font-semibold transition-all shadow-lg"
                    >
                        Contact Us
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}
