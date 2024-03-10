import { FiClock } from 'react-icons/fi';
import { FaLock } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  return (
    <div className="md:flex justify-between max-w-screen-xl mx-auto gap-20 py-20 md:px-0 px-5">
      <div className="md:w-2/3 w-full">
        <h3 className="text-2xl font-medium text-blue-800">Sampaikan pesanmu kepada kami!</h3>
        <form className="mt-10">
          <div>
            <input type="text" name="nama" placeholder="Nama" className="rounded-xl py-3 px-5 border border-gray-400 w-full" />
            <div className="flex gap-10 my-5">
              <input type="email" name="email" placeholder="Email" className="rounded-xl py-3 px-5 border border-gray-400 w-1/2" />
              <input type="text" name="phone" placeholder="No. Handphone" className="rounded-xl py-3 px-5 border border-gray-400 w-1/2" />
            </div>
          </div>
          <textarea name="pesan" placeholder="Ketikkan Pesan Anda" rows={10} className="rounded-xl py-3 px-5 border border-gray-400 w-full"></textarea>
          <a className="py-2 px-5 rounded-lg text-white border border-gray-500 bg-blue-500 hover:bg-blue-800 float-right cursor-pointer">Kirim</a>
        </form>
      </div>
      <div className="md:mt-0 mt-24">
        <div className="bg-white rounded-xl p-10 border border-gray-400 shadow-xl md:mb-20 mb-5">
          <div className="md:flex items-center gap-2">
            <FiClock />
            <p>Senin - Jumat : 08.00 - 17.00</p>
          </div>
          <div className="flex items-center gap-2">
            <FaLock />
            <p>Sabtu - Minggu : Libur</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-10 border border-gray-400 shadow-xl">
          <div>
            <p className="font-semibold">Alamat Kami</p>
            <hr className="my-5" />
            <div className="flex items-center gap-2">
              <FaMapLocationDot />
              <p className="text-blue-500 cursor-pointer hover:text-blue-800">Malang, Indonesia</p>
            </div>
          </div>
          <div className="mt-5">
            <p className="font-semibold">Kontak Lainnya</p>
            <hr className="my-5" />
            <div className="flex items-center gap-2">
              <MdAlternateEmail />
              <p className="text-blue-500 cursor-pointer hover:text-blue-800">iniemailku@mail.com</p>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <FaPhoneAlt />
              <p className="text-blue-500 cursor-pointer hover:text-blue-800">+628139992241</p>
            </div>
            <div className="flex justify-center gap-2 mt-10">
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
      </div>
    </div>
  );
}
