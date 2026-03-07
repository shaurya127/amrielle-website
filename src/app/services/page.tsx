"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import Process from '@/components/Process';
import { motion } from 'framer-motion';
import { PenTool, Target, Image as ImageIcon, TrendingUp } from 'lucide-react';

const services = [
    {
        icon: <Target size={32} strokeWidth={1.5} />,
        title: "Brand Strategy",
        description: "We dive deep into your unique value proposition to craft a strategy that positions you as an undeniable authority in your niche."
    },
    {
        icon: <PenTool size={32} strokeWidth={1.5} />,
        title: "Content Creation",
        description: "High-quality, engaging content that stops the scroll. From impactful writing to engaging video scripts, we do it all."
    },
    {
        icon: <ImageIcon size={32} strokeWidth={1.5} />,
        title: "Visual Identity",
        description: "Premium aesthetics that make a lasting impression. We ensure your online presence is visually stunning and cohesive."
    },
    {
        icon: <TrendingUp size={32} strokeWidth={1.5} />,
        title: "Growth & Analytics",
        description: "Data-driven decisions to maximize your reach. We analyze what works and iterate to continually grow your audience."
    }
];

export default function ServicesPage() {
    const container: any = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const item: any = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    };

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            <div className="flex-1 pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-40 -right-40 w-96 h-96 bg-pink-300/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-serif font-bold text-foreground mb-6">
                            Our Services
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                            Comprehensive brand management tailored to elevate your digital presence and drive tangible growth.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-white p-10 rounded-[2rem] shadow-xl border border-foreground/5 hover:-translate-y-2 transition-transform duration-300 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-foreground/70 leading-relaxed text-lg">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <Process />
            <CTA />
            <Footer />
        </main>
    );
}
