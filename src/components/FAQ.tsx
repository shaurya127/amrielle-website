"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "How long does a brand makeover take?",
        answer: "Timelines depend on the service. A profile makeover or CV optimization can move faster, while ongoing content, LinkedIn growth, and management work best as structured monthly engagements."
    },
    {
        question: "Who do you work with?",
        answer: "We work with founders, professionals, creators, and individuals who want a stronger personal brand, sharper positioning, and a more polished online presence."
    },
    {
        question: "What platforms do you specialize in?",
        answer: "Our strongest focus is LinkedIn and Instagram, including profiles, carousels, content strategy, post refinement, and visual assets for consistent brand building."
    },
    {
        question: "Do I need to write my own content?",
        answer: "No. We offer ghostwriting, content strategy, hooks, post refinement, and editing support. We shape the content around your voice so it still feels like you."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full px-6 py-24 md:py-32 bg-background flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-2xl mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                    Common Questions.
                </h2>
                <p className="text-lg text-foreground/80 font-sans">
                    Everything you need to know about working with Amrielle.
                </p>
            </motion.div>

            <div className="w-full max-w-3xl flex flex-col gap-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border text-foreground/80 border-foreground/5 rounded-2xl overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors hover:bg-black/5 title-btn"
                            >
                                <span className={`text-xl font-serif font-bold transition-colors ${isOpen ? 'text-accent' : 'text-foreground'}`}>
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex-shrink-0 ml-4 ${isOpen ? 'text-accent' : 'text-foreground/50'}`}
                                >
                                    <ChevronDown size={24} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-6 text-foreground/70 font-sans leading-relaxed text-lg border-t border-foreground/5 pt-4 bg-white/50 block-answer">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
