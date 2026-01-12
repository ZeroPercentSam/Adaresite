export default function PrivacyPage() {
    return (
        <section className="py-32 bg-navy min-h-screen">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-display text-ivory mb-12">Privacy & Discretion</h1>

                <div className="space-y-12 text-slate leading-relaxed">
                    <div>
                        <h2 className="text-2xl font-display text-ivory mb-4">HIPAA Compliance</h2>
                        <p>
                            ADARE is fully compliant with the Health Insurance Portability and Accountability Act (HIPAA). We employ enterprise-grade encryption for all digital records and maintain strict physical security protocols at our facilities. Your health data is accessible only to your direct care team.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-display text-ivory mb-4">Confidentiality</h2>
                        <p>
                            We understand the profile of our membership base. All staff sign comprehensive non-disclosure agreements. We do not confirm or deny membership to any third party without explicit written consent.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-display text-ivory mb-4">Private Billing</h2>
                        <p>
                            Billing descriptions are discreet. We do not sell or share financial or personal data with marketing agencies or third-party partners.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-display text-ivory mb-4">Facility Access</h2>
                        <p>
                            Our facilities are designed with private entrances and exit routes to ensure member anonymity. Appointment scheduling is staggered to minimize overlap in common areas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
