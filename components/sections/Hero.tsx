"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DigitalRise Marketing",
        "description": "We synthesize cutting-edge AI, performance advertising, and bespoke web architecture to scale high-growth brands at velocity.",
        "url": "https://digitalrisemarketing.com",
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-5xl mx-auto text-center z-10">
                <div className="flex items-center justify-center gap-3 mb-10">
                    <span className="h-[1px] w-8 bg-dr-gold/40" />
                    <span className="text-dr-gold text-xs font-bold tracking-[0.4em] uppercase">
                        Digital Growth Architects
                    </span>
                    <span className="h-[1px] w-8 bg-dr-gold/40" />
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-12">
                    RISE ABOVE <br />
                    <span className="text-gradient-gold bg-clip-text text-transparent bg-gradient-to-r from-dr-gold via-white to-dr-gold animate-shine">THE NOISE</span>
                </h1>

                <p className="text-lg md:text-xl text-dr-text/60 max-w-2xl mx-auto mb-16 leading-relaxed">
                    We synthesize cutting-edge AI, performance advertising, and bespoke web architecture to scale high-growth brands at velocity.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    <Link
                        href="/booking"
                        className="group relative px-10 py-5 bg-dr-orange text-white font-bold rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl shadow-dr-orange/20 hover:scale-105 flex items-center gap-2"
                        aria-label="Start Your Ascent - Book a Call"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            START YOUR ASCENT
                            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>

                    <Link
                        href="#services"
                        className="flex items-center gap-3 text-xs font-bold tracking-widest text-dr-text/40 hover:text-dr-gold transition-colors"
                        aria-label="Explore Our Services"
                    >
                        EXPLORE OUR SERVICES
                        <div className="w-10 h-[1px] bg-current" />
                    </Link>
                </div>
            </div>

            {/* Optional Background Gradient for Hero specifically if page background isn't enough */}
            {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-dr-navy/0 via-dr-navy/50 to-dr-navy h-32 bottom-0 w-full" /> */}
        </section>
    );
};

export default Hero;
