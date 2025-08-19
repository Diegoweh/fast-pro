import React from 'react'
import Image from "next/image";
import AboutInfoSections from '@/components/about/AboutInfoSection';

export const metadata = {
  title: "About — FastPro",
  description: "About Fast Pro Bags and Textiles, Inc.",
  alternates: { canonical: "/about" },
};

const page = () => {
  return (
    <>

    {/* First Section */}
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-3">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
          {/* Reserved column (md:3) */}
          <div className="hidden md:block md:col-span-3" />

          {/* Content column (md:9) */}
          <div className="md:col-span-9">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left mb-4 py-4">
              {/* Logo */}
              <Image
                src="/img/home/fplogo2.svg" // ajusta si tu asset vive en otra ruta
                alt="FastPro"
                width={80}
                height={80}
                className="mb-3 md:mb-0 md:mr-4"
                priority={false}
              />

              {/* Title */}
              <h1
                className="font-semibold leading-snug text-[1.5rem] md:text-[1.75rem]"
                style={{ color: "#1a4db3" }} // mantiene el color base del heading
              >
                <span
                  className="text-white px-4 py-1 inline-block"
                  style={{ backgroundColor: "#eb7600" }} // primer bloque naranja
                >
                  Fast. Strong. Reliable.
                </span>
                <br className="hidden md:block" />
                <span className="inline-block mt-1" style={{ color: "#1a4db3" }}>
                  The bags that work as hard as you do.
                </span>
              </h1>
            </div>

            {/* Divider */}
            <div className="my-6 h-px" style={{ backgroundColor: "#dee2e6" }} />

            {/* Subtitle */}
            <p className="mt-0" style={{ color: "#6c757d", fontSize: "1.2rem" }}>
              Fast Pro Bags and Textiles, Inc. is committed to delivering the same high standards of
              quality, safety, innovation, and operational efficiency that our customers have come to
              expect from us.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {/* 1969 */}
          <article className="text-center">
            <div
              className="h-full rounded-md p-6"
              style={{ border: "1px solid #dee2e6" }}
            >
              <div
                className="font-bold mb-2 leading-none"
                style={{ color: "#1a4db3", fontSize: "4rem" }}
              >
                1969
              </div>
              <p className="text-gray-600 text-sm">
                Founded by Robert “Bob” Williamson, pioneering the FIBC industry.
              </p>
            </div>
          </article>

          {/* 2025 */}
          <article className="text-center">
            <div
              className="h-full rounded-md p-6"
              style={{ border: "1px solid #dee2e6" }}
            >
              <div
                className="font-bold mb-2 leading-none"
                style={{ color: "#1a4db3", fontSize: "4rem" }}
              >
                2025
              </div>
              <p className="text-gray-600 text-sm">
                Fast Pro Bags and Textiles Inc. rebrand and refocus of our Mexico manufacturing operations.
              </p>
            </div>
          </article>

          {/* 4 - 6 */}
          <article className="text-center">
            <div
              className="h-full rounded-md p-6"
              style={{ border: "1px solid #dee2e6" }}
            >
              <div
                className="font-bold mb-2 leading-none"
                style={{ color: "#1a4db3", fontSize: "4rem" }}
              >
                4 - 6
              </div>
              <p className="text-gray-600 text-sm">
                Standard Lead-Time for Bags and Textiles – customization, material requirements, and
                approval processes may extend this.
              </p>
            </div>
          </article>

          {/* +25 */}
          <article className="text-center">
            <div
              className="h-full rounded-md p-6"
              style={{ border: "1px solid #dee2e6" }}
            >
              <div
                className="font-bold mb-2 leading-none"
                style={{ color: "#1a4db3", fontSize: "4rem" }}
              >
                +25
              </div>
              <p className="text-gray-600 text-sm">
                Years of Experience in Near-shore Mexico Manufacturing and Engineering Services.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <AboutInfoSections />
    
    </>
  )
}

export default page