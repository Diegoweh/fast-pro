// app/bags/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/lib/products";

type RouteParams = { slug: string };

// --- SEO por producto (ahora async y con params: Promise) ---
export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} | Fast Pro`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

// --- Pre-render estático de todas las páginas (igual que antes) ---
export function generateStaticParams(): RouteParams[] {
  return products.map((p) => ({ slug: p.slug }));
}

// --- Página (ahora async y con params: Promise) ---
export default async function ProductPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <section className="max-w-6xl mx-auto px-3 py-10">
      {/* Breadcrumbs */}
      <nav className="mb-6 text-sm text-gray-600">
        <Link href="/bags" className="hover:text-[#eb7700]">
          Bags
        </Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Detalle */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            {product.name}
          </h1>

          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            {product.category} – Key Specifications & Uses
          </h2>

          <p className="text-sm font-medium mb-4" style={{ color: "#eb7700" }}>
            {product.category}
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <ul className="mb-6 space-y-2">
            {product.features.map((f, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-center">
                <span
                  className="w-1.5 h-1.5 rounded-full mr-2"
                  style={{ backgroundColor: "#eb7700" }}
                />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <span className="text-xl font-semibold">{product.price}</span>
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
  );
}
