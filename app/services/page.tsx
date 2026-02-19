import type { Metadata } from 'next';
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Full-scope renovation solutions for every room in your home. We offer kitchen and bathroom remodels, basement development, flooring, painting, and more in Prince George, BC.',
};

export default function ServicesPage() {
    return (
        <>
            <PageHero 
                headline="OUR SERVICES"
                subtitle="Full-scope renovation solutions for every room in your home."
                imagePlaceholderId="page-hero-services"
            />
             <section className="py-16 md:py-24 lg:py-32 text-center">
                <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
                     <h2 className="text-3xl font-headline">Detailed Services Information Coming Soon</h2>
                     <p className="mt-4 text-lg text-muted-foreground font-body">We are currently updating this page with detailed information about all our services. Please check back soon!</p>
                </div>
            </section>
        </>
    );
}
