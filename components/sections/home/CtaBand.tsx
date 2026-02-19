import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { COMPANY_DETAILS } from '@/lib/constants';

export function CtaBand() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-secondary to-card">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl max-w-3xl mx-auto">
          Ready to Transform Your Home?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto font-body">
          Contact us today for a free, no-obligation estimate and let's start building your dream space.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-brand-blue-glow text-lg px-8 py-6 hover:shadow-glow-primary transition-shadow">
            <a href={`tel:${COMPANY_DETAILS.phone}`}>Call Now: {COMPANY_DETAILS.phone_display}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-foreground/80 hover:bg-white/10 hover:border-white">
            <Link href="/contact">Email Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
