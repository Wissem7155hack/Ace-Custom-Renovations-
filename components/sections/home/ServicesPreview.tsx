import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { SERVICES } from '@/lib/constants';
import { imagesByFolder, allProjectImages } from '@/lib/allImages';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function ServicesPreview() {
  const featuredService = SERVICES[0];
  const otherServices = SERVICES.slice(1, 5);

  // pick a representative image for a service using a keyword search on folder names
  function pickServiceImage(serviceName: string) {
    const keyword = serviceName.split(' ')[0]; // e.g. "Kitchen" from "Kitchen Renovations"
    for (const folder of Object.keys(imagesByFolder)) {
      if (folder.toLowerCase().includes(keyword.toLowerCase())) {
        const arr = imagesByFolder[folder];
        if (arr && arr.length > 0) return arr[0];
      }
    }
    // fallback to first project image
    return allProjectImages[0];
  }

  const ServiceCard = ({ service, isFeatured = false }: { service: typeof SERVICES[0], isFeatured?: boolean }) => {
    const src = pickServiceImage(service.name);
    return (
      <Link href={`/services#${service.slug}`} className={cn(
        "group relative block overflow-hidden rounded-lg",
        isFeatured ? "col-span-1 md:col-span-2 row-span-1 md:row-span-2" : ""
      )}>
        <Card className="h-full w-full bg-secondary/50 border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
          {src && (
            <Image
              src={src}
              alt={service.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <CardContent className="relative flex flex-col justify-end h-full p-6">
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
              {service.name}
            </h3>
            <p className="mt-2 text-sm text-white/80 font-body">
              {service.description}
            </p>
            <div className="mt-4 text-primary font-semibold flex items-center gap-2">
              Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary uppercase font-sans tracking-widest">WHAT WE DO</Badge>
          <h2 className="text-4xl md:text-5xl">Comprehensive Renovation Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-body">
            From concept to completion — every project handled with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 h-[600px] md:h-[700px]">
          <ServiceCard service={featuredService} isFeatured />
          {otherServices.map(service => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/services">See All Services <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
