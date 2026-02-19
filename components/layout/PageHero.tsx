import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface PageHeroProps {
  headline: string;
  subtitle: string;
  imagePlaceholderId: string;
}

export function PageHero({ headline, subtitle, imagePlaceholderId }: PageHeroProps) {
  const heroImage = PlaceHolderImages.find(p => p.id === imagePlaceholderId);

  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center">
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
      <div className="absolute inset-0 bg-background/70 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      <div className="relative z-10 container mx-auto max-w-[1400px] px-6 md:px-12 text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline">
          {headline}
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 font-body">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
