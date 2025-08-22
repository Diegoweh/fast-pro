import { motion } from "framer-motion";
import Link from "next/link"; // si usas Next.js (cambia según tu router)

export default function PackagingBanner() {
  return (
    <section className="relative flex items-center justify-center py-20 px-4">
      {/* Imagen de fondo */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="/img/services/services.webp"
          alt="services"
          title="services"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* overlay */}
      </motion.div>

      {/* Contenido */}
      <motion.div
        className="relative z-10 max-w-3xl text-center text-white"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl"
          style={{ color: "white" }}
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          Ready to Optimize Your Packaging with Speed and Precision
        </motion.h2>

        <motion.p
          className="mb-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Contact us today for expert consultations or fast, reliable contract manufacturing of bulk bags and textiles.
          With near-shore options, we deliver efficiency and speed for your industrial packaging needs—quick turnaround,
          guaranteed.
        </motion.p>

        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-block rounded-lg border border-white bg-white/10 px-8 py-3 text-white font-semibold hover:bg-white hover:text-[#eb7700] transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
