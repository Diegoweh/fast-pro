"use client";

import ThirdSection from '@/components/home/ThirdSection';
import HeaderSlider from '@/components/layout/HeaderSlide';
import PackagingCard from '@/components/services/PackagingCard';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const page = () => {

  const services = [
    {
      title: "Engineering",
      desc:
        "Our team of experienced engineers creates custom bulk packaging solutions designed to meet your exact needs",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          viewBox="0 0 16 16"
          className="mx-auto mb-3 fill-[#eb7700]"
          aria-hidden
          style={{ animationDuration: "10s" }}
        >
          {/* animate-spin replacement for a slower spin */}
          <g className="">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
          </g>
        </svg>
      ),
    },
    {
      title: "Technical Services",
      desc:
        "Our Technical Service Group is a key resource, ready to support FIBC users with expert assistance in processing, packaging operations, and comprehensive application reviews",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          viewBox="0 0 16 16"
          className="mx-auto mb-3 fill-[#eb7700]"
          aria-hidden
          style={{ animationDuration: "14s" }}
        >
          <g className="">
            <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z"/>
          </g>
        </svg>
      ),
    },
    {
    title: "Technical Training",
    desc:
        "Our experts offer hands-on or virtual technical training, educating customers on bulk bag and textile solutions to optimize performance and efficiency",
    svg: <Settings className="mx-auto mb-3 h-12 w-12 text-[#eb7700]" />,
    },
    {
      title: "Contract Weaving",
      desc:
        "High-strength, precision weaving on flat and circular looms—built for performance and scale",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          viewBox="0 0 16 16"
          className="mx-auto mb-3 fill-[#eb7700]"
          aria-hidden
        >
          <path d="M8 16a4 4 0 0 0 4-4 4 4 0 0 0 0-8 4 4 0 0 0-8 0 4 4 0 1 0 0 8 4 4 0 0 0 4 4m3-12q0 .11-.03.247c-.544.241-1.091.638-1.598 1.084A3 3 0 0 0 8 5c-.494 0-.96.12-1.372.331-.507-.446-1.054-.843-1.597-1.084A1 1 0 0 1 5 4a3 3 0 0 1 6 0m-.812 6.052A3 3 0 0 0 11 8a3 3 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a7 7 0 0 1-.647-.487m-3.56.617a3 3 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084q.03.137.03.247a3 3 0 1 1-6 0q0-.11.03-.247c.544-.242 1.091-.638 1.598-1.084m-.816-4.721A3 3 0 0 0 5 8c0 .794.308 1.516.812 2.052a7 7 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487M8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
        </svg>
      ),
    },
    {
      title: "Contract Sewing",
      desc:
        "Durable, precise, and scalable stitching for demanding industrial applications",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          viewBox="0 0 16 16"
          className="mx-auto mb-3 fill-[#eb7700]"
          aria-hidden
        >
          <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354m1.58 1.408-.002-.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a5 5 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a5 5 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.8 1.8 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14q.091.15.214.271a1.8 1.8 0 0 0 .37.282"/>
        </svg>
      ),
    },
    {
      title: "Sampling",
      desc:
        "Custom FIBC samples are available for new applications or design developments, with a typical lead time of 1-2 weeks",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          viewBox="0 0 16 16"
          className="mx-auto mb-3 fill-[#eb7700]"
          aria-hidden
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
        </svg>
      ),
    },
  ] as const;

  return (
    <>
    <HeaderSlider
              heightClass="h-[60vh] md:h-[80vh]"
              slides={[
                {
                  src: "/img/home/fpHeader.webp",
                  alt: "Bags manufacturing",
                  title1: "FastPro",
                  title2: "0% tariffs",
                  paragraph: "Our products are exempt under the United States/Mexico/Canada Agreement (USMCA) and Tratado Mexico Estados Unidos Canada (T-MEC).",
                },
                {
                  src: "/img/home/fpHeader2.webp",
                  title1: "FastPro",
                  title2: "5 week lead times",
                  paragraph: "Custom fit, with fast design, sampling & delivery",
                },
                {
                  src: "/img/home/fpHeader3.webp",
                  title1: "FastPro",
                  title2: "Minutes from the US border",
                  paragraph: "Shipping from our México Plant to the USA reduces your delivery risks and provides a cost-effective solution compared to containers from overseas.",
                },
              ]} />

    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          {/* Título: slide-down + fade */}
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "#eb7700" }}
            initial={{ y: -24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          >
            Our Services
          </motion.h2>

          {/* Párrafo: fade-up suave */}
          <motion.p
            className="mx-auto mb-6 max-w-3xl text-base text-gray-600 sm:text-lg"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
          >
            Fast Pro is your trusted advisor, offering expert engineering support and customized solutions tailored to your
            specific needs. With a focus on quick turnaround, we help you meet your supply chain goals efficiently and
            effectively
          </motion.p>

          {/* Divisor: scale-X desde el centro */}
          <motion.div
            className="mx-auto mb-10 h-px w-1/2 max-w-sm bg-neutral-300 origin-center"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          />
        </header>

        {/* Grid con stagger para las cards */}
        <motion.ul
          className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-2 md:gap-x-8 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((s, i) => (
            <motion.li
              key={s.title}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 24, rotateX: 6 },
                show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              {/* Card: hover lift; ícono hace pop-in */}
              <motion.div
                className="group mx-auto max-w-xs rounded-2xl p-2 transition-transform duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                viewport={{ once: true }}
              >
                {/* Ícono: pop + ligero spin al entrar */}
                <motion.div
                  className="mx-auto mb-3"
                  initial={{ scale: 0.8, rotate: -8, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                  viewport={{ once: true }}
                >
                  {s.svg}
                </motion.div>

                {/* Título: slide sutil lateral */}
                <motion.h3
                  className="mb-2 text-lg font-semibold text-gray-900"
                  initial={{ x: 12, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
                  viewport={{ once: true }}
                >
                  {s.title}
                </motion.h3>

                {/* Descripción: fade-in con leve blur */}
                <motion.p
                  className="text-sm leading-relaxed text-gray-600"
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
                  viewport={{ once: true }}
                >
                  {s.desc}
                </motion.p>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>

    <PackagingCard />

    <ThirdSection />
    
    </>
  );
}

export default page