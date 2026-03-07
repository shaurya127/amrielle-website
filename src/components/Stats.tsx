"use client";

import React from 'react';
import { TrendingUp, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Stats() {
    const stats = [
        {
            id: 1,
            icon: TrendingUp,
            value: "5K+",
            label: "Followers",
            subLabel: "GROWTH",
            description: "in 5 months"
        },
        {
            id: 2,
            icon: Users,
            value: "Top 1%",
            label: "Community",
            subLabel: "COMMUNITY",
            description: "Engagement Rate"
        },
        {
            id: 3,
            icon: Award,
            value: "Premium",
            label: "Quality",
            subLabel: "QUALITY",
            description: "Content Production"
        }
    ];

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        },
    };

    return (
        <section className="w-full py-16 px-6 bg-gradient-to-b from-background to-white/50 border-t border-foreground/5 relative overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6"
            >
                {stats.map((stat) => (
                    <motion.div key={stat.id} variants={itemVariants} className="flex flex-col items-center text-center space-y-2 w-full md:w-1/3 group">
                        <div className="text-accent/60 mb-2 p-4 rounded-full bg-accent/5 transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                            <stat.icon size={32} strokeWidth={1.5} />
                        </div>
                        <div className="text-4xl font-serif font-bold text-foreground">
                            {stat.value}
                        </div>
                        <div className="text-xl font-serif font-semibold text-foreground/80 mb-1">
                            {stat.label}
                        </div>
                        <div className="text-xs font-bold tracking-widest text-accent uppercase">
                            {stat.subLabel}
                        </div>
                        <div className="text-sm text-foreground/50">
                            {stat.description}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
