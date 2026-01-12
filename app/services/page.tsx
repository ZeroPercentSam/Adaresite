'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ContactCTA } from '@/components/sections/contact-cta';
import { services } from '@/lib/data';

export default function ServicesPage() {
    return (
        <>
            <section className="relative py-32 bg-navy text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display text-ivory mb-6"
                    >
                        Clinical Protocols
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate max-w-2xl mx-auto font-light"
                    >
                        Scientifically validated interventions designed to optimize human biology.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 bg-charcoal">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link href={`/services/${service.slug}`}>
                                    <Card className="h-full group hover:bg-navy/50 transition-colors p-8 flex flex-col">
                                        <div className="mb-6">
                                            <service.icon className="w-12 h-12 text-gold opacity-80 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <h2 className="text-2xl font-display text-ivory mb-4 group-hover:text-gold transition-colors">{service.title}</h2>
                                        <p className="text-slate text-sm leading-relaxed mb-8 flex-grow">
                                            {service.shortDescription}
                                        </p>
                                        <div className="flex items-center text-gold text-xs uppercase tracking-widest font-medium">
                                            View Protocol <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactCTA />
        </>
    );
}
