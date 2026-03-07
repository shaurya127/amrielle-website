"use client";

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "fixed top-0 inset-x-0 w-full px-6 py-6 md:px-12 flex items-center justify-between z-50 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <div className="text-2xl font-serif font-bold tracking-tight text-foreground cursor-pointer shrink-0">
                Amrielle.
            </div>
            <button aria-label="Menu" className="p-2 hover:bg-black/5 rounded-full transition-colors text-foreground">
                <Menu className="w-6 h-6" />
            </button>
        </motion.header>
    );
}
