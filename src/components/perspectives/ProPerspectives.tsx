"use client";

import Link from "next/link";
import ThirdSection from "../home/ThirdSection";

const posts = [
  {
    title: "Sustainable Packaging Trends 2024",
    date: "Aug 1, 2024",
    excerpt:
      "A technical overview of the new sustainability standards affecting FIBC manufacturing...",
    href: "/docs/sustainable-packaging-2024.pdf",
    external: true,
  },
  {
    title: "Quality Control in Bulk Bags",
    date: "July 15, 2024",
    excerpt:
      "Explore quality assurance measures and ISO certifications relevant to bulk packaging solutions...",
    href: "/blog/quality-control",
    external: false,
  },
  // Repite o agrega más entradas según lo necesites
];

export default function ProPerspectives() {
  return (
    <>
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-orange-500">
          PRO Prospectives
        </h2>
        <p className="mb-10 text-center text-gray-600">
          Technical bulletins, industry insights, and company blog posts
        </p>

        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title + post.date}
              className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-orange-500">
                {post.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">Published: {post.date}</p>
              <p className="mt-3 flex-grow text-gray-600">{post.excerpt}</p>
              {post.external ? (
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-xl border border-blue-600 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50"
                >
                  Read more
                </a>
              ) : (
                <Link
                  href={post.href}
                  className="mt-4 inline-flex items-center justify-center rounded-xl border border-blue-600 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50"
                >
                  Read more
                </Link>
              )}
            </article>
          ))}
        </div> */}
      </div>
    </section>
    
    {/* More */}
    <ThirdSection />

    </>
  );
}
