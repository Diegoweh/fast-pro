import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const products = [
  {
    id: 1,
    name: "FIBC Fabrics",
    slug: "/textiles/fibc-fabrics",
    category: "Industrial-Grade FIBC Fabrics",
    description:
      "Woven polypropylene fabrics engineered for the production of bulk containers. Provide durability, tensile strength, and resistance to wear—ensuring safe handling of heavy loads across industries.",
    price: "From $12.50",
    image: "/img/textiles/1.png",
    features: [
      "High tensile strength polypropylene",
      "Customizable GSM and weave patterns",
      "Compatible with coated or uncoated applications",
    ],
  },
  {
    id: 2,
    name: "Carpet Backing",
    slug: "/textiles/carpet-backing",
    category: "Technical Textiles for Carpet Backing",
    description:
      "Specialized fabrics that reinforce carpets by improving dimensional stability and wear resistance. Widely used in residential, commercial, and automotive flooring applications.",
    price: "From $18.75",
    image: "/img/textiles/2.png",
    features: [
      "Prevents carpet distortion and shrinkage",
      "Enhances longevity and appearance retention",
      "Available in woven and nonwoven constructions",
    ],
  },
  {
    id: 3,
    name: "GeoTextiles",
    slug: "/textiles/geotextiles",
    category: "Geosynthetic Woven and Nonwoven Fabrics",
    description:
      "Engineered textiles applied in civil engineering for soil stabilization, drainage, and erosion control. Essential for roadways, embankments, and environmental protection projects.",
    price: "From $22.00",
    image: "/img/textiles/3.png",
    features: [
      "High permeability and filtration capacity",
      "Resistant to chemical and biological degradation",
      "Supports separation, stabilization, and reinforcement",
    ],
  },
  {
    id: 4,
    name: "Cotton Bale",
    slug: "/textiles/cotton-bale",
    category: "Cotton Bale Protection Fabrics",
    description:
      "Durable covering textiles designed to safeguard raw cotton during storage and transportation. Maintain fiber integrity by providing resistance to tearing, moisture, and contamination.",
    price: "From $35.00",
    image: "/img/textiles/4.png",
    features: [
      "Protects cotton quality throughout supply chain",
      "UV and moisture-resistant options available",
      "Custom bale dimensions supported",
    ],
  },
  {
    id: 5,
    name: "Leno Fabric",
    slug: "/textiles/leno-fabric",
    category: "Lightweight Leno Weave Fabrics",
    description:
      "Open-mesh woven textiles that combine strength with breathability. Used in agriculture, packaging, and construction for applications requiring ventilation and stability.",
    price: "From $28.50",
    image: "/img/textiles/5.png",
    features: [
      "Unique cross-weave structure for added stability",
      "Allows airflow while maintaining durability",
      "Applications in sacks, crop protection, and scaffolding",
    ],
  },
  
]

export default function TextilesCards() {
  return (
    <section className="max-w-7xl mx-auto py-10 px-3">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl text-[#eb7700] font-semibold mb-4">
          Our Textiles 
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Discover our comprehensive selection of FIBCs designed to meet your specific industry needs
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <Card className="group overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm hover:shadow-lg transition-shadow">
              {/* IMAGE FRAME */}
              <div
                className="
                  relative aspect-[4/3] overflow-hidden
                  rounded-t-2xl
                  ring-1 ring-gray-200
                  bg-gradient-to-b from-slate-50 to-slate-100
                  [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_1px)]
                  [background-size:12px_12px]
                "
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
                />
                <div className="absolute top-3 right-3">
                  <span
                    className="px-2 py-1 text-xs font-semibold text-white rounded-full"
                    style={{ backgroundColor: "#eb7700" }}
                  >
                    FIBC
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <CardContent className="p-4">
                <div className="mb-2">
                  <Link href={product.slug}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-[#eb7700] transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs font-medium" style={{ color: "#eb7700" }}>
                    {product.category}
                  </p>
                </div>

                <p className="text-sm text-gray-700 mb-4 line-clamp-2">{product.description}</p>

                <ul className="mb-4 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-xs text-gray-600 flex items-center">
                      <span
                        className="w-1 h-1 rounded-full mr-2"
                        style={{ backgroundColor: "#eb7700" }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                  <a
                    href="/contact"
                    className="px-4 py-2 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#eb7700" }}
                  >
                    Get Quote
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
