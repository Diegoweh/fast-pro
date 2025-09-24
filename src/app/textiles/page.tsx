"use client"

import React from 'react'

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WhySection from '@/components/bags/WhySection';
import { motion } from 'framer-motion';
import ThirdSection from '@/components/home/ThirdSection';
import HeaderSlider from '@/components/layout/HeaderSlide';
import TextilesCards from '@/components/textiles/TextilesCards';
import WhySectionTextiles from '@/components/textiles/WhySectionTextiles';

const page = () => {
  return (
    <>
    {/* HeaderSlider */}
        <HeaderSlider
          heightClass="h-[60vh] md:h-[80vh]"
          slides={[
            {
              src: "/img/textiles/1.webp",
              alt: "Bags manufacturing",
              title1: "FastPro",
              title2: "0% tariffs",
              paragraph: "Our products are exempt under the United States/Mexico/Canada Agreement (USMCA) and Tratado Mexico Estados Unidos Canada (T-MEC).",
            },
            {
              src: "/img/textiles/2.webp",
              title1: "FastPro",
              title2: "5 week lead times",
              paragraph: "Custom fit, with fast design, sampling & delivery",
            },
            {
              src: "/img/textiles/3.webp",
              title1: "FastPro",
              title2: "Minutes from the US border",
              paragraph: "Shipping from our México Plant to the USA reduces your delivery risks and provides a cost-effective solution compared to containers from overseas.",
            },
          ]} />

    {/* First section */}
    <section className="max-w-7xl mx-auto py-10 px-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Column (texto + acordeón) */}
        <motion.div
          className="p-4"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
            The textiles that support industries worldwide.
          </h1>

          <h2
            className="mt-4 text-xl md:text-2xl font-semibold"
            style={{ color: "#eb7700" }}
          >
            Choose Your Textile Type
          </h2>

          <div className="mt-4">
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              {/* 1. FIBC Fabrics */}
              <AccordionItem value="item-1">
                <AccordionTrigger>FIBC Fabrics</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">
                  FIBC fabrics form the foundation for bulk packaging solutions across multiple
                  sectors. Engineered to balance strength, durability, and flexibility, these
                  woven textiles ensure reliable performance for transporting and storing bulk
                  materials. Their adaptability supports a wide spectrum of industrial processes.
                </AccordionContent>
              </AccordionItem>

              {/* 2. Carpet Backing */}
              <AccordionItem value="item-2">
                <AccordionTrigger>Carpet Backing</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">
                  Carpet backing textiles provide the structural support that defines stability,
                  resilience, and long-term performance in floor coverings. Widely adopted in
                  residential, commercial, and industrial applications, they play a critical role
                  in the flooring supply chain.
                </AccordionContent>
              </AccordionItem>

              {/* 3. GeoTextiles */}
              <AccordionItem value="item-3">
                <AccordionTrigger>GeoTextiles</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">
                  GeoTextiles are essential materials in civil engineering and environmental
                  projects. They enable soil stabilization, drainage, and erosion control,
                  making them indispensable for infrastructure, road construction, and land
                  reclamation projects.
                </AccordionContent>
              </AccordionItem>

              {/* 4. Cotton Bale */}
              <AccordionItem value="item-4">
                <AccordionTrigger>Cotton Bale</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">
                  Cotton bale fabrics are designed to safeguard raw cotton during handling and
                  storage. Their reliable construction helps preserve fiber integrity, ensuring
                  quality is maintained throughout the supply chain from field to mill.
                </AccordionContent>
              </AccordionItem>

              {/* 5. Leno Fabric */}
              <AccordionItem value="item-5">
                <AccordionTrigger>Leno Fabric</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">
                  Leno fabrics deliver strength and stability with a lightweight structure.
                  Their unique weaving technique makes them suitable for packaging, agriculture,
                  and other applications where ventilation and durability are equally critical.
                </AccordionContent>
              </AccordionItem>
              
            </Accordion>
          </div>
        </motion.div>

        {/* Right Column (imagen + frase) */}
        <motion.div
          className="p-4"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full">
            {/* Contenedor de la imagen */}
            <div className="relative w-full h-64 md:h-[420px] rounded-t-xl overflow-hidden">
              <Image
                src="/img/textiles/fibc.webp"
                alt="industries"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
            
            {/* Frase debajo de la imagen */}
            <motion.div
              className="w-full bg-[#eb7700] text-white text-xs md:text-sm font-semibold px-3 py-2 text-center rounded-b-xl shadow"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              FAST. STRONG. RELIABLE
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Why Section */}
    <WhySectionTextiles />

    {/* Product Cards Section */}
    <TextilesCards />

    {/* More */}
    <ThirdSection />


    </>
  )
}

export default page