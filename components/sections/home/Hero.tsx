import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const trustBadges = ["Licensed & Insured", "Local Prince George Business", "Free Estimates"];

  return (
    <section className="relative h-[100vh] min-h-[700px] w-full flex items-center justify-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-background/50 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-glow-radial-accent" />

      <div className="relative z-10 container mx-auto max-w-[1400px] px-6 md:px-12 text-center flex flex-col items-center">
        <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary uppercase font-sans tracking-widest">
          Prince George's Premier Renovation Experts
        </Badge>
        <h1 className="text-5xl md:text-7xl lg:text-8xl max-w-4xl">
          Built to Last. Designed to Impress.
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl font-body text-foreground/80">
          From kitchen remodels to full-home transformations, Ace Custom Renovations brings decades of craftsmanship to every project in Prince George, BC.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-brand-blue-glow text-lg px-8 py-6 animate-pulse-glow transition-all duration-300 hover:shadow-glow-primary-hover">
            <Link href="/contact">Get Your Free Quote →</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-foreground/80 hover:bg-white/10 hover:border-white">
            <Link href="/projects">View Our Work</Link>
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-foreground/70">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
         <ChevronDown className="w-8 h-8 text-white/50 animate-slow-bounce" />
      </div>
    </section>
  );
}
