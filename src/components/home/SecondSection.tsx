"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SecondSection() {
  return (
    <section className="max-w-7xl mx-auto py-12 md:py-5 px-3">
      {/* Jumbotron */}
      <motion.div
        className="p-3 md:p-5 mb-4 md:mb-5 rounded-3xl border shadow bg-neutral-50"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="py-2 md:py-3">
          <h1
            className="text-2xl md:text-3xl font-bold text-center md:text-left"
            style={{ color: "#eb7700" }}
          >
            Built on Pride. Powered by Quality
          </h1>

          <p className="mt-3 md:mt-4 text-base md:text-lg text-center md:text-left md:max-w-3xl mx-auto md:mx-0">
            At Fast Pro Bags and Textiles, Inc., we combine North American production, fast lead times, and dedicated engineering support to deliver custom FIBCs and industrial textiles that meet your exact needs. With a reputation for proven quality and a commitment to acting as your trusted advisor, we help you move faster, operate smarter, and achieve more.
          </p>

          <div className="mt-3 text-center md:text-left">
            <Button
              asChild
              variant="outline"
              className="border-[#1f5bd3] text-[#1f5bd3] hover:bg-[#1f5bd3] hover:text-white"
            >
              <Link href="#">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-stretch">
        {/* Card 1 */}
        <motion.div
          className="h-full"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="h-full flex flex-col p-4 md:p-5 rounded-3xl border shadow bg-white">
            <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden mb-3">
              <Image
                src="/img/home/bagsHeader.webp"
                alt="Bags"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <h2
              className="text-xl md:text-2xl font-semibold text-center md:text-left"
              style={{ color: "#eb7700" }}
            >
              Bags
            </h2>

            <p className="mt-2 text-center md:text-left flex-1">
              As a vertically integrated FIBC manufacturer, we ensure agile production, fast delivery, and reliable expert support.
            </p>

            <div className="mt-2 text-center md:text-left">
              <Button
                asChild
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
              >
                <Link href="/bags">Go to Bags</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="h-full"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="h-full flex flex-col p-4 md:p-5 rounded-3xl border shadow bg-neutral-50">
            <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden mb-3">
              <Image
                src="/img/home/textilesHeader.webp"
                alt="Textiles"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <h2
              className="text-xl md:text-2xl font-semibold text-center md:text-left"
              style={{ color: "#eb7700" }}
            >
              Textiles
            </h2>
            <p className="mt-2 text-center md:text-left flex-1">
              We produce woven polypropylene textiles in-house, ensuring superior quality and reliable supply. Our vertical integration enables fast, custom solutions for demanding industrial applications.
            </p>
            <div className="mt-2 text-center md:text-left">
              <Button
                asChild
                variant="outline"
                className="border-[#1f5bd3] text-[#1f5bd3] hover:bg-[#1f5bd3] hover:text-white"
              >
                <Link href="/prospectives">Go to Textiles</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
