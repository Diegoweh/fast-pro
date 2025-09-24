// app/components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setStatus(ok ? "ok" : "error");
    // aquí podrías enviar a tu API /newsletter
  };

  return (
    <footer className="py-6 bg-slate-200 border-t">
      <div className="max-w-7xl mx-auto px-3">
        <div className="py-6">
          <Link href="/" passHref>
            <Image
                src="/img/home/fplogoBlue.svg"
                alt="Fast Pro"
                width={140}
                height={40}
                className="w-[160px] h-auto"  
                priority={false}
            /> 
          </Link>
        </div>
        {/* Top: brand + subscribe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand / FAST-PRO */}
          <div>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center">
                <span className="font-bold" style={{ color: "#1a4db3" }}>
                  FAST:
                </span>
                <p className="text-gray-600 text-sm md:text-base mb-0 ml-2">
                  FIBCs, Bulk Bags, and Textiles
                </p>
              </div>
              <div className="flex items-center">
                <span className="font-bold" style={{ color: "#eb7700" }}>
                  PRO:
                </span>
                <p className="text-gray-600 text-sm md:text-base mb-0 ml-2">
                  Near-shore Mexico manufacturing and engineering services
                </p>
              </div>
            </div>
            
          </div>

          {/* (Col 2 vacía si quieres equilibrar o poner algo luego)
          <div /> */}

          {/* Subscribe */}
          <div className="md:col-span-2">
            <h6 className="uppercase text-[#1a4db3] tracking-wide text-sm font-semibold">
              new products &amp; promotions
            </h6>
            <p className="text-sm md:text-base mb-3" style={{ color: "#eb7700" }}>
              Sign up to receive email updates on new products announcements and special promotions.
            </p>

            <form onSubmit={onSubscribe} className="flex flex-col sm:flex-row w-full gap-2">
              <label htmlFor="newsletter1" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter1"
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-auto flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1f5bd3]"
              />
              <Button
                type="submit"
                size="sm"
                className="whitespace-nowrap bg-[#1f5bd3] hover:bg-[#1f5bd3]/90 text-white"
              >
                Subscribe
              </Button>
            </form>

            {/* Mensajes de estado */}
            {status === "ok" && (
              <p className="mt-2 text-sm text-green-600">
                Subscription successful! You&apos;ll receive our latest updates in your inbox.
              </p>
            )}
            {status === "error" && (
              <p className="mt-2 text-sm text-red-600">
                Please enter a valid email address.
              </p>
            )}
          </div>
        </div>

        {/* Bottom bar: links horizontales + copyright */}
        <div className="mt-6 pt-4 border-t flex flex-wrap items-center justify-between gap-3">
          {/* Menú horizontal */}
          <nav aria-label="Footer Navigation" className="w-full md:w-auto">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-700 hover:text-[#eb7700]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-[#eb7700]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/bags" className="text-gray-700 hover:text-[#eb7700]">
                  Bags
                </Link>
              </li>
              <li>
                <Link href="/textiles" className="text-gray-700 hover:text-[#eb7700]">
                  Textiles
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-[#eb7700]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-[#eb7700]">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/privacy.pdf"   // asegúrate que el PDF está en /public/img/privacy.pdf
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#eb7700]"
                >
                  Privacy & Legal
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-600">
            FastPro © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
