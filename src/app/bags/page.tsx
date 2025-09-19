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
import ProductCards from '@/components/about/ProductCards';
import ThirdSection from '@/components/home/ThirdSection';
import { motion } from 'framer-motion';
import HeaderSlider from '@/components/layout/HeaderSlide';

const page = () => {
  return (
    <>
    {/* HeaderSlider */}
        <HeaderSlider
          heightClass="h-[60vh] md:h-[80vh]"
          slides={[
            {
              src: "/img/bags/1.webp",
              alt: "Bags manufacturing",
              title1: "FastPro",
              title2: "0% tariffs",
              paragraph: "Our products are exempt under the United States/Mexico/Canada Agreement (USMCA) and Tratado Mexico Estados Unidos Canada (T-MEC).",
            },
            {
              src: "/img/bags/2.webp",
              title1: "FastPro",
              title2: "5 week lead times",
              paragraph: "Custom fit, with fast design, sampling & delivery",
            },
            {
              src: "/img/bags/3.webp",
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
            The bags that work as hard as you do.
          </h1>

          <h2
            className="mt-4 text-xl md:text-2xl font-semibold"
            style={{ color: "#eb7700" }}
          >
            Choose Your Bag Type
          </h2>

          <div className="mt-4">
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              {/* 1. FIBCs */}
              <AccordionItem value="item-1">
                <AccordionTrigger>Flexible Intermediate Bulk Containers (FIBCs)</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">
                  Flexible Intermediate Bulk Containers (FIBCs) provide a reliable and efficient
                  solution for a wide range of industries. Whether you’re in chemical processing,
                  agriculture, food production, or pharmaceuticals, FIBCs offer secure, cost-effective
                  packaging for transporting and storing bulk materials. With various designs and
                  features—such as moisture resistance and custom sizes—FIBCs adapt to your process
                  needs, ensuring safe handling and optimal performance across the supply chain.
                </AccordionContent>
              </AccordionItem>

              {/* 2. Static Protection */}
              <AccordionItem value="item-2">
                <AccordionTrigger>Static Protection FIBCs</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">
                  Our Type C and Type D FIBCs are designed to provide effective static protection in
                  environments where static discharge can pose a risk. These specialized bulk bags are
                  ideal for chemicals, pharmaceuticals, agriculture, plastics, and electronics. Type C
                  FIBCs use conductive threads that allow grounding for safe use in hazardous
                  environments, while Type D FIBCs offer built-in antistatic properties, eliminating
                  the need for grounding. Both options help ensure safe, efficient handling.
                </AccordionContent>
              </AccordionItem>

              {/* 3. UN Certified */}
              <AccordionItem value="item-3">
                <AccordionTrigger>UN Certified FIBCs</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">
                  When transporting hazardous materials, UN Certified FIBCs provide the highest level
                  of safety and compliance. These designs meet rigorous standards for chemicals,
                  pharmaceuticals, and other dangerous goods. Industries such as chemicals, agriculture,
                  mining, and petrochemicals benefit from compliant, reliable packaging for hazardous
                  substances—keeping operations secure and aligned with regulations.
                </AccordionContent>
              </AccordionItem>

              {/* 4. Filtration & DeWatering */}
              <AccordionItem value="item-4">
                <AccordionTrigger>Filtration &amp; DeWatering FIBCs</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">
                  In response to repeated requests for a solution that allows liquids to drain from
                  mixtures of liquids and solids, we offer the “DeWatering Bulk Bag.” Crafted with a
                  proprietary porous polypropylene (PP) fabric (airflow ~230 CFM), this FIBC enables
                  efficient liquid drainage. Ideal for chemical processing, food production, mining,
                  and agriculture—where separating liquids from solids is essential—this design helps
                  improve efficiency and reduce waste.
                </AccordionContent>
              </AccordionItem>

              {/* 5. Commodity */}
              <AccordionItem value="item-5">
                <AccordionTrigger>Commodity FIBCs</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">
                  Our commodity FIBCs offer a practical, budget-friendly option for transporting dry
                  bulk materials—sand, gravel, grains, fertilizers, and more. Common in construction,
                  agriculture, and recycling, these durable bags provide an efficient, straightforward
                  solution without compromising reliability.
                </AccordionContent>
              </AccordionItem>

              {/* 6. Custom */}
              <AccordionItem value="item-6">
                <AccordionTrigger>Custom FIBCs</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">
                  When standard packaging won’t cut it, our customizable FIBCs deliver the flexibility
                  and performance your operation demands. Tailor size, strength, discharge options,
                  liners, and more to match your handling, storage, and transport needs—boosting
                  efficiency, safety, and value for chemicals, agriculture, pharmaceuticals, minerals,
                  plastics, and beyond.
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
                src="/img/bags/industries.webp"
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
    <WhySection />

    {/* Products cards */}
    <ProductCards />

    {/* More section */}
    <ThirdSection/>

    </>
  )
}

export default page