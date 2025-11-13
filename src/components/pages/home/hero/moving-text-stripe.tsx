// FILE: src/components/pages/home/hero/moving-text-stripe.tsx

"use client";

import { BoltIcon } from "@/components/icons/texture/urban/bolt";
import { CrownIcon } from "@/components/icons/texture/urban/crown";
import { SmileIcon } from "@/components/icons/texture/urban/smile";
import { SmileyLoveIcon } from "@/components/icons/texture/urban/smiley-love";
import { useState } from "react";

interface MovingTextStripeProps {
  keywords: string[];
  backgroundColor?: string;
  textColor?: string;
}

const icons = [BoltIcon, CrownIcon, SmileIcon, SmileyLoveIcon];

export function MovingTextStripe({
  keywords,
  backgroundColor = "var(--color-primary-main)",
  textColor = "#FFFFFF",
}: MovingTextStripeProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Create pattern: keyword + icon, repeated
  const pattern = keywords.map((keyword, index) => ({
    text: keyword,
    Icon: icons[index % icons.length],
  }));

  // Repeat the pattern multiple times for seamless loop
  const segments = Array(10).fill(pattern).flat();

  return (
    <div
      className="w-full px-6 py-2 md:py-1.5 overflow-hidden flex items-center"
      style={{ backgroundColor }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex whitespace-nowrap items-center transition-all duration-1000 ease-in-out"
        style={{
          animation: isPaused
            ? "scroll 40s linear infinite paused"
            : "scroll 40s linear infinite",
        }}
      >
        {[...segments, ...segments].map((segment, index) => (
          <span
            key={`segment-${index}`}
            className="inline-flex items-center gap-3 mx-3"
            style={{
              color: textColor,
            }}
          >
            <span
              className="text-sm font-medium"
              style={{
                lineHeight: "1.28",
                letterSpacing: "0.03em",
              }}
            >
              {segment.text}
            </span>
            <segment.Icon color={textColor} className="flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
