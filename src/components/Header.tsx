"use client";

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        handleScroll(); // Check initially
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Team', href: '/team' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
                "fixed top-0 inset-x-0 w-full px-6 py-6 md:px-12 flex items-center justify-between z-50 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <Link href="/" className="flex items-center gap-3 text-2xl font-serif font-bold tracking-tight text-foreground cursor-pointer shrink-0">
                <Image src={logoImg} alt="Amrielle Logo" className="w-10 h-10 rounded-xl" />
                Amrielle.
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                            "text-sm font-semibold tracking-wide uppercase transition-colors hover:text-accent",
                            pathname === link.href ? "text-accent" : "text-foreground/80"
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* Mobile Menu Button - can be wired later to a drawer if needed */}
            <button aria-label="Menu" className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors text-foreground">
                <Menu className="w-6 h-6" />
            </button>
        </motion.header>
    );
}
