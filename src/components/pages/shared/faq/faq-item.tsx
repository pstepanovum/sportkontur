// FILE: src/components/pages/shared/faq/faq-item.tsx

"use client";

import { ChevronDown } from "@/components/icons/chevron-down";
import { ChevronUp } from "@/components/icons/chevron-up";
import { Texture } from "@/components/icons/texture/texture";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div
      className="rounded-[24px] overflow-hidden transition-all duration-300 relative"
      style={{
        backgroundColor: isOpen
          ? "var(--color-primary-main)"
          : "var(--color-neutral-10)",
        border: `1.5px solid var(--color-border-light)`,
      }}
    >
      {/* Texture Background - Only visible when open */}
      {isOpen && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.15,
            color: "white",
          }}
        >
          <div className="grid grid-cols-[repeat(auto-fill,39px)] gap-0 w-full h-full">
            {Array.from({ length: 100 }).map((_, index) => (
              <div key={index} className="w-[39px] h-[34px]">
                <Texture />
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onToggle}
        className="relative w-full px-6 md:px-6 py-6 flex justify-between text-left transition-colors duration-300"
        style={{ alignItems: "center" }}
      >
        <h3
          className="text-lg md:text-xl font-semibold pr-4"
          style={{
            color: isOpen ? "white" : "var(--color-neutral-100)",
            lineHeight: "1.4",
          }}
        >
          {question}
        </h3>
        <div
          className="flex-shrink-0"
          style={{ display: "flex", height: "10px" }}
        >
          {isOpen ? (
            <ChevronUp width={24} height={24} color="white" />
          ) : (
            <ChevronDown
              width={24}
              height={24}
              color="var(--color-neutral-100)"
            />
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="relative px-6 md:px-8 pb-6">
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(255, 255, 255, 0.9)" }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
