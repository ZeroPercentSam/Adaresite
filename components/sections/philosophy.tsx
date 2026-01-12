'use client';

import { motion } from 'framer-motion';

export function Philosophy() {
    return (
        <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-light text-ivory mb-8 leading-relaxed">
                            &quot;We don&apos;t treat patients. <br />
                            <span className="text-gold italic">We partner with principals.</span>&quot;
                        </h2>
                        <p className="text-slate text-lg md:text-xl leading-relaxed font-light">
                            ADARE operates on an exclusive, invitation-based model designed for high-performing individuals. We move beyond traditional reactive medicine into proactive biological optimization, leveraging advanced diagnostics, hormone intelligence, and regenerative protocols to extend not just lifespan, but healthspan.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
