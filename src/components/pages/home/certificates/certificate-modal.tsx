// FILE: src/components/pages/home/certificates/certificate-modal.tsx

"use client";

import { useEffect } from "react";
import { ChevronLeft } from "@/components/icons/chevron-left";
import { ChevronRight } from "@/components/icons/chevron-right";
import { CloseIcon } from "@/components/icons/close";
import { useModalLock } from "@/contexts/modal-lock-context";

interface Certificate {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface CertificateModalProps {
  certificate: Certificate;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalCount: number;
}

export function CertificateModal({
  certificate,
  onClose,
  onNext,
  onPrevious,
  currentIndex,
  totalCount,
}: CertificateModalProps) {
  const { lockScroll, unlockScroll } = useModalLock();

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  // Lock scroll when modal opens
  useEffect(() => {
    lockScroll();
    return () => {
      unlockScroll();
    };
  }, [lockScroll, unlockScroll]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop with heavy blur */}
      <div
        className="absolute inset-0 backdrop-blur-xl"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      />

      {/* Modal Content */}
      <div
        className="relative z-10 max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Buttons */}
        <button
          onClick={onPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 p-2 rounded-full transition-all duration-200 hover:bg-white/10 cursor-pointer"
          aria-label="Previous certificate"
        >
          <ChevronLeft width={24} height={24} color="white" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 p-2 rounded-full transition-all duration-200 hover:bg-white/10 cursor-pointer"
          aria-label="Next certificate"
        >
          <ChevronRight width={24} height={24} color="white" />
        </button>

        {/* Certificate Card */}
        <div
          className="rounded-[20px] overflow-hidden relative"
          style={{
            backgroundColor: "white",
            border: "1.5px solid var(--color-border-light)",
            boxShadow: "none",
          }}
        >
          {/* Close Button - positioned on top right of the card */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white transition-all duration-200 cursor-pointer"
            style={{ boxShadow: "none" }}
            aria-label="Close modal"
          >
            <CloseIcon
              width={20}
              height={20}
              color="var(--color-neutral-100)"
            />
          </button>

          <div className="aspect-[3/4] relative">
            <div
              className="w-full h-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${certificate.imageUrl})`,
              }}
            >
              {/* Placeholder if no image */}
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="text-base"
                  style={{ color: "var(--color-neutral-60)" }}
                >
                  Certificate Image
                </span>
              </div>
            </div>
          </div>

          {/* Certificate Info */}
          <div className="p-6 bg-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--color-neutral-100)" }}
                >
                  {certificate.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--color-neutral-60)" }}
                >
                  {certificate.description}
                </p>
              </div>

              {/* Counter */}
              <div
                className="text-sm font-medium whitespace-nowrap"
                style={{ color: "var(--color-neutral-60)" }}
              >
                {currentIndex + 1} / {totalCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
