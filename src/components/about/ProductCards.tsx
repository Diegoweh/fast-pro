import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const products = [
  {
    id: 1,
    name: "Two Strap Bag",
    slug: "/bags/two-strap",   // 👈 agregamos ruta
    category: "17 x 17 x 27 (H) Two Strap Bag",
    description: "Ideal for bulk storage and transport of dry materials.",
    price: "From $12.50",
    image: "/img/bags/1.png",
    features: ["Capacity: 600 lbs", "5 Cubic Feet", "30 Gallons"],
  },
  {
    id: 2,
    name: "Trash-Ton Container",
    slug: "/bags/trash-ton",
    category: "17 x 17 x 27 (H) Trash-Ton Container",
    description: "Compact, drum-style FIBC for safe waste collection and transport. Durable and lightweight; supports liners and closure options to prevent spills on floors and in maintenance areas.",
    price: "From $18.75",
    image: "/img/bags/2.png",
    features: [
      "Capacity: 250 lbs",
      "5 Cubic Feet",
      "Fabric: Coated, Single Wall Stiffeners Inserted Between the Wall Panels",
    ],
  },
  {
    id: 3,
    name: "Liquid-Solid Separator",
    slug: "/bags/liquid-solid",
    category: "48 x 48 x 39 (H) Liquid-Solid Separator",
    description: "High-flow dewatering FIBC engineered to separate liquids from solids. Four-panel construction in 8 oz uncoated dewatering fabric promotes rapid drainage.",
    price: "From $22.00",
    image: "/img/bags/3.png",
    features: ["Capacity: 3,000 lbs", "58 Cubic Feet", "Fabric: 8 oz. Uncoated DeWatering Fabric"],
  },
  {
    id: 4,
    name: "Standard Four Panel Bag",
    slug: "/bags/four-panel",
    category: "35 x 35 x 60 (H) Standard Four Panel Bag",
    description: "Heavy-duty Super Sack® container, built with coated fabric to reduce dusting and moisture ingress.",
    price: "From $35.00",
    image: "/img/bags/4.png",
    features: ["Capacity: 3000 lbs", "Web Tie Closure", "Fabric: Coated"],
  },
  {
    id: 5,
    name: "Constructor Bag",
    slug: "/bags/construction",
    category: "35 x 35 x 35 (H) Constructor Bag",
    description: "Construction-grade Builder’s Bag.",
    price: "From $28.50",
    image: "/img/bags/5.png",
    features: ["SWL: 2200 lbs", "28 Cubic Feet", "Fabric: Coated"],
  },
  {
    id: 6,
    name: "Commodity FIBC",
    slug: "/bags/commodity-fibc",
    category: "Commodity FIBCs",
    description: "Budget-friendly option for transporting dry bulk materials like sand, gravel, and grains.",
    price: "From $8.75",
    image: "/img/bags/6.png",
    features: ["Budget-friendly", "Dry materials", "Construction grade"],
  },
]

export default function ProductCards() {
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
          Our Product Range
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
