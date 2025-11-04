// FILE: src/components/ui/sections/section-wrapper.tsx

"use client";

import { useEffect, useRef } from "react";
import { useHeaderTheme } from "@/contexts/header-theme-context";

interface SectionWrapperProps {
  children: React.ReactNode;
  headerTheme: "light" | "dark";
  className?: string;
}

export function SectionWrapper({
  children,
  headerTheme,
  className = "",
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { setTheme } = useHeaderTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTheme(headerTheme);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-100px 0px 0px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [headerTheme, setTheme]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
