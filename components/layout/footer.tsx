import Link from 'next/link';

const footerLinks = {
    protocols: [
        { name: 'Cellular Optimization', href: '/services/cellular-recovery' },
        { name: 'Hormone Intelligence', href: '/services/hormone-optimization' },
        { name: 'Regenerative Aesthetics', href: '/services/aesthetics' },
        { name: 'Concierge Medicine', href: '/services/concierge' },
    ],
    company: [
        { name: 'About ADARE', href: '/about' },
        { name: 'Membership', href: '/membership' },
        { name: 'For Men', href: '/for-men' },
        { name: 'For Women', href: '/for-women' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Contact', href: '/contact' },
    ],
};

export function Footer() {
    return (
        <footer className="bg-navy border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <h2 className="text-3xl font-display font-light tracking-wide text-ivory">ADARE</h2>
                        </Link>
                        <p className="text-slate text-sm leading-relaxed max-w-xs">
                            Exclusive, invitation-based wellness practice for high-performers. Science-backed protocols for extraordinary health.
                        </p>
                        <div className="text-gold text-sm uppercase tracking-widest">
                            South Tampa | St. Petersburg
                        </div>
                    </div>

                    <div>
                        <h3 className="text-ivory font-display text-lg mb-6">Protocols</h3>
                        <ul className="space-y-4">
                            {footerLinks.protocols.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate hover:text-gold transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-ivory font-display text-lg mb-6">Explore</h3>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate hover:text-gold transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-ivory font-display text-lg mb-6">By Introduction Only</h3>
                        <p className="text-slate text-sm leading-relaxed mb-6">
                            ADARE accepts a limited number of members annually to ensure the highest level of care.
                        </p>
                        <div className="space-y-2 text-sm text-slate">
                            <p>Mon-Fri: 8am - 6pm</p>
                            <p>Sat: By Appointment</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} ADARE Wellness. All rights reserved.</p>
                    <div className="flex gap-6">
                        {footerLinks.legal.map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-gold transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
