"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Props = {
  imageSrc?: string;
  imageAlt?: string;
};

export default function FirstSection({
  imageSrc = "/img/home/why1.webp",
  imageAlt = "why us",
}: Props) {
  return (
    <section className="max-w-7xl mx-auto px-3 lg:px-0 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0 p-3 lg:p-4 lg:pb-0 items-center rounded-3xl">
        
        {/* Texto con animación */}
        <motion.div
          className="lg:col-span-7 order-2 lg:order-1 p-0 lg:p-3 lg:pt-3"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3 text-center lg:text-left"
            style={{ color: "#eb7700" }}
          >
            What We Do
          </h2>

          <p className="text-base md:text-lg text-center lg:text-left mb-4 lg:mb-3">
            At Fast Pro Bags and Textiles, Inc., as a founder of the industry since 1969, we don&apos;t just manufacture industrial packaging, we engineer solutions. Historically trusted by industry leaders for our proven quality, dedicated technical services, engineering design &amp; support, we are your trusted partner in delivering custom FIBCs and industrial textiles. Backed by deep industry expertise, agile North American manufacturing, and a dedicated engineering team, we produce high-quality bulk bags and textiles with unmatched speed and precision. Count on us to deliver exactly what you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start mb-4 lg:mb-3">
            <Button
              asChild
              variant="outline"
              className="px-6 border-[#1f5bd3] text-[#1f5bd3] hover:bg-[#1f5bd3] hover:text-white"
            >
              <Link href="/bags" title="products">
                Bags
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="px-6 border-[#1f5bd3] text-[#1f5bd3] hover:bg-[#1f5bd3] hover:text-white"
            >
              <Link href="/textiles" title="products">
                Textiles
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Imagen con animación */}
        <motion.div
          className="lg:col-span-5 order-2 lg:order-2 mb-4 lg:mb-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-64 md:h-80 lg:h-[420px] rounded-xl shadow-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
