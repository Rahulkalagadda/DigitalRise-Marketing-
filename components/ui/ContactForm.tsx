'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        goal: '',
        name: '',
        email: '',
        website: '',
        brief: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="glass p-10 rounded-[2.5rem] border border-white/5 relative">
            <h4 className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase mb-6">
                Contact
            </h4>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="goal" className="block text-xs font-bold mb-3 text-white/60">
                        What do you want to improve?
                    </label>
                    <select
                        id="goal"
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
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
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-[#C4A747] transition-colors placeholder:text-white/20"
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
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-[#C4A747] transition-colors placeholder:text-white/20"
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
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yourcompany.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-[#C4A747] transition-colors placeholder:text-white/20"
                    />
                </div>

                <div>
                    <label htmlFor="brief" className="block text-xs font-bold mb-3 text-white/60">
                        Project brief
                    </label>
                    <textarea
                        id="brief"
                        name="brief"
                        value={formData.brief}
                        onChange={handleChange}
                        placeholder="Tell us about your goals and challenges..."
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-[#C4A747] transition-colors placeholder:text-white/20 resize-none"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full px-8 py-5 bg-[#FF6B4A] text-white font-black text-xs tracking-widest rounded-xl hover:bg-[#FF7A59] transition-all shadow-lg shadow-[#FF6B4A]/10 hover:shadow-[#FF6B4A]/20"
                >
                    SEND MESSAGE
                </button>

                <div className="text-center">
                    <a
                        href="/booking"
                        className="text-xs text-white/40 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2"
                    >
                        Or book a call
                        <iconify-icon icon="lucide:arrow-right" className="text-xs"></iconify-icon>
                    </a>
                </div>
            </form>
        </div>
    );
}
