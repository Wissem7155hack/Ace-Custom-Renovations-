"use client";

import { STATS } from "@/lib/constants";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
}

export function StatsBar() {
  return (
    <section className="bg-card border-y border-border">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, index) => {
            const numberMatch = stat.number.match(/(\d+)/);
            const targetNumber = numberMatch ? parseInt(numberMatch[0], 10) : 0;
            const suffix = stat.number.replace(/\d+/, '');

            return (
              <div key={stat.label} className="relative flex flex-col items-center justify-center text-center p-6 h-32 md:h-40">
                <p className="text-4xl md:text-5xl font-headline text-primary">
                  <AnimatedCounter target={targetNumber} />
                  {suffix}
                </p>
                <p className="mt-2 text-sm uppercase font-sans tracking-widest text-muted-foreground">{stat.label}</p>
                 {index < STATS.length - 1 && (
                  <Separator orientation="vertical" className="absolute right-0 top-1/4 h-1/2 bg-border hidden md:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
