// FILE: src/components/ui/sections/header/announcement-banner.tsx

interface AnnouncementBannerProps {
  message: string;
}

export function AnnouncementBanner({ message }: AnnouncementBannerProps) {
  // Repeat the message multiple times for seamless loop
  const repeatedMessage = Array(15).fill(message);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-2 md:py-1.5 overflow-hidden"
      style={{ backgroundColor: "var(--color-neutral-10)" }}
    >
      {/* Desktop: centered static text */}
      <div
        className="hidden md:flex justify-center items-center text-sm font-medium"
        style={{
          color: "var(--color-neutral-100)",
          lineHeight: "1.28",
          letterSpacing: "0.03em",
        }}
      >
        {message}
      </div>

      {/* Mobile: scrolling text */}
      <div className="md:hidden flex items-center">
        <div className="flex animate-scroll whitespace-nowrap items-center">
          {[...repeatedMessage, ...repeatedMessage].map((text, index) => (
            <span
              key={`message-${index}`}
              className="inline-block mx-8 text-sm font-medium"
              style={{
                color: "var(--color-neutral-100)",
                lineHeight: "1.28",
                letterSpacing: "0.03em",
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
