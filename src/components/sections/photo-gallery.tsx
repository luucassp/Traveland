"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

export function PhotoGallery({ images, alt }: { images: string[]; alt: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function close() {
    setOpenIndex(null);
  }

  function prev() {
    setOpenIndex((current) => (current === null ? null : (current - 1 + images.length) % images.length));
  }

  function next() {
    setOpenIndex((current) => (current === null ? null : (current + 1) % images.length));
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        <button
          type="button"
          onClick={() => setOpenIndex(0)}
          className="group relative col-span-2 row-span-2 h-56 overflow-hidden rounded-2xl sm:h-80"
        >
          <Image
            src={images[0]}
            alt={alt}
            fill
            priority
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <Expand className="h-4 w-4" />
          </span>
        </button>
        {images.slice(1).map((image, index) => (
          <button
            type="button"
            key={image}
            onClick={() => setOpenIndex(index + 1)}
            className="group relative h-28 overflow-hidden rounded-2xl sm:h-[9.5rem]"
          >
            <Image
              src={image}
              alt={`${alt} ${index + 2}`}
              fill
              sizes="25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100">
              <Expand className="h-3.5 w-3.5" />
            </span>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={close}
            aria-label="Fechar galeria"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={prev}
            aria-label="Imagem anterior"
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative h-[70vh] w-full max-w-4xl">
            <Image
              src={images[openIndex]}
              alt={`${alt} ${openIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            onClick={next}
            aria-label="Próxima imagem"
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm text-white">
            {openIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
