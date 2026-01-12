'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Wifi, Hexagon, Wind, ShieldCheck, Thermometer, UserCheck } from 'lucide-react';

const amenities = [
    { icon: Hexagon, title: 'Hard-Shell HBOT', desc: 'Clinical-grade hyperbaric chambers pressurized to 2.0 ATA.' },
    { icon: Thermometer, title: 'Cryotherapy Suite', desc: 'Whole-body nitrogen-cooled chambers reaching -160°F.' },
    { icon: Wind, title: 'HEPA Filtration', desc: 'Hospital-grade air purification in all treatment suites.' },
    { icon: ShieldCheck, title: 'Private Entrances', desc: 'Discreet access points for high-profile clientele.' },
    { icon: Wifi, title: 'Fiber-Optic Network', desc: 'Secure, high-speed connectivity for remote work during treatments.' },
    { icon: UserCheck, title: 'Private Changing', desc: 'Individual en-suite changing rooms with luxury amenities.' },
];

export function FacilityDetails() {
    return (
        <section className="py-24 bg-navy">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-display text-ivory mb-6">The Facility</h2>
                    <p className="text-slate text-lg">
                        Designed not just for treatment, but for tranquility. Our clinic bridges the gap between a sterile medical facility and a luxury sanctuary.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amenities.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="p-6 bg-charcoal/50 border-white/5 flex items-start space-x-4 hover:bg-charcoal transition-colors">
                                <div className="p-3 bg-navy rounded-sm border border-white/10">
                                    <item.icon className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-display text-ivory mb-2">{item.title}</h3>
                                    <p className="text-slate text-sm">{item.desc}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
