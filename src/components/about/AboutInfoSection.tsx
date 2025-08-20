// app/about/AboutInfoSections.tsx
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutInfoSections() {
  return (
  <>    
    <section className="max-w-7xl mx-auto px-3 space-y-4 py-12">
      {/* WHO WE ARE (imagen izq, texto der) */}
      <motion.div
        className="rounded-2xl border shadow bg-white py-6 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
          {/* Imagen */}
          <motion.div
            className="md:col-span-4 text-center"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src="/img/about/au1.webp"
              alt="FastPro — Who we are"
              width={800}
              height={600}
              className="w-full h-auto rounded"
              priority={false}
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            className="md:col-span-8"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="md:px-4">
              <h5 className="text-2xl font-semibold">
                <span style={{ color: "#1a4db3" }}>FAST:</span>
                <span style={{ color: "#eb7700" }}> What We Do</span>
              </h5>
              <p className="mt-2 text-sm text-gray-600">
                Headquartered in Richardson, TX, Fast Pro Bags and Textiles, Inc. delivers quality FIBCs and industrial fabrics for efficient supply chain solutions. We&rsquo;re driven by a clear purpose: to manufacture products that exceed expectations—built for performance, with rapid delivery and unparalleled flexibility. Thanks to our North American manufacturing facilities in Mexico, we offer industry-leading lead times, even for small production runs and highly customized orders. Whether it's bulk bags, industrial textiles, or FIBC products, our experienced engineers are committed to delivering high-quality, tailor-made solutions that excel in even the most demanding environments.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* WHAT WE DO (texto izq, imagen der) */}
      <motion.div
        className="rounded-2xl border shadow bg-white py-6 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
          {/* Texto */}
          <motion.div
            className="md:col-span-8 order-2 md:order-1"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="md:px-4">
              <h5 className="text-2xl font-semibold">
                <span style={{ color: "#1a4db3" }}>PRO:</span>
                <span style={{ color: "#eb7700" }}> Who We Are</span>
              </h5>
              <p className="mt-2 text-sm text-gray-600">
                Headquartered in Richardson, TX, Fast Pro Bags and Textiles, Inc. delivers innovative
                packaging systems and efficient supply chain solutions tailored for the bulk bag
                industry. We&rsquo;re driven by a clear purpose: to manufacture products that exceed
                expectations—built for performance, with rapid delivery and unparalleled flexibility.
                Thanks to our North American manufacturing facilities in Mexico, we offer industry-leading
                lead times, even for small production runs and highly customized orders. Whether it&apos;s bulk
                bags, industrial textiles, or FIBC products, our experienced engineers are committed to
                delivering high-quality, tailor-made solutions that excel in even the most demanding
                environments.
              </p>
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="md:col-span-4 order-1 md:order-2 text-center"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/img/about/au3.webp"
              alt="FastPro — What we do"
              width={800}
              height={600}
              className="w-full h-auto rounded"
              priority={false}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>


    </>
  );
}
