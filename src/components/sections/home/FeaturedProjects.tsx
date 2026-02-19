import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { imagesByFolder, allProjectImages } from '@/lib/allImages';
import { FEATURED_PROJECTS } from '@/lib/constants';

export function FeaturedProjects() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary uppercase font-sans tracking-widest">
            OUR WORK
          </Badge>
          <h2 className="text-4xl md:text-5xl">Recent Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, index) => {
            // choose folder by matching category keyword
            function pickForCategory(cat: string) {
              for (const folder of Object.keys(imagesByFolder)) {
                if (folder.toLowerCase().includes(cat.toLowerCase())) {
                  const arr = imagesByFolder[folder];
                  if (arr && arr.length > 0) return arr[0];
                }
              }
              return allProjectImages[index] || allProjectImages[0];
            }
            const src = pickForCategory(project.category);
            return (
              <Link href="/projects" key={index} className="group">
                <Card className="overflow-hidden border-2 border-transparent hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-0 relative aspect-w-4 aspect-h-3">
                    {src && (
                      <Image
                        src={src}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                    <div className="absolute bottom-0 left-0 p-6 w-full translate-y-1/2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/90 to-transparent pt-20">
                      <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-primary mt-2 flex items-center">View Project <ArrowRight className="ml-2 h-4 w-4" /></p>
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 w-full group-hover:translate-y-full transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/projects">View All Projects <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
