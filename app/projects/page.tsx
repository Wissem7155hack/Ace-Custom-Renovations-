import type { Metadata } from 'next';
import { PageHero } from "@/components/layout/PageHero";
import Image from 'next/image';
import { imagesByFolder } from '@/lib/allImages';

export const metadata: Metadata = {
    title: 'Our Projects',
    description: 'Explore our portfolio of completed renovation projects in Prince George, BC. See real transformations of kitchens, bathrooms, and entire homes.',
};

export default function ProjectsPage() {
    return (
        <>
            <PageHero
                headline="OUR PROJECTS"
                subtitle="Real transformations. Real Prince George homes."
                imagePlaceholderId="page-hero-projects"
            />
            <section className="py-16 md:py-24 lg:py-32 text-center">
                <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
                    <h2 className="text-3xl font-headline mb-8">Project Showcase</h2>
                    {Object.entries(imagesByFolder)
                        .filter(([folder]) => !['arrows.png', 'grid.png', 'logo_white.jpg', 'moroccan-flower.png'].includes(folder))
                        .map(([folder, imgs]) => (
                            <div key={folder} className="mb-12">
                                <h3 className="text-2xl font-semibold mb-4 capitalize">{folder.replace(/-/g, ' ')}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {imgs.map((src, idx) => (
                                        <div key={idx} className="relative w-full h-48 rounded overflow-hidden">
                                            <Image
                                                src={src}
                                                alt={`${folder} project ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </>
    );
}
