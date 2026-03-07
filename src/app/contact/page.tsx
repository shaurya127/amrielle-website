"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />
            <div className="flex-1 pt-24 pb-8">
                <div className="text-center px-6 pt-12 pb-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-foreground/80 max-w-2xl mx-auto"
                    >
                        We'd love to hear from you. Whether you have a question about our services or are ready to elevate your brand.
                    </motion.p>
                </div>
                <ContactSection />
            </div>
            <Footer />
        </main>
    );
}
