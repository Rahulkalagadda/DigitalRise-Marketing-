import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceFeaturesGrid from "@/components/sections/ServiceFeaturesGrid";
import { Clapperboard, PenTool, Image as ImageIcon, Video } from "lucide-react";

export const metadata: Metadata = {
    title: "Content Creation | DigitalRise",
    description: "High-fidelity video, copywriting, and design that tells your story and drives action.",
};

export default function ContentCreationPage() {
    return (
        <>
            <Header />
            <main className="relative min-h-screen bg-dr-navy text-white overflow-hidden pb-20">
                <ServiceHero
                    badge="Service"
                    badgeColor="text-dr-orange"
                    title={<>Content <span className="text-gradient-gold">Creation</span></>}
                    description="Capture attention in a noisy world. We produce high-fidelity content that tells your story and drives action."
                    buttonText="Get Created"
                    blobColor="bg-dr-orange/5"
                    blobPosition="top-[10%] right-[10%]"
                />

                <ServiceFeaturesGrid
                    borderColor="border-white/5"
                    hoverBorderColor="hover:border-dr-orange/20"
                    items={[
                        {
                            icon: Video,
                            iconColor: "text-dr-orange",
                            title: "Video Production",
                            description: "Short-form reels, long-form YouTube, and promotional videos with professional editing."
                        },
                        {
                            icon: PenTool,
                            iconColor: "text-dr-gold",
                            title: "Copywriting",
                            description: "Compelling scripts, ad copy, and articles that speak directly to your customer's pain points."
                        },
                        {
                            icon: ImageIcon,
                            iconColor: "text-white",
                            title: "Graphic Design",
                            description: "Thumbnails, social posts, and ad creatives designed to stop the scroll."
                        },
                        {
                            icon: Clapperboard,
                            iconColor: "text-dr-green",
                            title: "Strategy",
                            description: "Content calendars and distribution plans to ensure consistency and growth."
                        }
                    ]}
                />
            </main>
            <Footer />
        </>
    );
}
