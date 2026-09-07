import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  hotelName: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, hotelName }) => {
  const [activeImage, setActiveImage] = useState<string>(images[0] || 'images/hotel1.jpg');

  return (
    <div className="space-y-4">
      {/* Main High-Res Image View */}
      <div className="relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100">
        <img
          src={`${import.meta.env.BASE_URL}${activeImage}`}
          alt={hotelName}
          className="w-full h-full object-cover transition-opacity duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}images/hotel1.jpg`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent" />
      </div>

      {/* Thumbnail Selector Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`relative h-24 rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
                activeImage === img
                  ? 'border-accent shadow-md scale-[1.02]'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={`${import.meta.env.BASE_URL}${img}`}
                alt={`${hotelName} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}images/hotel1.jpg`;
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
