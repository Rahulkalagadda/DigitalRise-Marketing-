"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Layout, BarChart3, Megaphone, Cpu, Clapperboard, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredService, setHoveredService] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const services = [
        { title: "Web Architecture", href: "/web-architecture", icon: Layout, desc: "High-performance digital foundations" },
        { title: "Paid Advertising", href: "/paid-advertising", icon: BarChart3, desc: "ROI-focused acquisition campaigns" },
        { title: "Organic Growth", href: "/organic-growth", icon: Megaphone, desc: "SEO and social dominance" },
        { title: "AI Agents", href: "/ai-agents", icon: Cpu, desc: "Intelligent automation systems" },
        { title: "Content Creation", href: "/content-creation", icon: Clapperboard, desc: "Storytelling that converts" },
    ];

    const handleMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        setHoveredService(true);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setHoveredService(false);
        }, 200);
        setTimeoutId(id);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || hoveredService
                ? "bg-[#0A0E1A]/90 backdrop-blur-md border-b border-white/5 py-2"
                : "bg-transparent py-4"
                }`}
            onMouseLeave={handleMouseLeave}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-50">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-[300px] h-[80px] group-hover:scale-105 transition-transform">
                        <Image
                            src="/Proposal_-_Proposal-removebg-preview.png"
                            alt="DigitalRise"
                            fill
                            className="object-contain object-left scale-150 origin-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <div
                        onMouseEnter={handleMouseEnter}
                        className="relative h-full flex items-center"
                    >
                        <Link
                            href="/#services"
                            className="text-sm font-medium text-white/70 hover:text-[#D4AF37] transition-colors tracking-wide flex items-center gap-1"
                        >
                            Services
                            <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredService ? 'rotate-180 text-[#D4AF37]' : ''}`} />
                        </Link>
                    </div>

                    <Link
                        href="/#process"
                        className="text-sm font-medium text-white/70 hover:text-[#D4AF37] transition-colors tracking-wide"
                    >
                        Process
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium text-white/70 hover:text-[#D4AF37] transition-colors tracking-wide"
                    >
                        About
                    </Link>
                    <Link
                        href="/partnership"
                        className="text-sm font-medium text-white/70 hover:text-[#D4AF37] transition-colors tracking-wide"
                    >
                        Partnership
                    </Link>
                    <Link
                        href="/#contact"
                        className="text-sm font-medium text-white/70 hover:text-[#D4AF37] transition-colors tracking-wide"
                    >
                        Contact
                    </Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/booking"
                        className="px-6 py-2.5 bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-[#D4AF37] hover:text-[#0A0E1A] hover:border-[#D4AF37] transition-all duration-300"
                    >
                        Start Project
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-[#D4AF37] transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Megamenu */}
            <AnimatePresence>
                {hoveredService && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="hidden md:block absolute top-[100%] left-0 right-0 bg-[#0A0E1A]/95 backdrop-blur-xl border-t border-white/5 shadow-2xl py-12"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
                            <div className="col-span-1">
                                <h4 className="text-xs font-black tracking-[0.2em] text-[#D4AF37] uppercase mb-4">Our Services</h4>
                                <h3 className="text-2xl font-bold text-white mb-4">Integrated Growth Architecture</h3>
                                <p className="text-sm text-white/50 leading-relaxed mb-6">
                                    We don't just run ads or build websites. We build interconnected systems that compound over time.
                                </p>
                                <Link href="/#services" className="text-sm font-bold text-white underline decoration-[#D4AF37] underline-offset-4 hover:text-[#D4AF37] transition-colors">
                                    View All Services
                                </Link>
                            </div>
                            <div className="col-span-3 grid grid-cols-3 gap-6">
                                {services.map((service) => (
                                    <Link
                                        key={service.title}
                                        href={service.href}
                                        className="group p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-300"
                                    >
                                        <service.icon size={24} className="text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform" />
                                        <h5 className="font-bold text-white text-sm mb-1 group-hover:text-[#D4AF37] transition-colors">{service.title}</h5>
                                        <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors">{service.desc}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0A0E1A] border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            <div className="border-b border-white/5 pb-4">
                                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-4">Services</span>
                                <div className="grid gap-4 pl-4">
                                    {services.map((service) => (
                                        <Link
                                            key={service.title}
                                            href={service.href}
                                            className="text-base text-white/80 hover:text-[#D4AF37] transition-colors flex items-center gap-3"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <service.icon size={16} className="text-[#D4AF37]" />
                                            {service.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href="/#process"
                                className="text-lg font-medium text-white/80 hover:text-[#D4AF37] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Process
                            </Link>
                            <Link
                                href="/about"
                                className="text-lg font-medium text-white/80 hover:text-[#D4AF37] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/partnership"
                                className="text-lg font-medium text-white/80 hover:text-[#D4AF37] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Partnership
                            </Link>
                            <Link
                                href="/#contact"
                                className="text-lg font-medium text-white/80 hover:text-[#D4AF37] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link
                                href="/booking"
                                className="px-6 py-4 bg-[#D4AF37] text-[#0A0E1A] text-center font-bold tracking-widest uppercase rounded-lg hover:bg-[#E6B325] transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Start Project
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
