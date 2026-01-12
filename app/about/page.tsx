'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ContactCTA } from '@/components/sections/contact-cta';
import { FacilityDetails } from '@/components/sections/facility-details';
import { Shield, Star, Users, Award } from 'lucide-react';

const values = [
    {
        icon: Shield,
        title: 'Discretion',
        description: 'Privacy is our practice. We protect your identity and your data with the same rigor we apply to your health.'
    },
    {
        icon: Star,
        title: 'Excellence',
        description: 'Good enough is not enough. We strive for the absolute peak of biological potential in every protocol.'
    },
    {
        icon: Users,
        title: 'Partnership',
        description: 'We are not just providers; we are partners in your longevity journey, invested in your long-term outcomes.'
    },
    {
        icon: Award,
        title: 'Results',
        description: 'Data-driven, outcome-focused medicine. We measure, optimize, and verify every intervention.'
    }
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center bg-navy overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy z-10" />
                <div className="container mx-auto px-4 relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-display font-light text-ivory mb-6"
                    >
                        The ADARE Approach
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-slate font-light max-w-2xl mx-auto"
                    >
                        Reimagining healthcare for those who refuse to compromise.
                    </motion.p>
                </div>
            </section>

            {/* Philosophy / Story */}
            <section className="py-24 bg-navy">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-display text-ivory mb-6">Why We Exist</h2>
                            <div className="space-y-6 text-slate leading-relaxed">
                                <p>
                                    Check-box medicine was built for the average. But you have never settled for average in any other aspect of your life. Why start with your health?
                                </p>
                                <p>
                                    ADARE was founded to close the gap between conventional unparalleled sick-care and true health optimization. We combine the hospitality of a five-star resort with the clinical rigor of a research institute.
                                </p>
                                <p>
                                    Our methodology is simple: Test, Don't Guess. We use advanced biomarkers, genetic analysis, and wearable data to construct a dynamic, real-time picture of your biology. Then, we intervene with precision.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-96 bg-charcoal rounded-sm overflow-hidden border border-white/5">
                            {/* Placeholder for facility image */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-charcoal">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display text-ivory mb-4">Our Core Values</h2>
                        <p className="text-slate opacity-80">The principles that guide our practice.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="h-full bg-navy/50 border-white/5 p-8 hover:bg-navy/80">
                                    <value.icon className="w-10 h-10 text-gold mb-6 opacity-80" />
                                    <h3 className="text-xl font-display text-ivory mb-3">{value.title}</h3>
                                    <p className="text-slate text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FacilityDetails />

            {/* Team */}
            <section className="py-24 bg-charcoal">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-display text-ivory mb-12">Leadership</h2>
                    <p className="max-w-2xl mx-auto text-slate text-lg mb-16">
                        Led by board-certified physicians and longevity experts, the ADARE clinical team represents the intersection of experience and innovation.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="text-left p-8 bg-navy/50 border border-white/5 rounded-sm">
                            <div className="text-gold text-lg font-display mb-1">Medical Director</div>
                            <h3 className="text-2xl text-ivory mb-4">Dr. Jonathan Vance, MD</h3>
                            <p className="text-slate text-sm leading-relaxed">
                                Double board-certified in Internal Medicine and Anti-Aging & Regenerative Medicine. Dr. Vance brings 15+ years of clinical experience, shifting his focus from acute disease management to proactive health optimization.
                            </p>
                        </div>
                        <div className="text-left p-8 bg-navy/50 border border-white/5 rounded-sm">
                            <div className="text-gold text-lg font-display mb-1">Head of Performance</div>
                            <h3 className="text-2xl text-ivory mb-4">Sarah Mitchell, MS, CSCS</h3>
                            <p className="text-slate text-sm leading-relaxed">
                                A former Olympian and exercise physiologist specializing in metabolic testing and VO2 max improvement. Sarah leads the diagnostic and athletic programming division at ADARE.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactCTA />
        </>
    );
}
