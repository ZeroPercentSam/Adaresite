import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ContactCTA } from '@/components/sections/contact-cta';
import { services } from '@/lib/data';
import { Check } from 'lucide-react';
import { Metadata } from 'next';

// Generating static params for static export builds (optional but good practice)
export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) return { title: 'Service Not Found' };

    return {
        title: `${service.title} | ADARE`,
        description: service.shortDescription,
    };
}

import { ServiceHeroVisual } from '@/components/sections/service-hero-visual';

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center bg-navy overflow-hidden py-32 md:py-48">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-charcoal via-navy to-navy opacity-80" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Link href="/services" className="inline-block mb-8 text-gold text-sm uppercase tracking-widest hover:text-white transition-colors">
                                ← Back to Protocols
                            </Link>
                            <h1 className="text-5xl md:text-7xl font-display text-ivory mb-6">
                                {service.title}
                            </h1>
                            <p className="text-xl text-slate font-light leading-relaxed max-w-xl">
                                {service.fullDescription}
                            </p>
                        </div>
                        <div className="relative">
                            <ServiceHeroVisual slug={slug} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Details Grid */}
            <section className="py-24 bg-charcoal">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                        {/* Left Column: The Protocol & Science */}
                        <div>
                            <h2 className="text-3xl font-display text-ivory mb-8">The Protocol</h2>
                            <div className="grid grid-cols-1 gap-4 mb-12">
                                {service.features.map((feature) => (
                                    <Card key={feature} className="p-6 bg-navy/50 flex items-center border-white/5">
                                        <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                                            <Check className="w-4 h-4 text-gold" />
                                        </div>
                                        <span className="text-ivory">{feature}</span>
                                    </Card>
                                ))}
                            </div>

                            {/* Scientific Mechanism */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-display text-ivory mb-4">The Science</h3>
                                <p className="text-slate leading-relaxed">
                                    {service.scientificMechanism}
                                </p>
                            </div>

                            {/* Experience / Steps */}
                            <div>
                                <h3 className="text-2xl font-display text-ivory mb-6">The Experience</h3>
                                <div className="space-y-8 border-l border-white/10 ml-3 pl-8 relative">
                                    {service.processSteps.map((step, i) => (
                                        <div key={i} className="relative">
                                            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-navy border border-gold text-[10px] flex items-center justify-center text-gold">
                                                {i + 1}
                                            </span>
                                            <p className="text-slate">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Outcomes & Candidate */}
                        <div>
                            <div className="sticky top-32">
                                <h2 className="text-3xl font-display text-ivory mb-8">Expected Outcomes</h2>
                                <ul className="space-y-6 mb-12">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={benefit} className="flex items-start">
                                            <span className="text-gold mr-4 mt-1 font-display text-xl">0{i + 1}</span>
                                            <div>
                                                <h3 className="text-lg text-ivory font-medium mb-1">{benefit}</h3>
                                                <p className="text-slate text-sm">Optimized biological response.</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                {/* Ideal Candidate */}
                                <div className="mb-8 p-6 bg-navy/30 border border-white/5 rounded-sm">
                                    <h4 className="text-ivory font-display mb-2">Ideal Candidate</h4>
                                    <p className="text-slate text-sm">{service.idealCandidate}</p>
                                </div>

                                {/* Contraindications */}
                                <div className="mb-12 p-6 bg-navy/30 border border-white/5 rounded-sm">
                                    <h4 className="text-ivory font-display mb-2">Contraindications</h4>
                                    <p className="text-slate text-sm">{service.contraindications}</p>
                                </div>

                                <div className="p-8 bg-navy border border-white/5 rounded-sm">
                                    <h3 className="text-xl font-display text-ivory mb-4">Is this right for you?</h3>
                                    <p className="text-slate text-sm mb-6">
                                        Every protocol begins with a comprehensive evaluation to ensure it aligns with your unique physiology and goals.
                                    </p>
                                    <Link href="/contact">
                                        <Button className="w-full">Inquire About This Protocol</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* FAQ Section */}
                    <div className="mt-24 pt-24 border-t border-white/5">
                        <h2 className="text-3xl font-display text-ivory mb-12">Common Questions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                            {service.faqs.map((faq, i) => (
                                <div key={i} className="mb-8">
                                    <h3 className="text-lg text-gold mb-2">{faq.question}</h3>
                                    <p className="text-slate text-sm leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ContactCTA />
        </>
    );
}
