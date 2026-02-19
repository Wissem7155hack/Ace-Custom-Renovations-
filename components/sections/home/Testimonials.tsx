import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary uppercase font-sans tracking-widest">
            CLIENT REVIEWS
          </Badge>
          <h2 className="text-4xl md:text-5xl">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="bg-secondary/50 border-l-4 border-primary flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <Quote className="w-12 h-12 text-primary/20 mb-4" />
                <p className="font-body italic text-foreground/90 flex-grow">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="mt-4 font-semibold text-foreground">{testimonial.client}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
