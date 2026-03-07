"use client";

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
    return (
        <section className="w-full px-6 py-20 md:px-12 md:py-32 bg-background overflow-hidden relative">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

                {/* Left Side: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8 text-foreground font-bold">
                        Let's shape your<br />story.
                    </h2>
                    <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
                        Ready to stand out? Fill out the form or reach us directly. We'd love to hear about your goals.
                    </p>

                    <div className="flex flex-col gap-8">
                        <motion.div whileHover={{ scale: 1.02, x: 5 }} className="flex items-center gap-6 cursor-pointer group">
                            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <div className="font-bold text-foreground text-lg mb-1 group-hover:text-accent transition-colors">Email Us</div>
                                <div className="text-foreground/70">hello@amrielle.com</div>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02, x: 5 }} className="flex items-center gap-6 cursor-pointer group">
                            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                <Phone size={24} />
                            </div>
                            <div>
                                <div className="font-bold text-foreground text-lg mb-1 group-hover:text-accent transition-colors">Call Us</div>
                                <div className="text-foreground/70">+1 (555) 000-0000</div>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02, x: 5 }} className="flex items-center gap-6 cursor-pointer group">
                            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <div className="font-bold text-foreground text-lg mb-1 group-hover:text-accent transition-colors">Office</div>
                                <div className="text-foreground/70">123 Creative Ave, Branding City</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative"
                >
                    {/* subtle background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink-100/50 blur-3xl -z-10 rounded-full" />

                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_40px_-15px_rgba(84,15,34,0.1)] border border-white/50 relative overflow-hidden group">
                        <form className="flex flex-col gap-6 relative z-10 w-full">

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-foreground inline-block">Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all focus:bg-white"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-foreground inline-block">Email</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all focus:bg-white"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-foreground inline-block">Message</label>
                                <textarea
                                    placeholder="Tell us about your brand..."
                                    rows={4}
                                    className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none focus:bg-white"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(253 28 82 / 0.3), 0 8px 10px -6px rgb(253 28 82 / 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                type="button"
                                className="w-full mt-2 bg-gradient-to-r from-accent to-pink-500 text-white font-bold text-lg py-5 rounded-xl shadow-lg transition-transform"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
