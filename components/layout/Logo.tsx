import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex flex-col items-start leading-none group" aria-label="Ace Custom Renovations Home">
      <span className="font-headline text-3xl md:text-4xl text-primary tracking-wider transition-colors group-hover:text-brand-blue-glow">ACE</span>
      <span className="text-[10px] text-primary/80 tracking-[0.2em] transition-colors group-hover:text-primary/90">CUSTOM RENOVATIONS</span>
    </Link>
  );
}
