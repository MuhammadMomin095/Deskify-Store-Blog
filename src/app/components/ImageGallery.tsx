import Image from 'next/image';
import React from 'react';

// GalleryImage interface define kar rahe hain taake images ka data type sahi se define ho
interface GalleryImage {
  src: string;
  alt: string;
}

// Image array ko directly yahan define kar rahe hain
const images: GalleryImage[] = [
  { src: '/images/a.jpg', alt: 'Image A' },
  { src: '/images/b.jpg', alt: 'Image B' },
  { src: '/images/c.jpg', alt: 'Image C' },
  { src: '/images/d.jpg', alt: 'Image D' },
  { src: '/images/e.jpg', alt: 'Image E' },
  { src: '/images/f.jpg', alt: 'Image F' },
  { src: '/images/g.jpg', alt: 'Image G' },
  { src: '/images/h.jpg', alt: 'Image H' },
  { src: '/images/i.jpg', alt: 'Image I' },
  { src: '/images/j.jpg', alt: 'Image J' },
  { src: '/images/k.jpg', alt: 'Image K' },
  { src: '/images/l.jpg', alt: 'Image L' },
  { src: '/images/m.jpg', alt: 'Image M' },
  { src: '/images/n.jpg', alt: 'Image N' },
  { src: '/images/o.jpg', alt: 'Image O' },
  { src: '/images/p.jpg', alt: 'Image P' },
];

// ImageGallery component jo static collage style mein images render karega
const ImageGallery: React.FC = () => {
  return (
    <div className="collage-grid mt-[50px]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`collage-item collage-item-${index + 1}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
