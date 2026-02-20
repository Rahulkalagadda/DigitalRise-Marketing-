import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/ui/ServiceCard';
import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import { MousePointer2, Target, Phone, Sparkles, ArrowRight } from 'lucide-react';


export default function Home() {
  return (
    <>
      <Header />

      <main className="relative z-10">
        {/* Ambient Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-dr-gold/10 rounded-full blur-[120px] opacity-40" />
          <div className="absolute top-[40%] -left-[5%] w-[400px] h-[400px] bg-dr-orange/5 rounded-full blur-[120px] opacity-30" />
        </div>

        <Hero />

        {/* Services Section */}
        <section id="services" className="py-32 px-8 bg-dr-navy relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="max-w-3xl">
                <h2 className="text-xs font-black tracking-[0.4em] text-dr-gold uppercase mb-6">
                  Services
                </h2>
                <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white">
                  Everything you need to grow—<span className="text-dr-text/40">under one roof.</span>
                </h3>
                <p className="mt-8 text-dr-text/40 text-lg max-w-xl">
                  A tight system across website, ads, organic, automation, and content—designed to work together and multiply results.
                </p>
              </div>

              <a
                href="/booking"
                className="px-8 py-4 glass border border-dr-gold/20 text-dr-gold font-bold text-xs tracking-widest rounded-full hover:bg-dr-gold/10 transition-all"
              >
                GET A CUSTOM PLAN
              </a>
            </div>

            {/* First Row: 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <ServiceCard
                icon="lucide:layout-template"
                badge="Conversion-first"
                badgeColor="gold"
                title="Web Development"
                description="High-performance landing pages and full websites with premium UI, clean code, and SEO baked in."
                feature="Speedy GSC LCP"
                link="/web-architecture"
              />

              <ServiceCard
                icon="lucide:bar-chart-3"
                badge="Measured ROI"
                badgeColor="orange"
                title="Paid Advertising"
                description="Campaign architecture, creative testing, and landing page alignment to cut waste and scale profitability."
                feature="Meta, Google, TikTok"
                link="/web-architecture"
              />

              <ServiceCard
                icon="lucide:megaphone"
                badge="Compounding"
                badgeColor="green"
                title="Organic Advertising"
                description="SEO, social strategy, and systemized publishing that builds trust and lowers CAC over time."
                feature="SEO + Social"
                link="/web-architecture"
              />
            </div>

            {/* Second Row: 4-8 Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <ServiceCard
                  icon="lucide:cpu"
                  badge="Automation-ops"
                  badgeColor="gold"
                  title="AI Agents"
                  description="Custom AI agents for lead intake, qualification, follow-ups, reporting, and internal workflows—reliably."
                  feature="CRM connections"
                  link="/web-architecture"
                />
              </div>

              <div className="lg:col-span-8">
                <ServiceCard
                  icon="lucide:clapperboard"
                  badge="Full-pipeline"
                  badgeColor="orange"
                  title="Content Creator Services"
                  description="Content systems, scripts, editing, thumbnails, and distribution. We build your attention engine and convert it to offers."
                  feature=""
                  link="/web-architecture"
                  wide
                  tags={['Short-form', 'Long-form', 'Design', 'Distribution']}
                  deliveryStats={[
                    { label: 'Weekly output', value: '3-20 assets' },
                    { label: 'Creative testing', value: 'Built-in' },
                    { label: 'Turnaround', value: '48-72h' },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Methodology / Why Us Section */}
        <section id="process" className="py-32 px-8 bg-dr-navy relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h4 className="text-xs font-black tracking-[0.4em] text-dr-gold uppercase mb-6">
                How We Win
              </h4>
              <h3 className="text-5xl font-black tracking-tight leading-none mb-10">
                A system, not a one-off campaign.
              </h3>
              <p className="text-dr-text/60 text-lg mb-12">
                We connect your website, ads, organic, AI automations, and content into a single growth loop—so every improvement compounds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="px-8 py-4 bg-dr-gold text-dr-navy font-black text-xs tracking-widest rounded-xl hover:bg-dr-gold-hover transition-all text-center"
                >
                  SEE THE PROCESS
                </a>
                <a
                  href="#"
                  className="px-8 py-4 border border-white/20 font-black text-xs tracking-widest rounded-xl hover:bg-white/5 transition-all text-center"
                >
                  REQUEST PRICING
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Website Card */}
              <div className="glass p-6 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">
                    Website
                  </span>
                  <MousePointer2 className="text-white/20 w-5 h-5" />
                </div>
                <p className="text-sm font-black mb-2">Faster load + cleaner flow</p>
                <p className="text-[10px] text-white/40 leading-relaxed">
                  Reduce friction. Increase conversions.
                </p>
              </div>

              {/* Ads Card */}
              <div className="glass p-6 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">
                    Ads
                  </span>
                  <Target className="text-white/20 w-5 h-5" />
                </div>
                <p className="text-sm font-black mb-2">Creative testing engine</p>
                <p className="text-[10px] text-white/40 leading-relaxed">
                  Scale winners. Cut losers.
                </p>
              </div>

              {/* Automation Card */}
              <div className="glass p-6 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">
                    Automation
                  </span>
                  <Phone className="text-white/20 w-5 h-5" />
                </div>
                <p className="text-sm font-black mb-2">Agents + reporting</p>
                <p className="text-[10px] text-white/40 leading-relaxed">
                  Less busywork. More output.
                </p>
              </div>

              {/* Full Width Card */}
              <div className="glass p-8 rounded-2xl border border-white/5 sm:col-span-3 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <Sparkles className="text-dr-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-black mb-1">High impact, minimal drag</p>
                    <p className="text-[10px] text-white/40">
                      Clear deliverables + weekly checkpoints
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-4">
                  <span className="flex items-center gap-1 text-[10px] font-bold text-white/60">
                    <div className="w-2 h-2 rounded-full bg-dr-gold"></div>
                    Strategy
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-white/60">
                    <div className="w-2 h-2 rounded-full bg-dr-orange"></div>
                    Execution
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-white/60">
                    <div className="w-2 h-2 rounded-full bg-dr-green"></div>
                    Optimization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <FAQ />

        {/* Contact Section */}
        <section id="contact" className="py-32 px-8 bg-dr-navy relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="mb-12">
                <h4 className="text-[10px] font-black tracking-[0.4em] text-dr-gold uppercase mb-6">
                  Progress
                </h4>
                <h3 className="text-5xl font-black tracking-tight leading-none mb-8">
                  Clarity first. Then momentum.
                </h3>
                <p className="text-dr-text/60 text-lg">
                  Every engagement starts with a fast audit, then we execute a focused sprint and iterate weekly based on data.
                </p>
              </div>

              <div className="space-y-4">
                {/* Process Card 1 */}
                <div className="glass p-8 rounded-2xl border border-white/5 flex gap-8 items-start hover:border-dr-gold/20 transition-all">
                  <span className="w-10 h-10 rounded-lg border border-dr-gold/20 flex items-center justify-center text-[10px] font-black text-dr-gold flex-shrink-0 mt-1">
                    01
                  </span>
                  <div>
                    <h5 className="text-lg font-black mb-2">Audit + positioning</h5>
                    <p className="text-sm text-white/40 leading-relaxed">
                      We identify leverage points in your funnel, offer, and acquisition channels.
                    </p>
                  </div>
                </div>

                {/* Process Card 2 */}
                <div className="glass p-8 rounded-2xl border border-white/5 flex gap-8 items-start hover:border-dr-orange/20 transition-all">
                  <span className="w-10 h-10 rounded-lg border border-dr-orange/20 flex items-center justify-center text-[10px] font-black text-dr-orange flex-shrink-0 mt-1">
                    02
                  </span>
                  <div>
                    <h5 className="text-lg font-black mb-2">Build + launch sprint</h5>
                    <p className="text-sm text-white/40 leading-relaxed">
                      Landing pages, ads, content, and automations shipped fast—aligned to one goal.
                    </p>
                  </div>
                </div>

                {/* Process Card 3 */}
                <div className="glass p-8 rounded-2xl border border-white/5 flex gap-8 items-start hover:border-dr-green/20 transition-all">
                  <span className="w-10 h-10 rounded-lg border border-dr-green/20 flex items-center justify-center text-[10px] font-black text-dr-green flex-shrink-0 mt-1">
                    03
                  </span>
                  <div>
                    <h5 className="text-lg font-black mb-2">Optimize + compound</h5>
                    <p className="text-sm text-white/40 leading-relaxed">
                      We test, measure, and refine weekly to turn improvements into predictable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass p-10 rounded-[2.5rem] border border-white/5 relative">
                <h4 className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase mb-6">
                  Contact
                </h4>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="goal" className="block text-xs font-bold mb-3 text-white/60">
                      What do you want to improve?
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="website">Website Performance</option>
                      <option value="ads">Paid Advertising</option>
                      <option value="organic">Organic Growth</option>
                      <option value="automation">AI Automation</option>
                      <option value="content">Content Creation</option>
                      <option value="all">Complete System</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-xs font-bold mb-3 text-white/60">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors placeholder:text-white/20"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold mb-3 text-white/60">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors placeholder:text-white/20"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-xs font-bold mb-3 text-white/60">
                      Company website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      placeholder="https://yourcompany.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors placeholder:text-white/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="brief" className="block text-xs font-bold mb-3 text-white/60">
                      Project brief
                    </label>
                    <textarea
                      id="brief"
                      name="brief"
                      placeholder="Tell us about your goals and challenges..."
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-dr-gold transition-colors placeholder:text-white/20 resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-5 bg-dr-gold text-dr-navy font-black text-xs tracking-widest rounded-xl hover:bg-dr-gold-hover transition-all shadow-lg shadow-dr-gold/10 hover:shadow-dr-gold/20"
                  >
                    SEND MESSAGE
                  </button>

                  <div className="text-center">
                    <a
                      href="/booking"
                      className="text-xs text-white/40 hover:text-dr-gold transition-colors inline-flex items-center gap-2"
                    >
                      Or book a call
                      <ArrowRight className="w-3 h-3 text-xs" />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Location / Service Area Section */}
        <section className="py-20 px-8 bg-dr-navy/50 border-t border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <h4 className="text-[10px] font-black tracking-[0.4em] text-dr-gold uppercase mb-8">
              Service Area
            </h4>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-xl font-black text-white">BADLAPUR</div>
              <div className="text-xl font-black text-white">MUMBAI</div>
              <div className="text-xl font-black text-white">MAHARASHTRA</div>
              <div className="text-xl font-black text-white">INDIA</div>
              <div className="text-xl font-black text-white">GLOBAL</div>
            </div>
            <p className="mt-8 text-dr-text/30 text-xs font-medium tracking-tight">
              Providing premium digital marketing and AI solutions in Badlapur, Mumbai, and across India.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
