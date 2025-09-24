// app/bags/[slug]/page.tsx
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { textiles } from "@/lib/textiles"

type Props = {
  params: { slug: string }
}

// SEO por producto
export function generateMetadata({ params }: Props) {
  const textile = textiles.find(p => p.slug === params.slug)
  if (!textile) return { title: "Product not found" }
  return {
    title: `${textile.name} | Fast Pro`,
    description: textile.description,
    openGraph: {
      title: textile.name,
      description: textile.description,
      images: [{ url: textile.image }],
    },
  }
}

// Pre-render estático de todas las páginas
export function generateStaticParams() {
  return textiles.map(p => ({ slug: p.slug }))
}

export default function ProductPage({ params }: Props) {
  const textile = textiles.find(p => p.slug === params.slug)
  if (!textile) return notFound()

  return (
    <section className="max-w-6xl mx-auto px-3 py-10">
      {/* Breadcrumbs */}
      <nav className="mb-6 text-sm text-gray-600">
        <Link href="/textiles" className="hover:text-[#eb7700]">Textiles</Link>
        <span className="mx-2">/</span>
        <span>{textile.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-white">
          <Image
            src={textile.image}
            alt={textile.name}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Detalle */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">{textile.name}</h1>
          {/* Nuevo H2 SEO */}
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            {textile.category} – Key Specifications & Uses
          </h2>

          <p className="text-sm font-medium mb-4" style={{ color: "#eb7700" }}>
            {textile.category}
          </p>
          <p className="text-gray-700 mb-6">{textile.description}</p>

          <ul className="mb-6 space-y-2">
            {textile.features.map((f, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: "#eb7700" }} />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <span className="text-xl font-semibold">{textile.price}</span>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#eb7700" }}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
