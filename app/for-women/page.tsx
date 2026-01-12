'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ContactCTA } from '@/components/sections/contact-cta';
import { womenAvatars } from '@/lib/avatars';
import { Sparkles, HeartPulse, Smile, Sunrise } from 'lucide-react';

const femaleFocus = [
    { icon: HeartPulse, title: 'Hormonal Harmony', text: 'Addressing menopause, thyriod function, and metabolic health with precision.' },
    { icon: Sparkles, title: 'Radiance', text: 'Inside-out aesthetic strategies combining peptides, gut health, and regenerative skin therapies.' },
    { icon: Sunrise, title: 'Vitality', text: 'Combat fatigue and optimize sleep architecture for sustained energy.' },
    { icon: Smile, title: 'Emotional Wellness', text: 'Neurotransmitter balancing to support mood, stress resilience, and clarity.' },
];

export default function ForWomenPage() {
    return (
        <>
            <section className="relative py-32 bg-navy text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display text-ivory mb-6"
                    >
                        For Women
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate max-w-2xl mx-auto font-light"
                    >
                        Protocols designed for female optimization.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 bg-charcoal">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {femaleFocus.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="h-full bg-navy/50 border-white/5 p-8 text-center hover:border-gold/30 transition-colors">
                                    <div className="flex justify-center mb-6">
                                        <item.icon className="w-12 h-12 text-gold opacity-80" />
                                    </div>
                                    <h3 className="text-xl font-display text-ivory mb-4">{item.title}</h3>
                                    <p className="text-slate text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-navy">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-3xl font-display text-ivory mb-12">Who We Treat</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {womenAvatars.map((avatar) => (
                            <div key={avatar.title} className="p-8 border border-white/5 rounded-sm bg-charcoal/50">
                                <avatar.icon className="w-12 h-12 text-gold mx-auto mb-6" />
                                <h3 className="text-xl text-ivory font-display mb-3">{avatar.title}</h3>
                                <p className="text-slate text-sm leading-relaxed">{avatar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactCTA />
        </>
    );
}
