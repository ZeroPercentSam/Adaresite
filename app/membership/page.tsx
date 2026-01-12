'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ContactCTA } from '@/components/sections/contact-cta';
import { RoiSection } from '@/components/sections/roi-section';
import { Check } from 'lucide-react';

const benefits = [
    'Unlimited Priority Access',
    'Comprehensive Baseline Diagnostics',
    'Personalized Nutrition & Training Protocol',
    'Quarterly Blood Panel Analysis',
    'Access to Advanced Recovery Modalities',
    'Direct Physician Communication',
    'Global Medical Concierge Support'
];

export default function MembershipPage() {
    return (
        <>
            <section className="relative py-32 bg-navy text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display text-ivory mb-6"
                    >
                        Membership
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate max-w-2xl mx-auto font-light"
                    >
                        Investment in your biological future.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 bg-charcoal">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-3xl font-display text-ivory mb-6">The ADARE Advantage</h2>
                            <p className="text-slate leading-relaxed mb-8">
                                Traditional healthcare is reactive and transactional. ADARE is proactive and relational. Our membership model enables us to maintain a low patient-to-physician ratio, ensuring that you receive the time, attention, and deep intellectual focus your health deserves.
                            </p>
                            <div className="space-y-4">
                                {benefits.map((benefit) => (
                                    <div key={benefit} className="flex items-center text-slate">
                                        <Check className="w-5 h-5 text-gold mr-4" />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full min-h-[400px]">
                            <div className="absolute inset-0 bg-navy/50 rounded-sm border border-white/5 p-8 flex flex-col justify-center">
                                <h3 className="text-2xl font-display text-ivory mb-4">By Application Only</h3>
                                <p className="text-slate mb-8">
                                    To maintain our standards of care, we accept a limited number of new members each quarter.
                                </p>
                                <Button className="w-full">Request Membership Application</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RoiSection />

            <ContactCTA />
        </>
    );
}
