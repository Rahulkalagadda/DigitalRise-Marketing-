import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceFeaturesGrid from "@/components/sections/ServiceFeaturesGrid";
import { Layout, Server, Gauge, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Web Architecture | DigitalRise",
    description: "High-performance digital foundations designed to convert traffic into revenue.",
};

export default function WebArchitecturePage() {
    return (
        <>
            <Header />
            <main className="relative min-h-screen bg-dr-navy text-white overflow-hidden pb-20">
                <ServiceHero
                    badge="Service"
                    badgeColor="text-dr-gold"
                    title={<>Web <span className="text-gradient-gold">Architecture</span></>}
                    description="We don't just build websites. We engineer high-performance digital foundations designed to convert traffic into revenue."
                    buttonText="START PROJECT"
                    blobColor="bg-dr-gold/5"
                    blobPosition="top-[10%] left-[20%]"
                />

                <ServiceFeaturesGrid
                    borderColor="border-white/5"
                    hoverBorderColor="hover:border-dr-gold/20"
                    items={[
                        {
                            icon: Layout,
                            iconColor: "text-dr-gold",
                            title: "UX/UI Design",
                            description: "Premium, user-centric designs that guide visitors seamlessly towards conversion points."
                        },
                        {
                            icon: Gauge,
                            iconColor: "text-dr-orange",
                            title: "Performance",
                            description: "Lightning-fast load times ensuring excellent Core Web Vitals and lower bounce rates."
                        },
                        {
                            icon: Server,
                            iconColor: "text-dr-green",
                            title: "Scalable Tech",
                            description: "Built on modern frameworks like Next.js that scale effortlessly as your business grows."
                        },
                        {
                            icon: ShieldCheck,
                            iconColor: "text-white",
                            title: "SEO Native",
                            description: "Technical SEO baked into the code structure from day one for maximum visibility."
                        }
                    ]}
                />
            </main>
            <Footer />
        </>
    );
}
