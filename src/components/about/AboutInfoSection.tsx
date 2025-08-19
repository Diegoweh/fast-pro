// app/about/AboutInfoSections.tsx
import Image from "next/image";
import HeaderSlider from "../layout/HeaderSlide";

export default function AboutInfoSections() {
  return (
  <>
  
    
    <section className="max-w-7xl mx-auto px-3 space-y-4 py-12">
      {/* WHO WE ARE (imagen izq, texto der) */}
      <div className="rounded-2xl border shadow bg-white py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
          {/* Imagen */}
          <div className="md:col-span-4 text-center">
            <Image
              src="/img/about/au1.webp" // ajusta la ruta a tus assets
              alt="FastPro — Who we are"
              width={800}
              height={600}
              className="w-full h-auto rounded"
              priority={false}
            />
          </div>

          {/* Texto */}
          <div className="md:col-span-8">
            <div className="md:px-4">
              <h5 className="text-2xl font-semibold">
                <span style={{ color: "#1a4db3" }}>FAST:</span>
                <span style={{ color: "#eb7700" }}> What We Do</span>
              </h5>
              <p className="mt-2 text-sm text-gray-600">
                Headquartered in Richardson, TX, Fast Pro Bags and Textiles, Inc. delivers quality FIBCs and industrial fabrics for efficient supply chain solutions. We&rsquo;re driven by a clear purpose: to manufacture products that exceed expectations—built for performance, with rapid delivery and unparalleled flexibility. Thanks to our North American manufacturing facilities in Mexico, we offer industry-leading lead times, even for small production runs and highly customized orders. Whether it's bulk bags, industrial textiles, or FIBC products, our experienced engineers are committed to delivering high-quality, tailor-made solutions that excel in even the most demanding environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT WE DO (texto izq, imagen der) */}
      <div className="rounded-2xl border shadow bg-white py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
          {/* Texto */}
          <div className="md:col-span-8 order-2 md:order-1">
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
          </div>

          {/* Imagen */}
          <div className="md:col-span-4 order-1 md:order-2 text-center">
            <Image
              src="/img/about/au3.webp" // ajusta la ruta a tus assets
              alt="FastPro — What we do"
              width={800}
              height={600}
              className="w-full h-auto rounded"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
