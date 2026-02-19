import Link from 'next/link';
import { Facebook } from 'lucide-react';

import { Logo } from './Logo';
import { COMPANY_DETAILS, NAV_LINKS, SERVICES } from '@/lib/constants';

export function Footer() {
  const quickLinks = NAV_LINKS.slice(0, 6);
  const serviceLinks = SERVICES;

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground font-body">{COMPANY_DETAILS.tagline}</p>
            <a href={COMPANY_DETAILS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook />
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-foreground tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map(service => (
                <li key={service.slug}>
                  <Link href={`/services#${service.slug}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground tracking-wider uppercase mb-4">Contact Us</h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="text-muted-foreground">{COMPANY_DETAILS.address}</li>
              <li>
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {COMPANY_DETAILS.phone_display}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="border-t border-border py-6">
         <div className="container mx-auto max-w-[1400px] px-6 md:px-12 text-center text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved. | {COMPANY_DETAILS.address}</p>
         </div>
      </div>
    </footer>
  );
}
