import Link from 'next/link';
import funvitaLogoBlue from '../../../public/funvita-logo-blue.png';

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="flex justify-between max-w-screen-xl mx-auto px-5">
        <Link href="/">
          <img src={funvitaLogoBlue.src} alt="Funvita Logo" className="text-sm w-20 cursor-pointer" />
        </Link>
        <li className="gap-10 items-center md:flex hidden">
          <Link href="/" className="py-2 px-3 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300">
            Beranda
          </Link>
          <Link href="/layanan" className="py-2 px-3 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300">
            Layanan
          </Link>
          <Link href="/about" className="py-2 px-3 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300">
            Tentang Kami
          </Link>
          <Link href="/contact" className="py-2 px-3 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300">
            Kontak Kami
          </Link>
        </li>
      </div>
    </nav>
  );
}
