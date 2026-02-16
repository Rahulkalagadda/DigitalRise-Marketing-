import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceFeaturesGrid from "@/components/sections/ServiceFeaturesGrid";
import { Cpu, Bot, Zap, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
    title: "AI Agents | DigitalRise",
    description: "Intelligent automation systems for support, lead intake, and workflow operations.",
};

export default function AIAgentsPage() {
    return (
        <>
            <Header />
            <main className="relative min-h-screen bg-dr-navy text-white overflow-hidden pb-20">
                <ServiceHero
                    badge="Service"
                    badgeColor="text-dr-gold"
                    title={<>AI <span className="text-gradient-gold">Agents</span></>}
                    description="Automate 80% of your busywork. We deploy intelligent agents that handle support, lead qualification, and internal ops 24/7."
                    buttonText="Automate Now"
                    blobColor="bg-dr-gold/5"
                    blobPosition="top-[10%] left-[10%]"
                />

                <ServiceFeaturesGrid
                    borderColor="border-white/5"
                    hoverBorderColor="hover:border-dr-gold/20"
                    items={[
                        {
                            icon: Bot,
                            iconColor: "text-dr-gold",
                            title: "Support Agents",
                            description: "Instant, accurate responses to customer queries, available around the clock."
                        },
                        {
                            icon: MessageSquare,
                            iconColor: "text-dr-orange",
                            title: "Lead Intake",
                            description: "Agents that qualify leads on your site and book meetings directly into your calendar."
                        },
                        {
                            icon: Cpu,
                            iconColor: "text-white",
                            title: "Workflow Ops",
                            description: "Connect your apps (CRM, Slack, Email) to automate repetitive internal tasks."
                        },
                        {
                            icon: Zap,
                            iconColor: "text-dr-green",
                            title: "Custom Logic",
                            description: "Tailored agent behaviors designed specifically for your unique business processes."
                        }
                    ]}
                />
            </main>
            <Footer />
        </>
    );
}
