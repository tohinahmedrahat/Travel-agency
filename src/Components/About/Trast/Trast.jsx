import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { GiBarracksTent, GiCampingTent, GiSpookyHouse } from "react-icons/gi";
import { TbCampfire } from "react-icons/tb";

const Trast = () => {
  return (
    <div className="my-16 max-w-7xl mx-auto">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-1/2 px-5 mb-10 lg:mb-0">
          <div className="flex w-full items-center justify-start text-xl font-medium text-[#484848] mb-[15px]">
            <h1>01</h1>
            <hr className="border-black border w-16 mx-7" />
            <h1>About Us</h1>
          </div>
          <h1 className="text-[27px] md:text-4xl text-[#1C231F] font-extralight">
            <span className="font-semibold mr-2">
              We’re Most Trusted Travel
            </span>
            Partner Aroud The World
          </h1>
        </div>
        <div className="lg:w-1/2 px-5">
          <p className="text-[#484848] text-base font-light leading-7">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
            volutpat bibendum imperdiet sit fermentum non. Vel sed neque,
            fringilla facilisi neque fusce faucibus erat. Tincidunt egestas
            morbi urna urna, at mi. Velit tincidunt pellentesque urna, leo lorem
            cursus lacinia. Amet viverra habitasse euismod scelerisque faucibus
            porttitor miey
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10 px-5 lg:px-0">
        <div className="bg-[#F0F7ED] flex flex-col items-center justify-center p-10">
          <p className="bg-[#F7921E] p-5 rounded-full mb-7">
            <GiSpookyHouse className="text-5xl text-white" />
          </p>
          <h2 className="mb-[13px] text-[#1C231F] font-medium text-[22px]">
            Private Cottages
          </h2>
          <p className="mb-[30px] text-center">
            Quisque vulputate amtacipe aliuam diam sitis etia
          </p>

          <p className="pt-5 border-t-2 font-semibold text-base flex items-center justify-center border-t-[#0000001a] cursor-pointer hover:text-[#63AC45] duration-300 w-full">
            LEARN MORE <AiOutlineDoubleRight className="ml-3" />
          </p>
        </div>

        <div className="bg-[#F0F7ED] flex flex-col items-center justify-center p-10">
          <p className="bg-[#63AC45] p-5 rounded-full mb-7">
            <GiCampingTent className="text-5xl text-white" />
          </p>
          <h2 className="mb-[13px] text-[#1C231F] font-medium text-[22px]">
            Tents On Rent
          </h2>
          <p className="mb-[30px] text-center">
            Quisque vulputate amtacipe aliuam diam sitis etia
          </p>

          <p className="pt-5 border-t-2 font-semibold text-base flex items-center justify-center border-t-[#0000001a] cursor-pointer hover:text-[#63AC45] duration-300 w-full">
            LEARN MORE <AiOutlineDoubleRight className="ml-3" />
          </p>
        </div>

        <div className="bg-[#F0F7ED] flex flex-col items-center justify-center p-10">
          <p className="bg-[#FF702A] p-5 rounded-full mb-7">
            <GiBarracksTent className="text-5xl text-white" />
          </p>
          <h2 className="mb-[13px] text-[#1C231F] font-medium text-[22px]">
            Summer Camp
          </h2>
          <p className="mb-[30px] text-center">
            Quisque vulputate amtacipe aliuam diam sitis etia
          </p>

          <p className="pt-5 border-t-2 font-semibold text-base flex items-center justify-center border-t-[#0000001a] cursor-pointer hover:text-[#63AC45] duration-300 w-full">
            LEARN MORE <AiOutlineDoubleRight className="ml-3" />
          </p>
        </div>

        <div className="bg-[#F0F7ED] flex flex-col items-center justify-center p-10">
          <p className="bg-[#08A8F0] p-5 rounded-full mb-7">
            <TbCampfire className="text-5xl text-white" />
          </p>
          <h2 className="mb-[13px] text-[#1C231F] font-medium text-[22px]">
            Wood Fire
          </h2>
          <p className="mb-[30px] text-center">
            Quisque vulputate amtacipe aliuam diam sitis etia
          </p>

          <p className="pt-5 border-t-2 font-semibold text-base flex items-center justify-center border-t-[#0000001a] cursor-pointer hover:text-[#63AC45] duration-300 w-full">
            LEARN MORE <AiOutlineDoubleRight className="ml-3" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trast;
