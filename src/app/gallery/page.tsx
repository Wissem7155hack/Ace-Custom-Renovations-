import type { Metadata } from 'next';
import { PageHero } from "@/components/layout/PageHero";
import Image from 'next/image';
import { imagesByFolder } from '@/lib/allImages';

export const metadata: Metadata = {
    title: 'Gallery',
    description: 'A visual showcase of our finest renovation work in Prince George, BC. Explore our gallery of kitchens, bathrooms, basements, and more.',
};

export default function GalleryPage() {
    return (
        <>
            <PageHero
                headline="GALLERY"
                subtitle="A visual showcase of our finest work."
                imagePlaceholderId="page-hero-gallery"
            />
            <section className="py-16 md:py-24 lg:py-32 text-center">
                <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
                    <h2 className="text-3xl font-headline mb-8">Gallery</h2>
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
                                                alt={`${folder} photo ${idx + 1}`}
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
