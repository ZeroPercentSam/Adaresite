'use client';

import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export function Discretion() {
    return (
        <section className="py-24 bg-navy relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-charcoal/30 border border-white/5 p-8 md:p-12 rounded-sm backdrop-blur-md">
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-navy border border-gold/20 flex items-center justify-center text-gold">
                            <Lock size={32} strokeWidth={1.5} />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-display text-ivory mb-4">
                            Your privacy is not a policy. It&apos;s a practice.
                        </h2>
                        <p className="text-slate leading-relaxed mb-6">
                            From private entrances and encrypted communication to confidential billing and NDA-bound staff, every aspect of the ADARE experience is engineered for total discretion. We understand that for our members, privacy is a non-negotiable asset.
                        </p>
                        <div className="text-gold text-sm uppercase tracking-widest font-medium">
                            HIPAA Compliant &bull; Private Billing &bull; Concierge Confidentiality
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
