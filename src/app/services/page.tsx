"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import Process from '@/components/Process';
import { motion } from 'framer-motion';
import {
    BadgeCheck,
    Briefcase,
    Camera,
    FileText,
    LayoutPanelTop,
    Linkedin,
    PenTool,
    ScanText,
    Sparkles,
    WandSparkles
} from 'lucide-react';

const services = [
    {
        icon: <Sparkles size={32} strokeWidth={1.5} />,
        title: "Personal Branding Strategy",
        description: "Niche discovery, story building, and identity shaping for a brand that feels intentional and credible."
    },
    {
        icon: <BadgeCheck size={32} strokeWidth={1.5} />,
        title: "Profile Makeover & Optimization",
        description: "Bio, tagline, banner, and profile picture refined for a clean and professional presence."
    },
    {
        icon: <PenTool size={32} strokeWidth={1.5} />,
        title: "Ghostwriting & Content Strategy",
        description: "Content that sounds like you, builds authority, and grows your presence with consistency."
    },
    {
        icon: <Linkedin size={32} strokeWidth={1.5} />,
        title: "LinkedIn Growth",
        description: "Steady, assured LinkedIn growth designed to help you reach your first 5K followers in 5 months."
    },
    {
        icon: <WandSparkles size={32} strokeWidth={1.5} />,
        title: "Hooks and Post Refinement",
        description: "We sharpen your hooks and polish every post for stronger reach, retention, and virality."
    },
    {
        icon: <Camera size={32} strokeWidth={1.5} />,
        title: "Video and Photo Editing",
        description: "High-quality edits for reels, posts, and brand visuals that look premium across platforms."
    },
    {
        icon: <LayoutPanelTop size={32} strokeWidth={1.5} />,
        title: "Carousels (LinkedIn & Instagram)",
        description: "Scroll-stopping, clean carousel designs built for storytelling, clarity, and engagement."
    },
    {
        icon: <FileText size={32} strokeWidth={1.5} />,
        title: "CV Optimization and Resume Writing",
        description: "Polished, industry-ready CVs and resumes that present your experience with confidence."
    },
    {
        icon: <Briefcase size={32} strokeWidth={1.5} />,
        title: "Page and Profile Management",
        description: "End-to-end management of your online presence so your brand stays active, cohesive, and sharp."
    },
    {
        icon: <ScanText size={32} strokeWidth={1.5} />,
        title: "Posters and Banners",
        description: "Designs for ads, events, promotions, and campaigns that align with your brand language."
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
                            Amrielle is a personal branding agency built on the belief that every story deserves to be seen in its best light.
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
