'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function ContactCTA() {
    return (
        <section className="py-32 bg-navy relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-5xl md:text-7xl font-display font-light text-ivory mb-8">
                    Begin the Conversation
                </h2>
                <p className="text-xl text-slate font-light mb-12 max-w-xl mx-auto">
                    South Tampa | St. Petersburg
                </p>

                <div className="flex flex-col items-center gap-6">
                    <Link href="/contact">
                        <Button size="lg" className="min-w-[240px]">
                            Request Consultation
                        </Button>
                    </Link>
                    <p className="text-sm text-slate uppercase tracking-widest opacity-60">
                        By Introduction or Appointment Only
                    </p>
                </div>
            </div>
        </section>
    );
}
