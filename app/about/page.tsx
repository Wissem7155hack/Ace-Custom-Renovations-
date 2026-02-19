import Image from "next/image";
import logoWhite from '@/images/logo_white.jpg';
import type { Metadata } from 'next';
import { PageHero } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ABOUT_VALUES } from "@/lib/constants";
import { imagesByFolder, allProjectImages } from '@/lib/allImages';

export const metadata: Metadata = {
    title: 'About Us',
    description: `Learn about the story, values, and mission of Ace Custom Renovations. We are a locally owned and operated business in Prince George, BC, dedicated to quality craftsmanship.`,
};

export default function AboutPage() {
    const storySrc = (imagesByFolder['Ace Custom Renovations'] && imagesByFolder['Ace Custom Renovations'][0]) || allProjectImages[0];

    return (
        <>
            <PageHero
                headline="ABOUT ACE CUSTOM RENOVATIONS"
                subtitle="Built on trust. Rooted in Prince George."
                imagePlaceholderId="page-hero-about"
            />

            <section className="py-16 md:py-24 lg:py-32">
                <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="relative aspect-w-1 aspect-h-1 md:aspect-w-4 md:aspect-h-5">
                            {storySrc && (
                                <Image
                                    src={storySrc}
                                    alt="About story"
                                    fill
                                    className="object-cover rounded-lg shadow-2xl"
                                />
                            )}
                            <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-primary rounded-lg -z-10" />
                        </div>
                        <div className="prose prose-invert prose-lg max-w-none font-body">
                            <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary uppercase font-sans tracking-widest">
                                OUR STORY
                            </Badge>
                            <h2 className="font-headline text-4xl md:text-5xl text-foreground">More Than a Contractor — A Neighbor You Can Trust</h2>
                            <p className="text-muted-foreground">
                                Ace Custom Renovations was founded in Prince George, BC with one goal: to deliver exceptional renovation work that lasts. We're a locally owned and operated business, proud to serve the families and homeowners of the BC Interior.
                            </p>
                            <p className="text-muted-foreground">
                                Every project we take on is a commitment — not just to a deadline or a budget, but to the people who live in the homes we build. We believe great renovations start with great communication, transparent pricing, and also a handshake you can trust.
                            </p>
                            <div className="mt-8 relative h-20 w-48">
                                <Image
                                    src={logoWhite}
                                    alt="Ace Custom Renovations Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 lg:py-32 bg-card">
                <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {ABOUT_VALUES.map((value) => (
                            <Card key={value.title} className="bg-secondary/50 text-center border-t-4 border-primary">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                                        <value.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <CardTitle className="pt-4 !font-sans !normal-case !tracking-normal text-2xl">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground font-body">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
