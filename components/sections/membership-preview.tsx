'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const tiers = [
    {
        name: 'Essential',
        price: 'Starting at $15,000/yr',
        description: 'Foundational longevity protocols and quarterly diagnostics.',
    },
    {
        name: 'Performance',
        price: 'Starting at $25,000/yr',
        description: 'Enhanced optimization with hormonal and metabolic support.',
    },
    {
        name: 'Signature',
        price: 'Starting at $45,000/yr',
        description: 'Comprehensive concierge care with advanced regenerative therapies.',
    },
    {
        name: 'Bespoke',
        price: 'Custom Inquires Only',
        description: 'Unlimited access and protocol design for global lifestyles.',
    },
];

export function MembershipPreview() {
    return (
        <section className="py-24 bg-charcoal relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-navy rounded-full mix-blend-multiply filter blur-[128px] opacity-50" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full mix-blend-overlay filter blur-[128px] opacity-20" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-display text-ivory mb-6">Membership Tiers</h2>
                    <p className="text-slate text-lg leading-relaxed">
                        ADARE offers four distinct levels of partnership, each designed to meet the specific demands of your lifestyle and biological ambition.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full flex flex-col justify-between py-10 px-6 border-white/5 bg-navy/50 backdrop-blur-sm hover:border-gold/30 hover:bg-navy/80 transition-all duration-300">
                                <div>
                                    <h3 className="text-2xl font-display text-ivory mb-2">{tier.name}</h3>
                                    <div className="text-gold text-sm font-medium uppercase tracking-wider mb-6 pb-6 border-b border-white/5">
                                        {tier.price}
                                    </div>
                                    <p className="text-slate text-sm leading-relaxed mb-8">
                                        {tier.description}
                                    </p>
                                </div>
                                <Link href="/membership" className="w-full">
                                    <Button variant="secondary" className="w-full text-xs">
                                        View Details
                                    </Button>
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate text-sm mb-6">Limited availability per quarter.</p>
                    <Link href="/contact">
                        <Button variant="outline">Discuss Membership</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
