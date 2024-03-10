import Link from 'next/link';
import funvitaLogoBlue from '../../../public/funvita-logo-blue.png';
import { TiThMenu } from 'react-icons/ti';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

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
        <Sheet>
          <SheetTrigger className="md:hidden">
            <TiThMenu className="text-xl" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="mb-5">Menu</SheetTitle>
              <SheetDescription className="flex flex-col gap-2">
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
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
