import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";

function Gallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const showPrev = React.useCallback(() => {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const showNext = React.useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }

    document.addEventListener("keydown", handleKeyDown);
    // lock background scroll while the lightbox is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, showPrev, showNext]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={img.src || i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group border border-gray-900 dark:border-gray-100 rounded overflow-hidden aspect-video bg-gray-50 dark:bg-gray-900 flex items-center justify-center"
            aria-label={`Open screenshot ${i + 1} of ${images.length}`}
          >
            <img
              src={img.src}
              alt={img.alt || `Screenshot ${i + 1}`}
              className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
            <div
              className="hidden w-full h-full items-center justify-center text-gray-400 dark:text-gray-600"
              aria-hidden="true"
            >
              <ImageOff size={22} />
            </div>
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4 py-10"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close gallery"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white border border-white/40 rounded p-2 hover:bg-white/10"
          >
            <X size={20} aria-hidden="true" />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous screenshot"
              className="absolute left-2 sm:left-6 text-white border border-white/40 rounded-full p-2 hover:bg-white/10"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
          )}

          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt || `Screenshot ${activeIndex + 1}`}
            className="max-h-full max-w-full object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next screenshot"
              className="absolute right-2 sm:right-6 text-white border border-white/40 rounded-full p-2 hover:bg-white/10"
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs">
              {activeIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Gallery;
