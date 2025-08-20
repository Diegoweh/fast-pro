"use client";

import Image from "next/image";

const logos = [ 
  { src: "/img/contact/iso-9001-sgs.svg", alt: "ISO 9001 SGS", title: "ISO 9001 SGS", width: 80 },
  { src: "/img/contact/aib-international.svg", alt: "AIB International", title: "AIB International", width: 140 },
  { src: "/img/contact/kosher.svg", alt: "Kosher", title: "Kosher", width: 80 },
  { src: "/img/contact/halal.svg", alt: "Halal", title: "Halal", width: 80 },
  { src: "/img/contact/ecovadis.svg", alt: "Ecovadis", title: "Ecovadis", width: 140 },
  { src: "/img/contact/ctpat.svg", alt: "CTPAT", title: "CTPAT", width: 140 },
];

export default function Certifications() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-10 text-3xl font-bold text-[#eb7700]">
          Certification / Compliance
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo.src} className="flex items-center justify-center p-4">
              <Image
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                width={logo.width}
                height={logo.width}
                className="h-auto w-auto max-h-30 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
