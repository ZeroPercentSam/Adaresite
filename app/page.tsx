import { Hero } from '@/components/sections/hero';
import { Philosophy } from '@/components/sections/philosophy';
import { ProcessSteps } from '@/components/sections/process-steps';
import { ServicesPreview } from '@/components/sections/services-preview';
import { MembershipPreview } from '@/components/sections/membership-preview';
import { Testimonials } from '@/components/sections/testimonials';
import { Discretion } from '@/components/sections/discretion';
import { FAQSection } from '@/components/sections/faq-section';
import { ContactCTA } from '@/components/sections/contact-cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ProcessSteps />
      <ServicesPreview />
      <MembershipPreview />
      <Testimonials />
      <Discretion />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
