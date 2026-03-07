"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full px-6 py-16 bg-[#300510] text-[#E0AFC0] flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center"
            >
                <Link href="/" className="text-4xl font-serif font-bold text-white mb-6 inline-block">
                    Amrielle
                </Link>
                <p className="text-lg mb-12 text-white/80 font-sans max-w-md leading-relaxed">
                    Every story deserves to be seen in its best light.
                </p>
                <div className="text-sm opacity-60 font-sans">
                    © {new Date().getFullYear()} Amrielle Branding. All rights reserved.
                </div>
            </motion.div>
        </footer>
    );
}
