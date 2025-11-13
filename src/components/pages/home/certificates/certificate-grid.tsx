// FILE: src/components/pages/home/certificates/certificate-grid.tsx

"use client";

import { useState } from "react";
import { CertificateCard } from "./certificate-card";
import { CertificateModal } from "./certificate-modal";

const certificates = [
  {
    id: 1,
    title: "ISO 9001:2015",
    description: "Система менеджмента качества",
    imageUrl: "/images/certificates/iso-9001.jpg",
  },
  {
    id: 2,
    title: "ГОСТ Р 52169-2012",
    description: "Оборудование детских игровых площадок",
    imageUrl: "/images/certificates/gost-52169.jpg",
  },
  {
    id: 3,
    title: "EN 1176",
    description: "Европейский стандарт безопасности",
    imageUrl: "/images/certificates/en-1176.jpg",
  },
  {
    id: 4,
    title: "Пожарная безопасность",
    description: "Сертификат соответствия МЧС",
    imageUrl: "/images/certificates/fire-safety.jpg",
  },
  {
    id: 5,
    title: "Экологическая безопасность",
    description: "Санитарно-эпидемиологическое заключение",
    imageUrl: "/images/certificates/eco-safety.jpg",
  },
  {
    id: 6,
    title: "TÜV Rheinland",
    description: "Международная сертификация качества",
    imageUrl: "/images/certificates/tuv.jpg",
  },
];

export function CertificateGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % certificates.length);
    }
  };

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + certificates.length) % certificates.length
      );
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.id}
            {...certificate}
            onClick={() => handleOpenModal(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <CertificateModal
          certificate={certificates[selectedIndex]}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrevious={handlePrevious}
          currentIndex={selectedIndex}
          totalCount={certificates.length}
        />
      )}
    </>
  );
}
