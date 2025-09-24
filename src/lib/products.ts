// lib/products.ts
export type Product = {
  id: number
  name: string
  slug: string            // ej. "two-strap"
  category: string
  description: string
  price: string
  image: string
  features: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: "Two Strap Bag",
    slug: "two-strap",
    category: "17 x 17 x 27 (H) Two Strap Bag",
    description: "Ideal for bulk storage and transport of dry materials.",
    price: "From $12.50",
    image: "/img/bags/1.png",
    features: ["Capacity: 600 lbs", "5 Cubic Feet", "30 Gallons"],
  },
  {
    id: 2,
    name: "Trash-Ton Container",
    slug: "trash-ton",
    category: "17 x 17 x 27 (H) Trash-Ton Container",
    description:
      "Compact, drum-style FIBC for safe waste collection and transport. Durable and lightweight; supports liners and closure options to prevent spills on floors and in maintenance areas.",
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
    slug: "liquid-solid",
    category: "48 x 48 x 39 (H) Liquid-Solid Separator",
    description:
      "High-flow dewatering FIBC engineered to separate liquids from solids. Four-panel construction in 8 oz uncoated dewatering fabric promotes rapid drainage.",
    price: "From $22.00",
    image: "/img/bags/3.png",
    features: [
      "Capacity: 3,000 lbs",
      "58 Cubic Feet",
      "Fabric: 8 oz. Uncoated DeWatering Fabric",
    ],
  },
  {
    id: 4,
    name: "Standard Four Panel Bag",
    slug: "four-panel",
    category: "35 x 35 x 60 (H) Standard Four Panel Bag",
    description:
      "Heavy-duty Super Sack® container, built with coated fabric to reduce dusting and moisture ingress.",
    price: "From $35.00",
    image: "/img/bags/4.png",
    features: ["Capacity: 3000 lbs", "Web Tie Closure", "Fabric: Coated"],
  },
  {
    id: 5,
    name: "Constructor Bag",
    slug: "construction",
    category: "35 x 35 x 35 (H) Constructor Bag",
    description: "Construction-grade Builder’s Bag.",
    price: "From $28.50",
    image: "/img/bags/5.png",
    features: ["SWL: 2200 lbs", "28 Cubic Feet", "Fabric: Coated"],
  },
  {
    id: 6,
    name: "Commodity FIBC",
    slug: "commodity-fibc",
    category: "Commodity FIBCs",
    description:
      "Budget-friendly option for transporting dry bulk materials like sand, gravel, and grains.",
    price: "From $8.75",
    image: "/img/bags/6.png",
    features: ["Budget-friendly", "Dry materials", "Construction grade"],
  },
]
