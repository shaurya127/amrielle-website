"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import ananyaImg from '@/assets/ananya.jpg';
import navyaImg from '@/assets/Navya.jpg';
import samriddhiImg from '@/assets/samriddhi.jpg';

const teamMembers = [
    {
        name: "Ananya Rai",
        role: "Founder",
        linkedin: "https://www.linkedin.com/in/ananya-rai-049a6a333/",
        image: ananyaImg.src
    },
    {
        name: "Samriddhi Rai",
        role: "Co-Founder",
        image: samriddhiImg.src
    },
    {
        name: "Navya Gupta",
        role: "Co-Founder",
        linkedin: "https://www.linkedin.com/in/navyaguptaofficial/",
        image: navyaImg.src
    }
];

export default function TeamPage() {
    const container: any = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const item: any = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    };

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />
            <div className="flex-1 pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                            Meet the Founders
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                            The team behind Amrielle, building thoughtful personal brands that feel clear, credible, and unforgettable.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto"
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div key={index} variants={item} className="flex flex-col items-center group">
                                <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-2xl relative border border-foreground/5 bg-pink-100">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                                        {member.linkedin ? (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white hover:text-accent transition-colors"
                                                aria-label={`${member.name} LinkedIn`}
                                            >
                                                <Linkedin size={24} />
                                            </a>
                                        ) : (
                                            <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                                                Co-Founder
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
                                    {member.name}
                                </h3>
                                <div className="text-sm font-bold tracking-widest text-accent uppercase">
                                    {member.role}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
            <Footer />
        </main>
    );
}
