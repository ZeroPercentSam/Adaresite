'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        // Simulate API call
        console.log('Form Data:', data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <>
            <section className="relative py-32 bg-navy text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display text-ivory mb-6"
                    >
                        Begin the Conversation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate max-w-2xl mx-auto font-light"
                    >
                        South Tampa | St. Petersburg
                    </motion.p>
                </div>
            </section>

            <section className="py-24 bg-charcoal">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-display text-ivory mb-8">By Introduction or Appointment</h2>
                            <p className="text-slate leading-relaxed mb-12">
                                ADARE operates primarily by referral. If you have been introduced by a current member, please note their name in your inquiry. For new applicants, we review submissions weekly.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-gold mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-ivory font-medium mb-1">Locations</h3>
                                        <p className="text-slate text-sm">Hyde Park Village, South Tampa</p>
                                        <p className="text-slate text-sm">Beach Drive, St. Petersburg</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="w-6 h-6 text-gold mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-ivory font-medium mb-1">Email</h3>
                                        <p className="text-slate text-sm">concierge@adare.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="w-6 h-6 text-gold mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-ivory font-medium mb-1">Phone</h3>
                                        <p className="text-slate text-sm">(813) 555-0123</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <Card className="p-8 md:p-12 bg-navy/50 border-white/5">
                                {isSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center py-12"
                                    >
                                        <h3 className="text-2xl font-display text-gold mb-4">Inquiry Received</h3>
                                        <p className="text-slate">
                                            Thank you for your interest in ADARE. Our concierge team will review your information and be in touch shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs text-slate uppercase tracking-widest">First Name</label>
                                                <Input
                                                    {...register('firstName', { required: true })}
                                                    error={!!errors.firstName}
                                                    placeholder="Jane"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs text-slate uppercase tracking-widest">Last Name</label>
                                                <Input
                                                    {...register('lastName', { required: true })}
                                                    error={!!errors.lastName}
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs text-slate uppercase tracking-widest">Email</label>
                                            <Input
                                                type="email"
                                                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                                error={!!errors.email}
                                                placeholder="jane@example.com"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs text-slate uppercase tracking-widest">Phone</label>
                                            <Input
                                                type="tel"
                                                {...register('phone', { required: true })}
                                                error={!!errors.phone}
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs text-slate uppercase tracking-widest">Your Goals</label>
                                            <textarea
                                                {...register('message')}
                                                className="flex min-h-[120px] w-full rounded-sm border border-white/10 bg-transparent px-3 py-2 text-sm text-ivory placeholder:text-slate focus-visible:outline-none focus-visible:border-gold focus-visible:ring-gold focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-300"
                                                placeholder="Tell us about your health objectives..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full mt-4"
                                            isLoading={isSubmitting}
                                        >
                                            Request Consultation
                                        </Button>
                                    </form>
                                )}
                            </Card>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
