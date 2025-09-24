export type Textile = {
  id: number
  name: string
  slug: string            // ej. "two-strap"
  category: string
  description: string
  price: string
  image: string
  features: string[]
}

export const textiles: Textile[] = [
  {
    id: 1,
    name: "FIBC Fabrics",
    slug: "fibc-fabrics",
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
    slug: "carpet-backing",
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
    slug: "geotextiles",
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
    slug: "cotton-bale",
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
    slug: "leno-fabric",
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
