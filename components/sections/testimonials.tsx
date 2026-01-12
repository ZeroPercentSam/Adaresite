'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const testimonials = [
    {
        quote: "I've had concierge medicine before, but never anything this comprehensive. ADARE didn't just fix my fatigue; they gave me a second wind in my 50s.",
        author: "Marc S.",
        role: "Venture Capital Partner"
    },
    {
        quote: "The level of detail in the diagnostics is unmatched. Seeing the data change my protocol in real-time gave me complete confidence in the process.",
        author: "Elena R.",
        role: "Technology Executive"
    },
    {
        quote: "Privacy was my main concern. ADARE operates with the discretion of a Swiss bank and the hospitality of a 5-star resort.",
        author: "James T.",
        role: "Professional Athlete"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-charcoal">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-4xl font-display text-ivory text-center mb-16">Voices of ADARE</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="h-full p-8 bg-navy/30 border-white/5 relative">
                                <Quote className="w-8 h-8 text-gold/20 mb-6" />
                                <p className="text-slate italic mb-8 leading-relaxed">
                                    &quot;{t.quote}&quot;
                                </p>
                                <div>
                                    <div className="text-ivory font-medium">{t.author}</div>
                                    <div className="text-gold text-xs uppercase tracking-widest">{t.role}</div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
