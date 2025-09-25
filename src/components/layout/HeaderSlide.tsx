"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Types
export type HeaderSlide = {
  src: string;
  alt?: string;
  title1: string; // first title line
  title2: string; // second title line
  paragraph: string; 
};

export type HeaderSliderProps = {
  slides: HeaderSlide[];
  autoPlayMs?: number; // default 5000
  className?: string; // extra classes for outer wrapper
  heightClass?: string; // e.g. "h-[60vh] md:h-[70vh]"
};

export default function HeaderSlider({
  slides,
  autoPlayMs = 5000,
  className = "",
  heightClass = "h-[60vh] md:h-[70vh]",
}: HeaderSliderProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const count = slides.length;

  // Helpers
  const scrollTo = useCallback((i: number) => {
    const vp = viewportRef.current;
    if (!vp) return;
    const clamped = ((i % count) + count) % count; // keep in range, supports negatives
    vp.scrollTo({ left: clamped * vp.clientWidth, behavior: "smooth" });
  }, [count]);

  const onPrev = useCallback(() => scrollTo(index - 1), [index, scrollTo]);
  const onNext = useCallback(() => scrollTo(index + 1), [index, scrollTo]);

  // Keep index in sync when the user scrolls (e.g., via touch)
  const handleScroll = useCallback(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const i = Math.round(vp.scrollLeft / vp.clientWidth);
    setIndex(i);
  }, []);

  // Handle resize to keep slides aligned
  useEffect(() => {
    const onResize = () => scrollTo(index);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index, scrollTo]);

  // Autoplay
  useEffect(() => {
    if (count <= 1 || isPaused) return;
    const id = setInterval(() => {
      scrollTo(index + 1);
    }, autoPlayMs);
    return () => clearInterval(id);
  }, [index, autoPlayMs, count, isPaused, scrollTo]);

  const pauseHandlers = useMemo(() => ({
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
    onFocus: () => setIsPaused(true),
    onBlur: () => setIsPaused(false),
  }), []);

  if (!slides?.length) return null;

  return (
    <section
      className={`relative w-full ${heightClass} ${className}`}
      aria-roledescription="carousel"
      aria-label="Header slider"
    >
      {/* Viewport */}
      <div
        ref={viewportRef}
        className="h-full w-full overflow-x-hidden scroll-smooth"
        onScroll={handleScroll}
        {...pauseHandlers}
      >
        <div className="flex h-full w-full">
          {slides.map((s, i) => (
            <div
              key={i}
              className="relative h-full w-full flex-none snap-center"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
            >
              {/* Background image */}
              <Image
                src={s.src}
                alt={s.alt ?? ""}
                fill
                className="object-cover"
                priority={i === 0}
              />

              {/* Overlay gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Text block bottom-left */}
              <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 max-w-[min(92%,700px)] text-white select-none">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                  {s.title1}
                </h2>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-[#eb7700] mt-0.5">
                  {s.title2}
                </h2>
                <p className="mt-2 text-sm sm:text-base md:text-lg/6 text-white/95">
                  {s.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 md:px-4">
        <button
          type="button"
          aria-label="Previous slide"
          className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-black/35 hover:bg-black/50 active:scale-95 transition h-9 w-9 md:h-10 md:w-10 text-white"
          onClick={onPrev}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-black/35 hover:bg-black/50 active:scale-95 transition h-9 w-9 md:h-10 md:w-10 text-white"
          onClick={onNext}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute left-6 bottom-3 md:left-10 md:bottom-4 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition border border-white/70 ${
              index === i ? "bg-white" : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

