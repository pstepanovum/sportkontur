// FILE: src/components/pages/contact/map/contact-map.tsx

export function ContactMap() {
  return (
    <div
      className="w-full h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden flex items-center justify-center"
      style={{
        backgroundColor: "var(--color-neutral-10)",
        border: "1.5px solid var(--color-border-light)",
      }}
    >
      {/* Map Mockup */}
      <div className="text-center">
        <div
          className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              fill="var(--color-neutral-60)"
            />
          </svg>
        </div>
        <p
          className="text-lg font-medium"
          style={{ color: "var(--color-neutral-60)" }}
        >
          Карта будет здесь
        </p>
      </div>
    </div>
  );
}
