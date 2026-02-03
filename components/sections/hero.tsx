'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy">
            {/* Background with overlay */}
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/60 to-navy z-10" />
                <Image
                    src="/images/home-hero.png"
                    alt="Adare Clinic Atmosphere"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-ivory mb-6 leading-tight tracking-tight">
                        The Science of <br />
                        <span className="italic text-champagne">Exceptional Living</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-slate text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        For those who&apos;ve built extraordinary lives — and demand extraordinary health to match.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link href="/contact">
                        <Button size="lg" className="min-w-[200px]">
                            Request a Private Consultation
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold to-transparent opacity-50" />
            </motion.div>
        </section>
    );
}
