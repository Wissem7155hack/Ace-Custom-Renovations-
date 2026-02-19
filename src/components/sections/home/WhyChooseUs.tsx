import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WHY_CHOOSE_US_LIST } from '@/lib/constants';
import { imagesByFolder, allProjectImages } from '@/lib/allImages';

export function WhyChooseUs() {
  // pick a generic image (use first from Ace Custom Renovations folder or fallback)
  const imageSrc = (imagesByFolder['Ace Custom Renovations'] && imagesByFolder['Ace Custom Renovations'][0]) || allProjectImages[0];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-w-4 aspect-h-5">
            {imageSrc && (
              <Image
                src={imageSrc}
                alt="Why choose us"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            )}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-lg -z-10" />
          </div>

          <div>
            <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary uppercase font-sans tracking-widest">
              Why Ace?
            </Badge>
            <h2 className="text-4xl md:text-5xl">Local Experts Who Care About Your Home</h2>
            <p className="mt-6 text-lg text-muted-foreground font-body">
              We're not a big-box contractor. We're your neighbors in Prince George. Every renovation is personal to us — we treat your home like our own.
            </p>
            <Card className="mt-8 bg-secondary/50 border-l-4 border-primary">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {WHY_CHOOSE_US_LIST.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
