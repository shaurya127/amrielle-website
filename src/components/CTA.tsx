"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
    return (
        <section className="w-full px-6 py-24 md:py-32 bg-dark-background text-dark-foreground text-center flex flex-col items-center justify-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center"
            >
                <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-bold mb-6 max-w-3xl leading-tight">
                    Ready to own your story?
                </h2>
                <p className="text-lg md:text-2xl text-dark-foreground/80 mb-12 max-w-xl font-sans">
                    Work with Amrielle on strategy, content, design, and growth that actually reflects who you are.
                </p>

                <Link href="/contact" className="inline-block">
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(255 255 255 / 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-background text-foreground font-bold text-lg rounded-full shadow-2xl transition-all inline-block cursor-pointer"
                    >
                        Start Your Brand Journey
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
}
