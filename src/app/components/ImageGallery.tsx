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
    <div className="hero text-left bg-black text-white relative py-32 px-32">
    <img
      src="images/bb.jpg"
      className="w-full absolute top-0 left-0 object-cover opacity-30"
    />
       <div className="relative z-10 text-gray-300 text-center flex justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-[370px] h-[87px] justify-center flex items-center bg-transparent border-4 text-white border-black" style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
            Deskify Gallery
          </h2>
        </div>
    <div className="collage-grid mt-16 gap-2" style={{ boxShadow: "-20px -20px 28px #C1AA90, 20px 20px 28px #C1AA90" }}>
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
    </div>

  );
};

export default ImageGallery;
