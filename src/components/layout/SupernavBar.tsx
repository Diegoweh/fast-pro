// app/components/SupernavBar.tsx
import Link from "next/link";
import Image from "next/image";

export default function SupernavBar() {
  return (
    <div className="bg-[#eb7700] text-white px-4 py-2 md:px-3">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center text-center md:text-left gap-2">
          {/* Left content */}
          <div className="flex flex-wrap md:flex-nowrap items-center mb-2 md:mb-0 px-2 md:px-0">
            <div className="flex items-center w-full flex-wrap md:flex-nowrap">
              {/* Logo */}
              <Link href="/" passHref>
                <Image
                  src="/img/home/fpLogo3.svg"
                  alt="FastPro Logo"
                  width={160}
                  height={40}
                  className="h-[30px] md:h-10 w-auto select-none"
                  priority
                />
              </Link>
              {/* Phone (push right on the same row) */}
              <span className="ml-auto text-[0.8rem] md:text-base">
                <strong>Phone:</strong> +1 214-340-7060
              </span>
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-row md:flex-row items-center justify-between md:justify-end gap-2 w-full">
            {/* Botón e ícono a la izquierda en móvil (pero a la derecha en desktop) */}
            <div className="flex items-center gap-2 order-1 md:order-2 flex-1 md:flex-none">
              <Link
                href="/contact"
                className="border border-white/90 text-white hover:text-[#1f5bd3] hover:border-[#1f5bd3] rounded px-2 py-1 md:px-3 md:py-1 text-[0.60rem] md:text-sm whitespace-nowrap transition-colors"
              >
                Get a Quote
              </Link>

              <a
                href="https://www.linkedin.com/company/fastprobags"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="inline-flex"
              >
                {/* SVG mantiene fill actual y cambia a hover azul */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="w-6 h-6 md:w-[30px] md:h-[30px] text-white hover:text-[#1f5bd3] transition-colors"
                  fill="currentColor"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </div>

            {/* Email a la derecha en móvil (izquierda en desktop) */}
            <span className="order-2 md:order-1 flex-1 text-right md:text-left text-[0.8rem] md:text-base">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:Info@fastprobags.com"
                className="underline hover:no-underline hover:text-[#1f5bd3] transition-colors"
              >
                Info@fastprobags.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
