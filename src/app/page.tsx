import heroSection from '../../public/hero-section.png';
import blobBg from '../../public/blob-bg.png';
import meeting from '../../public/meeting.jpg';
import { IoExtensionPuzzleOutline } from 'react-icons/io5';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { Ri24HoursLine } from 'react-icons/ri';
import { FaBusinessTime } from 'react-icons/fa6';
import { MdOnDeviceTraining } from 'react-icons/md';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { GiPublicSpeaker } from 'react-icons/gi';
import { FcCollaboration } from 'react-icons/fc';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="relative flex justify-between items-center py-20 md:px-0 px-5" style={{ backgroundImage: `url(${meeting.src})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '90vh' }}>
        <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
        <div className="z-10 flex flex-col justify-center items-center md:w-1/2 gap-7 max-w-screen-xl mx-auto">
          <h1 className="text-5xl font-bold antialiased leading-tight text-center text-white">SOLUSI PROFESIONAL UNTUK BISNIS ANDA</h1>
          <Link href="/contact" className="p-3 w-fit border border-transparent rounded-xl bg-blue-800 text-white group hover:bg-white hover:text-blue-800 hover:border-blue-800 transition-all duration-300">
            MULAI PERJALANAN BISNIS ANDA
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <h2 className="text-center text-4xl font-semibold">Layanan Kami</h2>
        <hr className="md:w-1/5 w-full my-10 mx-auto" />
        <div className="flex flex-wrap justify-center gap-20 max-w-screen-lg mx-auto">
          <div className="md:w-1/4 w-full relative">
            <div className="relative">
              <img src={blobBg.src} alt="" className="block mx-auto relative z-20" style={{ maxWidth: '100%', height: 'auto', position: 'relative' }} />
              <FaBusinessTime className="mx-auto text-6xl w-16 flex-shrink-0 text-blue-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 z-30" />
            </div>
            <h3 className="text-center text-xl mt-5">Konsultan Bisnis</h3>
          </div>
          <div className="md:w-1/4 w-full relative">
            <div className="relative">
              <img src={blobBg.src} alt="" className="block mx-auto relative z-20" style={{ maxWidth: '100%', height: 'auto', position: 'relative' }} />
              <MdOnDeviceTraining className="mx-auto text-6xl w-16 flex-shrink-0 text-blue-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 z-30" />
            </div>
            <h3 className="text-center text-xl mt-5">
              Training Digital <br /> Marketing
            </h3>
          </div>
          <div className="md:w-1/4 w-full relative">
            <div className="relative">
              <img src={blobBg.src} alt="" className="block mx-auto relative z-20" style={{ maxWidth: '100%', height: 'auto', position: 'relative' }} />
              <FaHandHoldingUsd className="mx-auto text-6xl w-16 flex-shrink-0 text-blue-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 z-30" />
            </div>
            <h3 className="text-center text-xl mt-5">
              Training Digital <br /> Literasi Keuangan
            </h3>
          </div>
          <div className="md:w-1/4 w-full relative">
            <div className="relative">
              <img src={blobBg.src} alt="" className="block mx-auto relative z-20" style={{ maxWidth: '100%', height: 'auto', position: 'relative' }} />
              <MdProductionQuantityLimits className="mx-auto text-6xl w-16 flex-shrink-0 text-blue-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 z-30" />
            </div>
            <h3 className="text-center text-xl mt-5">Training Branding Produk</h3>
          </div>
          <div className="md:w-1/4 w-full relative">
            <div className="relative">
              <img src={blobBg.src} alt="" className="block mx-auto relative z-20" style={{ maxWidth: '100%', height: 'auto', position: 'relative' }} />
              <GiPublicSpeaker className="mx-auto text-6xl w-16 flex-shrink-0 text-blue-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 z-30" />
            </div>
            <h3 className="text-center text-xl mt-5">Public Speaking</h3>
          </div>
          <div className="md:w-1/4 w-full relative">
            <div className="relative">
              <img src={blobBg.src} alt="" className="block mx-auto relative z-20" style={{ maxWidth: '100%', height: 'auto', position: 'relative' }} />
              <FcCollaboration className="mx-auto text-6xl w-16 flex-shrink-0 text-blue-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 z-30" />
            </div>
            <h3 className="text-center text-xl mt-5">Collaboration</h3>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-0 bg-zinc-100">
        <h2 className="text-center text-3xl font-semibold">Kenapa Anda Harus Memilih Kami</h2>
        <hr className="md:w-1/5 w-full my-10 mx-auto" />
        <div className="max-w-screen-md mx-auto grid grid-cols-2 gap-5 px-5">
          <div className="md:flex bg-white border gap-5 border-black p-5 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <IoExtensionPuzzleOutline className="mx-auto text-6xl w-16 flex-shrink-0 text-blue-800" />
            <div className="flex flex-col gap-5 md:text-left text-center">
              <h3 className="text-lg font-semibold text-blue-800">Solusi Kreatif</h3>
              <p className="text-sm text-zinc-500">Kami akan melakukan upaya ekstra untuk memastikan kesejahteraan klien kami, jam kerja kami sesuai dengan kebutuhan Klien kami sejak kontak pertama kami.</p>
            </div>
          </div>
          <div className="md:flex bg-white border gap-5 border-black p-5 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <FaPeopleGroup className="mx-auto text-6xl w-16 flex-shrink-0 text-blue-800" />
            <div className="flex flex-col gap-5 md:text-left text-center">
              <h3 className="text-lg font-semibold text-blue-800">Tim Profesional</h3>
              <p className="text-sm text-zinc-500">Dengan keahlian yang mendalam, kami berkomitmen untuk memberikan solusi terbaik dan hasil yang memukau untuk meningkatkan daya saing dan keberhasilan bisnismu.</p>
            </div>
          </div>
          <div className="md:flex bg-white border gap-5 border-black p-5 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <GiPerspectiveDiceSixFacesRandom className="mx-auto text-6xl w-16 flex-shrink-0 text-blue-800" />
            <div className="flex flex-col gap-5 md:text-left text-center">
              <h3 className="text-lg font-semibold text-blue-800">Pendekatan Beragam</h3>
              <p className="text-sm text-zinc-500">Kami memiliki banyak pendekatan untuk meningkatkan bisnis Anda.</p>
            </div>
          </div>
          <div className="md:flex bg-white border gap-5 border-black p-5 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <Ri24HoursLine className="mx-auto text-6xl w-16 flex-shrink-0 text-blue-800" />
            <div className="flex flex-col gap-5 md:text-left text-center">
              <h3 className="text-lg font-semibold text-blue-800">Dukungan Ahli 24/7</h3>
              <p className="text-sm text-zinc-500">Pakar kami selalu tersedia melalui telepon dan online. Obrolan web tersedia mulai pukul 08.00 hingga 20.00 atau Anda dapat menghubungi kami secara gratis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="flex justify-between max-w-screen-lg mx-auto p-5">
          <div>
            <h2 className="text-center text-4xl font-semibold">Tentang Perusahaan Kami</h2>
            <hr className="md:w-1/5 w-full my-10 mx-auto" />
            <p className="md:text-left text-center text-zinc-500">
              PT. Funvita Indonesia Investama telah menjadi pelopor dalam menyajikan layanan konsultan bisnis yang inovatif dan beragam. Dengan fokus pada training digital marketing, literasi keuangan, branding produk, public speaking, dan
              kolaborasi, perusahaan ini menjadi mitra ideal untuk membantu organisasi dan individu mengoptimalkan potensi mereka dalam era digital ini. Dengan pendekatan yang dinamis dan berorientasi pada hasil, Funvita memberikan solusi
              yang cerdas dan terdepan untuk menangani tantangan bisnis modern dan meningkatkan daya saing.
            </p>
          </div>
          <img src={heroSection.src} alt="Hero Image" className="md:block hidden" />
        </div>
      </section>
    </main>
  );
}
