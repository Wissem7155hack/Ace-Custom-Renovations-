import { Award, Check, Facebook, GanttChartSquare, Gem, Handshake, HeartHandshake, Home, Image, Layers, Mail, MapPin, Paintbrush, Phone, ShieldCheck, Star, TreePine, User, Wrench } from "lucide-react";
import type { LucideIcon } from 'lucide-react';

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export const COMPANY_DETAILS = {
  name: "Ace Custom Renovations",
  tagline: "Crafted With Precision. Built With Pride.",
  email: "acecustomreno@gmail.com",
  phone: "+12506085931",
  phone_display: "+1 (250) 608-5931",
  address: "Prince George, BC, Canada",
  facebook: "https://www.facebook.com/acecustomrenovations",
  mission: "Ace Custom Renovations transforms houses into homes — delivering expert craftsmanship, modern design, and dependable service across Prince George and the surrounding BC Interior."
};

export const STATS = [
  { number: "150+", label: "Projects Completed" },
  { number: "10+", label: "Years of Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "100%", label: "Licensed & Insured" },
];

export const SERVICES: {
  name: string;
  description: string;
  icon: LucideIcon;
  imagePlaceholderId: string;
  slug: string;
}[] = [
    {
      name: "Kitchen Renovations",
      description: "Transform the heart of your home. We handle cabinets, countertops, backsplashes, lighting, and full kitchen remodels.",
      icon: GanttChartSquare,
      imagePlaceholderId: "service-kitchen",
      slug: "kitchens"
    },
    {
      name: "Bathroom Remodels",
      description: "Full bathroom renovations, custom tile work, modern vanities, high-efficiency fixtures, and luxurious walk-in showers.",
      icon: Wrench,
      imagePlaceholderId: "service-bathroom",
      slug: "bathrooms"
    },
    {
      name: "Basement Development",
      description: "Turn unused space into a livable, functional area, from home theaters to suites.",
      icon: Layers,
      imagePlaceholderId: "service-basement",
      slug: "basements"
    },
    {
      name: "Flooring & Tile",
      description: "Expert installation of hardwood, LVP, tile, and laminate flooring for a flawless finish.",
      icon: Gem,
      imagePlaceholderId: "service-flooring",
      slug: "flooring"
    },
    {
      name: "Painting & Drywall",
      description: "Professional interior and exterior painting, drywall repair, and texture matching for a perfect look.",
      icon: Paintbrush,
      imagePlaceholderId: "service-painting",
      slug: "painting"
    },
    {
      name: "Decks & Outdoor Spaces",
      description: "Custom deck builds, pergolas, and outdoor living areas to extend your home's comfort.",
      icon: TreePine,
      imagePlaceholderId: "service-decks",
      slug: "decks"
    },
  ];

export const FEATURED_PROJECTS = [
  {
    title: "Modern Farmhouse Kitchen",
    category: "Kitchen",
    imagePlaceholderId: "project-1",
  },
  {
    title: "Spa-Inspired Ensuite",
    category: "Bathroom",
    imagePlaceholderId: "project-2",
  },
  {
    title: "Open Concept Living",
    category: "Full Home",
    imagePlaceholderId: "project-3",
  },
];

export const WHY_CHOOSE_US_LIST = [
  { text: "Free, detailed project estimates", icon: Check },
  { text: "Transparent pricing — no surprises", icon: Check },
  { text: "Fully licensed & insured in BC", icon: Check },
  { text: "On-time project completion guarantee", icon: Check },
  { text: "5-year craftsmanship warranty", icon: Check },
  { text: "Local Prince George team", icon: Check },
];

export const TESTIMONIALS = [
  {
    quote: "Ace Custom Renovations completely transformed our outdated kitchen into a modern masterpiece. Their attention to detail was incredible. We couldn't be happier!",
    client: "Sarah & Tom L.",
    location: "Prince George, BC",
    rating: 5,
  },
  {
    quote: "The team was professional, on time, and the quality of their work is second to none. Our new basement is now the best room in the house. Highly recommend!",
    client: "Mike D.",
    location: "Prince George, BC",
    rating: 5,
  },
  {
    quote: "From the initial quote to the final walkthrough, the process was seamless. They listened to our ideas and delivered a bathroom that exceeded our expectations.",
    client: "Jessica P.",
    location: "Prince George, BC",
    rating: 5,
  },
];

export const CONTACT_INFO = [
  { icon: Phone, value: COMPANY_DETAILS.phone_display, note: "Call or text — Mon–Sat, 8am to 6pm", href: `tel:${COMPANY_DETAILS.phone}` },
  { icon: Mail, value: COMPANY_DETAILS.email, note: "We reply within 24 hours", href: `mailto:${COMPANY_DETAILS.email}` },
  { icon: MapPin, value: COMPANY_DETAILS.address, note: "Serving PG and surrounding BC Interior" },
  { icon: Facebook, value: "Facebook", note: "Follow for project updates", href: COMPANY_DETAILS.facebook },
];

export const ABOUT_VALUES = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "We don't cut corners. Every joint, tile, and finish is done right, guaranteed."
  },
  {
    icon: Handshake,
    title: "Client-First Approach",
    description: "Your vision is our blueprint. We ensure open communication throughout every stage."
  },
  {
    icon: Home,
    title: "Proudly Local",
    description: "Born and raised in Prince George — we're invested in building up our community."
  }
];
