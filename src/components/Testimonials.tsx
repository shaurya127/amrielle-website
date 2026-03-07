"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Amrielle completely transformed how I'm perceived online. The attention to detail and strategic direction was unmatched.",
        author: "Aditi Sharma",
        title: "Founder & CEO, TechFlow",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "Working with them was the best investment for my brand. My engagement skyrocketed and I attracted high-ticket clients almost immediately.",
        author: "Rahul Verma",
        title: "Executive Coach",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "They don't just create pretty graphics; they build magnetic identities. I finally feel confident sending leads to my profile.",
        author: "Priya Desai",
        title: "Creative Director",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop"
    }
];

export default function Testimonials() {
    return (
        <section className="w-full px-6 py-24 md:py-32 bg-[#FCF8F9] flex flex-col items-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl mb-16 md:mb-24"
            >
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Quote size={28} />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                    The Proof is in the Presence.
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed font-sans">
                    Hear from industry leaders and visionaries who trusted Amrielle to redefine their digital narrative.
                </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                {testimonials.map((testimonial, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        className="bg-white p-10 rounded-[2rem] shadow-sm border border-foreground/5 max-w-sm flex-1 min-w-[300px]"
                    >
                        <p className="text-lg text-foreground/80 mb-8 font-serif leading-relaxed italic">
                            "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.author}
                                className="w-14 h-14 rounded-full object-cover border-2 border-accent/20"
                            />
                            <div>
                                <h4 className="font-bold text-foreground font-sans">
                                    {testimonial.author}
                                </h4>
                                <p className="text-sm text-foreground/60 uppercase tracking-wider font-semibold">
                                    {testimonial.title}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
