'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/data';

interface ServiceHeroVisualProps {
    slug: string;
}

export function ServiceHeroVisual({ slug }: ServiceHeroVisualProps) {
    const service = services.find((s) => s.slug === slug);

    if (!service) return null;

    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center relative w-full h-full min-h-[400px]"
        >
            {/* Abstract Glowing Background */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gold/5 blur-[80px] rounded-full"
            />

            {/* The Mega Icon */}
            <div className="relative z-10">
                <Icon
                    strokeWidth={0.5}
                    className="w-[400px] h-[400px] text-ivory/10 drop-shadow-2xl"
                />

                {/* Overlay for "metallic" shine effect (optional, keeping simple for now) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/5 to-transparent bg-clip-text" />
            </div>
        </motion.div>
    );
}
