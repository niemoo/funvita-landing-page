import layanan1 from '../../../public/layanan-1.jpg';
import layanan2 from '../../../public/layanan-2.jpg';
import layanan3 from '../../../public/layanan-3.jpg';
import layanan4 from '../../../public/layanan-4.jpg';
import { FaBusinessTime } from 'react-icons/fa6';
import { MdOnDeviceTraining } from 'react-icons/md';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { GiPublicSpeaker } from 'react-icons/gi';
import { FcCollaboration } from 'react-icons/fc';

export default function Layanan() {
  return (
    <div className="bg-white pb-20">
      <div className="bg-zinc-100 text-center py-20 px-5">
        <p className="text-blue-400 text-lg font-semibold mb-2">Layanan</p>
        <h1 className="text-blue-900 text-5xl font-semibold">Layanan Utama Konsulting Kami</h1>
      </div>
      <div className="md:flex md:flex-wrap max-w-screen-xl mx-auto md:p-0 p-5">
        <div className="flex gap-5 items-center w-1/2 mt-14">
          <img src={layanan1.src} alt="" />
          <div className="flex flex-col gap-10">
            <FaBusinessTime className="text-7xl text-white bg-blue-400 shadow-blue-400 shadow-lg rounded-full border border-black p-3 md:block hidden" />
            <h3 className="text-xl font-semibold">Konsultan Bisnis</h3>
            <p className="text-zinc-500">Globally grow cutting-edge methodologies after visionary opportunities.</p>
            <a className="text-sm underline text-blue-500 hover:text-blue-800 cursor-pointer">Lihat selengkapnya -&gt;</a>
          </div>
        </div>
        <div className="flex gap-5 items-center w-1/2 mt-14">
          <img src={layanan2.src} alt="" />
          <div className="flex flex-col gap-10">
            <MdOnDeviceTraining className="text-7xl text-white bg-blue-400 shadow-blue-400 shadow-lg rounded-full border border-black p-3 md:block hidden" />
            <h3 className="text-xl font-semibold">Training Digital Marketing</h3>
            <p className="text-zinc-500">Globally grow cutting-edge methodologies after visionary opportunities.</p>
            <a className="text-sm underline text-blue-500 hover:text-blue-800 cursor-pointer">Lihat selengkapnya -&gt;</a>
          </div>
        </div>
        <div className="flex gap-5 items-center w-1/2 mt-14">
          <img src={layanan3.src} alt="" />
          <div className="flex flex-col gap-10">
            <FaHandHoldingUsd className="text-7xl text-white bg-blue-400 shadow-blue-400 shadow-lg rounded-full border border-black p-3 md:block hidden" />
            <h3 className="text-xl font-semibold">Training Digital Literasi Keuangan</h3>
            <p className="text-zinc-500">Globally grow cutting-edge methodologies after visionary opportunities.</p>
            <a className="text-sm underline text-blue-500 hover:text-blue-800 cursor-pointer">Lihat selengkapnya -&gt;</a>
          </div>
        </div>
        <div className="flex gap-5 items-center w-1/2 mt-14">
          <img src={layanan4.src} alt="" />
          <div className="flex flex-col gap-10">
            <MdProductionQuantityLimits className="text-7xl text-white bg-blue-400 shadow-blue-400 shadow-lg rounded-full border border-black p-3 md:block hidden" />
            <h3 className="text-xl font-semibold">Training Branding Produk</h3>
            <p className="text-zinc-500">Globally grow cutting-edge methodologies after visionary opportunities.</p>
            <a className="text-sm underline text-blue-500 hover:text-blue-800 cursor-pointer">Lihat selengkapnya -&gt;</a>
          </div>
        </div>
        <div className="flex gap-5 items-center w-1/2 mt-14">
          <img src={layanan1.src} alt="" />
          <div className="flex flex-col gap-10">
            <GiPublicSpeaker className="text-7xl text-white bg-blue-400 shadow-blue-400 shadow-lg rounded-full border border-black p-3 md:block hidden" />
            <h3 className="text-xl font-semibold">Public Speaking</h3>
            <p className="text-zinc-500">Globally grow cutting-edge methodologies after visionary opportunities.</p>
            <a className="text-sm underline text-blue-500 hover:text-blue-800 cursor-pointer">Lihat selengkapnya -&gt;</a>
          </div>
        </div>
        <div className="flex gap-5 items-center w-1/2 mt-14">
          <img src={layanan2.src} alt="" />
          <div className="flex flex-col gap-10">
            <FcCollaboration className="text-7xl text-white bg-blue-400 shadow-blue-400 shadow-lg rounded-full border border-black p-3 md:block hidden" />
            <h3 className="text-xl font-semibold">Collaboration</h3>
            <p className="text-zinc-500">Globally grow cutting-edge methodologies after visionary opportunities.</p>
            <a className="text-sm underline text-blue-500 hover:text-blue-800 cursor-pointer">Lihat selengkapnya -&gt;</a>
          </div>
        </div>
      </div>
    </div>
  );
}
