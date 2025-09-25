"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Optional: you could lift these to a CMS or pass as props.
const announcements = [
  {
    title: "Fast Pro Announcement Letter",
    description: "Official letter detailing key updates for Q2.",
    href: "/ruta/documento1.pdf",
  },
  // {
  //   title: "April Tariff Statement",
  //   description: "Latest statement regarding product tariffs.",
  //   href: "/ruta/documento2.pdf",
  // },
];

const videos = [
  {
    title: "FIBCA Unlocking Environmental",
    src: "https://www.youtube.com/embed/2mTA7BJrWVQ",
  },
  {
    title: "FIBCA Designs",
    src: "https://www.youtube.com/embed/-fwwqG2mf0U",
  },
];

export default function FastFeaturesPage() {
  return (
    <main className="min-h-screen pb-20">
      {/* Hero */}
      <section className="mt-6">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="rounded-2xl bg-gray-800 text-white shadow-lg"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="px-6 py-12 text-center sm:px-10">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">FAST Features</h1>
              <p className="mt-2 text-base/7 text-gray-200 sm:text-lg">
                Important updates, official communications, and featured media
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            className="mb-6 text-2xl font-semibold tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Important Announcements
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {announcements.map((a, i) => (
              <motion.article
                key={a.title}
                className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeOut", delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl font-semibold text-orange-500">{a.title}</h2>
                <p className="mt-2 text-gray-600">{a.description}</p>
                <div className="mt-4">
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-blue-600 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50"
                  >
                    View PDF
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                      <path d="M13.5 2.25a.75.75 0 0 0 0 1.5h5.689l-7.72 7.72a.75.75 0 1 0 1.06 1.06l7.72-7.72V12a.75.75 0 0 0 1.5 0V2.25z" />
                      <path d="M6 5.25A2.25 2.25 0 0 0 3.75 7.5v12A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-6a.75.75 0 0 0-1.5 0v6c0 .414-.336.75-.75.75H6a.75.75 0 0 1-.75-.75v-12c0-.414.336-.75.75-.75h6a.75.75 0 0 0 0-1.5H6z" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            className="mb-6 text-2xl font-semibold tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Featured Videos
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {videos.map((v, i) => (
              <motion.figure
                key={v.title}
                className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeOut", delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video w-full overflow-hidden rounded-xl">
                  <iframe
                    className="h-full w-full"
                    src={v.src}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <figcaption className="mt-2 text-sm text-gray-600">{v.title}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </main>

  );
}
