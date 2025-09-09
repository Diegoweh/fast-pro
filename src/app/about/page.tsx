"use client";
import React from 'react'
import Image from "next/image";
import AboutInfoSections from '@/components/about/AboutInfoSection';
import { motion } from 'framer-motion';

const page = () => {
  return (
    <>

    {/* First Section */}
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-3">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
          {/* Columna izquierda con la imagen */}
          <motion.div
            className="hidden md:flex md:col-span-3 items-center justify-center"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/img/about/plane.webp"
              alt="History of Fast Pro"
              width={320}
              height={400}
              className="rounded-lg object-contain"
            />
          </motion.div>

          {/* Contenido derecho */}
          <motion.div
            className="md:col-span-9"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center text-center md:text-left mb-4 py-4">
              {/* Logo */}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-3 md:mb-0 md:mr-4"
              >
                <Image
                  src="/img/home/fpLogo2.svg"
                  alt="FastPro"
                  width={80}
                  height={80}
                />
              </motion.div>

              {/* Title */}
              <motion.h1
                className="font-semibold leading-snug text-[1.5rem] md:text-[1.75rem]"
                style={{ color: "#1a4db3" }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span
                  className="text-white px-4 py-1 inline-block"
                  style={{ backgroundColor: "#eb7600" }}
                >
                  Fast. Strong. Reliable.
                </span>
                <br className="hidden md:block" />
                <span className="inline-block mt-1" style={{ color: "#1a4db3" }}>
                  The bags that work as hard as you do.
                </span>
              </motion.h1>
            </div>

            {/* Divider */}
            <motion.div
              className="my-6 h-px"
              style={{ backgroundColor: "#dee2e6" }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            />

            {/* Subtitle */}
            <motion.p
              className="mt-0"
              style={{ color: "#6c757d", fontSize: "1.2rem" }}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Fast Pro Bags and Textiles, Inc. is committed to delivering the same high
              standards of quality, safety, innovation, and operational efficiency that
              our customers have come to expect from us.
            </motion.p>
          </motion.div>
        </div>        

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {/* 1969 */}
          <motion.article
            className="text-center bg-orange-400 rounded shadow-md"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className="h-full rounded-md p-6"
              style={{ border: "1px solid #dee2e6" }}
            >
              <div
                className="font-bold mb-2 leading-none text-[2.5rem] sm:text-[3rem] md:text-[4rem]"
                style={{ color: "#1a4db3" }}
              >
                1969
              </div>
              <p className="text-gray-100 text-sm">
                Founded by Robert “Bob” Williamson, pioneering the FIBC industry.
              </p>
            </div>
          </motion.article>

          {/* 2025 */}
          <motion.article
            className="text-center bg-orange-400 rounded shadow-md"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className="h-full rounded-md p-6"
              style={{ border: "1px solid #dee2e6" }}
            >
              <div
                className="font-bold mb-2 leading-none text-[2.5rem] sm:text-[3rem] md:text-[4rem]"
                style={{ color: "#1a4db3" }}
              >
                2025
              </div>
              <p className="text-gray-100 text-sm">
                Fast Pro Bags and Textiles Inc. rebrand and refocus of our Mexico manufacturing operations.
              </p>
            </div>
          </motion.article>

          {/* 4 - 6 */}
          <motion.article
            className="text-center bg-orange-400 rounded shadow-md"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div
              className="h-full rounded-md p-6"
              style={{ border: "1px solid #dee2e6" }}
            >
              <div
                className="font-bold mb-2 leading-none text-[2.5rem] sm:text-[3rem] md:text-[4rem]"
                style={{ color: "#1a4db3" }}
              >
                4 - 6
              </div>
              <p className="text-gray-100 text-sm">
                Standard Lead-Time for Bags and Textiles – customization, material requirements, and
                approval processes may extend this.
              </p>
            </div>
          </motion.article>

          {/* +25 */}
          <motion.article
            className="text-center bg-orange-400 rounded shadow-md"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div
              className="h-full rounded-md p-6"
              style={{ border: "1px solid #dee2e6" }}
            >
              <div
                className="font-bold mb-2 leading-none text-[2.5rem] sm:text-[3rem] md:text-[4rem]"
                style={{ color: "#1a4db3" }}
              >
                +25
              </div>
              <p className="text-gray-100 text-sm">
                Years of Experience in Near-shore Mexico Manufacturing and Engineering Services.
              </p>
            </div>
          </motion.article>
        </div>


      </div>
    </section>

    <AboutInfoSections />
    
    </>
  )
}

export default page