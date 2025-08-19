// app/components/ThirdSection.tsx
import Link from "next/link";

export default function ThirdSection() {
  return (
    <section id="featured-3" className="max-w-7xl mx-auto py-12 px-3">
      <h2
        className="text-2xl md:text-3xl font-semibold pb-2 border-b text-center md:text-left"
        style={{ color: "#1a4db3" }}
      >
        More
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
        {/* About us */}
        <article className="flex flex-col">
          <div className="inline-flex items-center justify-center mb-3">
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 16 16"
                className=""
                fill="#eb7700"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"
                />
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            
          </div>

        <h3 className="text-2xl font-semibold text-center md:text-left text-gray-900">
            Who we Are
          </h3>
          <p className="mt-2 text-center md:text-left text-gray-700">
            Headquartered in the U.S., Fast Pro Bags and Textiles, Inc. is a team of FIBC and textile specialists with manufacturing based in Mexico. We deliver expert nearshore solutions with no tariffs, providing fast, flexible support across borders and industries.
          </p>
          <div className="mt-2 text-center md:text-left">
            <Link
              href="/about"
              className="group inline-flex items-center gap-1 text-[#1a4db3] hover:underline"
              aria-label="About us"
            >
              Who we Are
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.854 3.646a.5.5 0 0 1 .707 0l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.707-.708L9.793 8 6.854 5.06a.5.5 0 0 1 0-.707z"
                />
              </svg>
            </Link>
          </div>
        </article>

        {/* Services */}
        <article className="flex flex-col">
          <div className="inline-flex items-center justify-center mb-3">
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 16 16"
                className=""
                fill="#eb7700"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"
                />
              </svg>
            
          </div>

          <h3 className="text-2xl font-semibold text-center md:text-left text-gray-900">
            Learn
          </h3>
          <p className="mt-2 text-center md:text-left text-gray-700">
            Stay up-to-date with our latest announcements, valuable perspectives, notable content, and in-depth knowledge on key topics to help you stay informed and ahead of the curve.
          </p>
          <div className="mt-2 text-center md:text-left">
            <Link
              href="/services"
              className="group inline-flex items-center gap-1 text-[#1a4db3] hover:underline"
              aria-label="Services"
            >
              Learn
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.854 3.646a.5.5 0 0 1 .707 0l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.707-.708L9.793 8 6.854 5.06a.5.5 0 0 1 0-.707z"
                />
              </svg>
            </Link>
          </div>
        </article>

        {/* Contact */}
        <article className="flex flex-col">
          <div className="inline-flex items-center justify-center mb-3">
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 16 16"
                className=""
                fill="#eb7700"
                aria-hidden="true"
              >
                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
              </svg>
            
          </div>

          <h3 className="text-2xl font-semibold text-center md:text-left text-gray-900">
            Contact us
          </h3>
          <p className="mt-2 text-center md:text-left text-gray-700">
            Contact us now for customized solutions, expert insights, and fast, professional service. We&rsquo;re here to help you drive success—let&rsquo;s achieve it together!
          </p>
          <div className="mt-2 text-center md:text-left">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1 text-[#1a4db3] hover:underline"
              aria-label="Contact"
            >
              Contact
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.854 3.646a.5.5 0 0 1 .707 0l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.707-.708L9.793 8 6.854 5.06a.5.5 0 0 1 0-.707z"
                />
              </svg>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
