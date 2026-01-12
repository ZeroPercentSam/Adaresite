'use client';

import { motion } from 'framer-motion';
import { Search, Activity, Zap, RefreshCw } from 'lucide-react';
import { Card } from '@/components/ui/card';

const steps = [
    {
        icon: Search,
        title: 'Discover',
        description: 'We begin with a deep dive into your medical history, lifestyle, and goals. No detail is too small.'
    },
    {
        icon: Activity,
        title: 'Measure',
        description: 'We employ advanced diagnostics—genomics, blood work, and biometrics—to establish your biological baseline.'
    },
    {
        icon: Zap,
        title: 'Optimize',
        description: 'Implementation of your bespoke protocol, from hormone balancing to cellular recovery sessions.'
    },
    {
        icon: RefreshCw,
        title: 'Evolve',
        description: 'Continuous monitoring and quarterly re-evaluation to adapt your plan as your physiology improves.'
    }
];

export function ProcessSteps() {
    return (
        <section className="py-24 bg-navy relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-display text-ivory mb-6">The ADARE Standard</h2>
                    <p className="text-slate text-lg">
                        A systematic, data-driven methodology designed to take you from baseline to peak performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-charcoal border border-gold/20 flex items-center justify-center mb-6 relative z-10">
                                    <step.icon className="w-8 h-8 text-gold" />
                                </div>
                                {i !== steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[1px] bg-gradient-to-r from-gold/20 to-transparent -z-0" />
                                )}
                                <h3 className="text-xl font-display text-ivory mb-4">{step.title}</h3>
                                <p className="text-slate text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
