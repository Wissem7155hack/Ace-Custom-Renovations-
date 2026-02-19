import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with Ace Custom Renovations for a free estimate on your project in Prince George, BC. Call, email, or fill out our contact form.`,
};

export default function ContactPage() {
    return (
        <>
            <PageHero 
                headline="GET IN TOUCH"
                subtitle="Ready to start your renovation? We'd love to hear from you."
                imagePlaceholderId="page-hero-contact"
            />
             <section className="py-16 md:py-24 lg:py-32">
                <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl">Contact Information</h2>
                             <p className="mt-4 text-lg text-muted-foreground font-body">
                                Whether you have a simple question or are ready to book a consultation, please don't hesitate to reach out. We offer free, detailed estimates and respond to all inquiries promptly.
                            </p>
                            <div className="mt-12 space-y-8">
                                {CONTACT_INFO.map((item) => (
                                    <div key={item.value} className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            {item.href ? (
                                                <Link href={item.href} target={item.value === 'Facebook' ? '_blank' : undefined} className="font-semibold text-lg text-foreground hover:text-primary transition-colors">{item.value}</Link>
                                            ) : (
                                                <p className="font-semibold text-lg text-foreground">{item.value}</p>
                                            )}
                                            <p className="text-muted-foreground text-sm">{item.note}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                             <h2 className="text-3xl md:text-4xl mb-8">Send Us a Message</h2>
                             <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
