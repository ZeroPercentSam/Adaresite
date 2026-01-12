'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
    question: string;
    answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left group"
            >
                <span className="text-lg text-ivory group-hover:text-gold transition-colors font-display tracking-wide">{question}</span>
                <div className={cn(
                    "w-6 h-6 flex items-center justify-center rounded-full border border-white/10 transition-colors duration-300",
                    isOpen ? "bg-gold border-gold text-navy" : "text-slate group-hover:border-gold group-hover:text-gold"
                )}>
                    <Plus className={cn("w-4 h-4 transition-transform duration-300", isOpen ? "rotate-45" : "")} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-slate leading-relaxed pr-8">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const defaultFaqs = [
    {
        question: "Do you accept insurance?",
        answer: "ADARE is a private, cash-pay practice. This model allows us to prioritize your health outcomes over insurance company mandates. We can provide super-bills for out-of-network reimbursement upon request."
    },
    {
        question: "How do I become a member?",
        answer: "Membership is by application or introduction only. We accept a limited number of new clients each quarter to ensure our physician-to-member ratio remains low."
    },
    {
        question: "Can I manage my HSA/FSA?",
        answer: "Yes, most of our services are eligible expenses for HSA and FSA accounts. We recommend checking with your specific administrator."
    }
];

export function FAQSection({ items = defaultFaqs, title = "Frequently Asked Questions" }: { items?: FAQItemProps[], title?: string }) {
    return (
        <section className="py-24 bg-navy">
            <div className="container mx-auto px-4 md:px-8 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-display text-ivory mb-12 text-center">{title}</h2>
                <div className="bg-charcoal/30 rounded-sm p-4 md:p-8 border border-white/5">
                    {items.map((item, i) => (
                        <FAQItem key={i} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
