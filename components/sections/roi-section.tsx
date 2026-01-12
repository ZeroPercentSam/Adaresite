'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, ShieldAlert, Heart } from 'lucide-react';

const roiPoints = [
    {
        icon: Clock,
        title: 'Time Reclaimed',
        desc: 'Average executive saves 40+ hours/year avoiding waiting rooms and navigating referrals.'
    },
    {
        icon: ShieldAlert,
        title: 'Risk Mitigated',
        desc: 'Early detection of cardiovascular and metabolic risks saves not just money, but life-years.'
    },
    {
        icon: TrendingUp,
        title: 'Performance Asset',
        desc: 'Optimized energy and cognition are competitive advantages in high-stakes careers.'
    },
    {
        icon: Heart,
        title: 'Legacy Protection',
        desc: 'Health is the wealth you pass down. Being active for your grandchildren is priceless.'
    }
];

export function RoiSection() {
    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-30" />
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-display text-ivory mb-6">The ROI of Health</h2>
                    <p className="text-slate text-lg">
                        Membership is an investment, not an expense. When calculated against value delivered, the return is exponential.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {roiPoints.map((point, i) => (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 mx-auto bg-charcoal rounded-full border border-gold/10 flex items-center justify-center mb-6">
                                <point.icon className="w-8 h-8 text-gold" />
                            </div>
                            <h3 className="text-lg font-display text-ivory mb-3">{point.title}</h3>
                            <p className="text-slate text-sm leading-relaxed">{point.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
