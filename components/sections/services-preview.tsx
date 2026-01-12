'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Zap, Sparkles, Dna, Microscope, HeartPulse } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
    {
        icon: Zap,
        title: 'Cellular Optimization',
        description: 'Advanced protocols including Red Light Therapy and HBOT to recharge at the cellular level.',
        slug: 'cellular-recovery',
    },
    {
        icon: Activity,
        title: 'Hormone Intelligence',
        description: 'Precision BHRT programs designed to restore peak biological performance.',
        slug: 'hormone-optimization',
    },
    {
        icon: Sparkles,
        title: 'Regenerative Aesthetics',
        description: 'Subtle, impactful enhancements using neurotoxins, fillers, and collagen stimulators.',
        slug: 'aesthetics',
    },
    {
        icon: Dna,
        title: 'Longevity Science',
        description: 'Everything from peptide therapies to genetic analysis for proactive health management.',
        slug: 'longevity-science',
    },
    {
        icon: Microscope,
        title: 'Peptide Protocols',
        description: 'Targeted signaling molecules (BPC-157, Tesamorelin) to accelerate repair and growth.',
        slug: 'peptide-therapy',
    },
    {
        icon: HeartPulse,
        title: 'Concierge Medicine',
        description: '24/7 access, global travel support, and comprehensive care management.',
        slug: 'concierge',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function ServicesPreview() {
    return (
        <section className="py-24 bg-navy">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-display text-ivory mb-4">Core Protocols</h2>
                        <p className="text-slate text-lg">Comprehensive strategies for total biological optimization.</p>
                    </div>
                    <Link
                        href="/services"
                        className="hidden md:flex items-center text-gold uppercase tracking-widest text-sm hover:text-white transition-colors mt-6 md:mt-0"
                    >
                        Explore All Services <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {services.map((service) => (
                        <motion.div key={service.slug} variants={item}>
                            <Link href={`/services/${service.slug}`}>
                                <Card className="h-full p-8 flex flex-col justify-between group cursor-pointer border-white/5 bg-charcoal/50 hover:bg-charcoal/80">
                                    <div>
                                        <service.icon className="w-10 h-10 text-gold mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                                        <h3 className="text-xl font-display text-ivory mb-3">{service.title}</h3>
                                        <p className="text-slate text-sm leading-relaxed mb-6 group-hover:text-ivory/80 transition-colors">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center text-gold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        Learn More <ArrowRight className="ml-2 w-3 h-3" />
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 md:hidden text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-gold uppercase tracking-widest text-sm hover:text-white transition-colors"
                    >
                        Explore All Services <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
