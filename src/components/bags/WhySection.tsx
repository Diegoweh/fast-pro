// app/components/WhySection.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ThirdSection from "@/components/home/ThirdSection";

export default function WhySection() {
  return (
    <>
    <section className="my-4 py-10">
      <div className="max-w-7xl mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          {/* Left image */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl shadow-sm overflow-hidden">
              <div className="relative w-full h-64 sm:h-80 lg:h-[420px]">
                <Image
                  src="/img/home/why1.webp"
                  alt="Why Choose Us"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            className="px-2 lg:px-5"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2
              className="mb-4 text-2xl md:text-3xl font-semibold"
              style={{ color: "#1a4db3" }}
            >
              Fast Pro Bags and Textiles, Inc
            </h2>
            <p className="mb-6 text-gray-700">
              Is committed to delivering the same high standards of quality, safety, innovation, and
              operational efficiency that our customers have come to expect from us.
            </p>

            {/* Feature 1 */}
            <motion.div
              className="flex items-start gap-4 mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-[#eb7700]">
                {/* lock icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold">Customizable FIBCs</h2>
                <p className="text-gray-700">Tailored solutions to meet exact specifications and industry needs</p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex items-start gap-4 mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-[#eb7700]">
                {/* speed/compass icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold">North American Production</h2>
                <p className="text-gray-700">
                  Enjoy reliable quality with reduced shipping times and costs, while minimizing downtime through faster
                  turnarounds and less dependency on overseas logistics and delays.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="flex items-start gap-4 mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-[#eb7700]">
                {/* chat/globe-ish icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold">We take the time to</h2>
                <p className="text-gray-700">
                  Understand your specific needs, enabling clear communication and swift problem-solving to help you
                  achieve your supply chain goals with confidence.
                </p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="flex items-start gap-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-[#eb7700]">
                {/* check/badge icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold">25+ Years of Mexico Manufacturing Experience</h2>
                <p className="text-gray-700">
                  With over 25 years of quality bag and textile manufacturing experience in Mexico, we’ve earned our
                  place as an industry leader—continually advancing processes and best practices through innovation and
                  expertise.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-8 text-center md:text-left"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                variant="outline"
                className="border-[#1f5bd3] text-[#1f5bd3] hover:bg-[#1f5bd3] hover:text-white"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>    
    </>
  );
}
