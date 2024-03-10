import Link from 'next/link';
import funvitaLogoWhite from '../../../public/funvita-logo-white.png';
import { MdNavigateNext } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="pt-20 bg-zinc-900 md:px-0 px-5">
      <div className="md:flex max-w-screen-lg mx-auto gap-14 pb-20">
        <div className="md:w-1/4 md:text-left w-full text-center">
          <img src={funvitaLogoWhite.src} alt="" className="w-20 mx-auto" />
          <p className="text-sm mt-2 text-zinc-100">
            PT. Funvita Indonesia Investama, perusahaan yang bergerak di bidang konsultan peningkatan menajemen pemasaran perusahaan serta training digital marketing, literasi keuangan dan branding produk.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold md:mt-5 mt-10 text-white md:text-left text-center">Perusahaan</h3>
          <ul className="md:mt-10 mt-5">
            <li className="flex items-center mt-2 underline hover:text-blue-500 text-sm text-zinc-100">
              <MdNavigateNext />
              <Link href="/layanan">Layanan Kami</Link>
            </li>
            <li className="flex items-center mt-2 underline hover:text-blue-500 text-sm text-zinc-100">
              <MdNavigateNext />
              <Link href="/about">Tentang Kami</Link>
            </li>
            <li className="flex items-center mt-2 underline hover:text-blue-500 text-sm text-zinc-100">
              <MdNavigateNext />
              <Link href="/contact">Kontak Kami</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold md:mt-5 mt-10 text-white md:text-left text-center">Layanan</h3>
          <ul className="md:mt-10 mt-5">
            <li className="flex items-center mt-2 underline hover:text-blue-500 text-sm text-zinc-100 cursor-pointer">
              <MdNavigateNext />
              <p>Konsultan Bisnis</p>
            </li>
            <li className="flex items-center mt-2 underline hover:text-blue-500 text-sm text-zinc-100 cursor-pointer">
              <MdNavigateNext />
              <p>Training Digital Marketing</p>
            </li>
            <li className="flex items-center mt-2 underline hover:text-blue-500 text-sm text-zinc-100 cursor-pointer">
              <MdNavigateNext />
              <p>Training Digital Literasi Keuangan</p>
            </li>
            <li className="flex items-center mt-2 underline hover:text-blue-500 text-sm text-zinc-100 cursor-pointer">
              <MdNavigateNext />
              <p>Training Branding Produk</p>
            </li>
            <li className="flex items-center mt-2 underline hover:text-blue-500 text-sm text-zinc-100 cursor-pointer">
              <MdNavigateNext />
              <p>Public Speaking</p>
            </li>
            <li className="flex items-center mt-2 underline hover:text-blue-500 text-sm text-zinc-100 cursor-pointer">
              <MdNavigateNext />
              <p>Collaboration</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold md:mt-5 mt-10 text-white text-center">Social Media</h3>
          <div className="flex justify-center gap-2 md:mt-10 mt-5 h-fit">
            <div className="border border-gray-500 text-blue-500 bg-white hover:text-white hover:bg-blue-500 p-2 rounded-full transition-all duration-300 cursor-pointer">
              <FaFacebookF className="text-xl" />
            </div>
            <div className="border border-gray-500 text-blue-500 bg-white hover:text-white hover:bg-blue-500 p-2 rounded-full transition-all duration-300 cursor-pointer">
              <FaLinkedinIn className="text-xl" />
            </div>
            <div className="border border-gray-500 text-pink-500 bg-white hover:text-white hover:bg-pink-500 p-2 rounded-full transition-all duration-300 cursor-pointer">
              <FaInstagram className="text-xl" />
            </div>
            <div className="border border-gray-500 bg-white hover:text-white hover:bg-black p-2 rounded-full transition-all duration-300 cursor-pointer">
              <FaXTwitter className="text-xl" />
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-blue-500" />
      <h3 className="text-sm text-white text-center py-5">Copyright © Izzan Abdul. All Rights Reserved</h3>
    </footer>
  );
}
