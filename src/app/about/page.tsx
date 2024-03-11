'use client';

import content1 from '../../../public/about-content.jpg';
import content2 from '../../../public/meeting.jpg';
import avatar1 from '../../../public/avatar1.png';
import avatar2 from '../../../public/avatar2.png';
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [content1.src, content2.src];

  // Membuat fungsi untuk mengubah slide setiap detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <main className="">
      <section>
        <div className="flex gap-10 py-20 max-w-screen-lg mx-auto px-5">
          <div className="w-full md:w-1/2">
            <div className="md:flex items-center mb-5">
              <div className="border-l-2 border-blue-500 h-6 mr-2 rounded md:block hidden"></div>
              <h2 className="text-3xl font-semibold text-center">Tentang Kami</h2>
              <hr className="w-20 mx-auto my-5 border-2 border-blue-500 rounded md:hidden block" />
            </div>
            <p className="md:text-left text-center">
              PT. Funvita Indonesia Investama telah menjadi pelopor dalam menyajikan layanan konsultan bisnis yang inovatif dan beragam. Dengan fokus pada training digital marketing, literasi keuangan, branding produk, public speaking, dan
              kolaborasi, perusahaan ini menjadi mitra ideal untuk membantu organisasi dan individu mengoptimalkan potensi mereka dalam era digital ini. Dengan pendekatan yang dinamis dan berorientasi pada hasil, Funvita memberikan solusi
              yang cerdas dan terdepan untuk menangani tantangan bisnis modern dan meningkatkan daya saing.
            </p>
          </div>
          <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg md:block hidden">
            {images.map((image, index) => (
              <img key={index} src={image} alt="" className={`absolute transition-transform duration-1000 ease-in-out transform ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'}`} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-zinc-100 py-20">
        <h3 className="text-center text-3xl font-semibold">Testimonial</h3>
        <hr className="w-20 mx-auto my-5 border-2 border-blue-500 rounded" />
        <div className="max-w-screen-sm mx-auto">
          <Carousel className="mx-auto md:p-0 p-5">
            <CarouselContent>
              <CarouselItem className="md:flex gap-5">
                <div className="p-5 border border-gray-500 rounded-xl md:mb-0 mb-5">
                  <div className="flex gap-2 items-center mb-5">
                    <Avatar>
                      <AvatarImage src={avatar1.src} alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold">Edi Cahyono</h4>
                  </div>
                  <p>Pengajarnya sangat ramah serta profesional sekali. Saya mendapatkan ilmu yang sangat banyak dari training di perusahaan ini.</p>
                </div>
                <div className="p-5 border border-gray-500 rounded-xl">
                  <div className="flex gap-2 items-center mb-5">
                    <Avatar>
                      <AvatarImage src={avatar2.src} alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold">Budi Darsono</h4>
                  </div>
                  <p>Pengajarnya sangat ramah serta profesional sekali. Saya mendapatkan ilmu yang sangat banyak dari training di perusahaan ini.</p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:flex gap-5">
                <div className="p-5 border border-gray-500 rounded-xl md:mb-0 mb-5">
                  <div className="flex gap-2 items-center mb-5">
                    <Avatar>
                      <AvatarImage src={avatar1.src} alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold">Agus Dandi</h4>
                  </div>
                  <p>Pengajarnya sangat ramah serta profesional sekali. Saya mendapatkan ilmu yang sangat banyak dari training di perusahaan ini.</p>
                </div>
                <div className="p-5 border border-gray-500 rounded-xl">
                  <div className="flex gap-2 items-center mb-5">
                    <Avatar>
                      <AvatarImage src={avatar2.src} alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold">Joko Sahuri</h4>
                  </div>
                  <p>Pengajarnya sangat ramah serta profesional sekali. Saya mendapatkan ilmu yang sangat banyak dari training di perusahaan ini.</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </main>
  );
}
