import React from 'react';
import travelBanner from "../../../assets/img/travel-banner.jpeg";
import { AiOutlineDoubleRight } from 'react-icons/ai';
import "./Carousle.css"

const Carousle = () => {
  return (
    <div>
      <div className="carousel w-full h-[729px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={travelBanner} className="w-full" alt='' />
          <div className='absolute top-72 left-10'>
            <h1 className='text-6xl text-white font-bold'>Travel & <br /> Adventure</h1>
            <div className='flex justify-center items-center'>
              <button className="btn btn-outline btn-warning mt-5">Discover More <AiOutlineDoubleRight className='ml-1'></AiOutlineDoubleRight> </button>
              <button className='hover:text-yellow-400 text-white flex items-center mt-10 text-lg ml-5'>How it work <AiOutlineDoubleRight className='ml-1'></AiOutlineDoubleRight></button>
            </div>
          </div>
          <div className="absolute flex bottom-8 right-3">
            <a href="#slide4" className="btn btn-circle mr-2">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={travelBanner} className="w-full" alt='' />
          <div className='absolute top-72 left-10'>
            <h1 className='text-6xl text-white font-bold'>Travel & <br /> Adventure</h1>
            <div className='flex justify-center items-center'>
              <button className="btn btn-outline btn-warning mt-5">Discover More <AiOutlineDoubleRight className='ml-1'></AiOutlineDoubleRight> </button>
              <button className='hover:text-yellow-400 text-white flex items-center mt-10 text-lg ml-5'>How it work <AiOutlineDoubleRight className='ml-1'></AiOutlineDoubleRight></button>
            </div>
          </div>
          <div className="absolute flex bottom-8 right-3">
            <a href="#slide1" className="btn btn-circle mr-2">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={travelBanner} className="w-full" alt='' />
          <div className='absolute top-72 left-10'>
            <h1 className='text-6xl text-white font-bold'>Travel & <br /> Adventure</h1>
            <div className='flex justify-center items-center'>
              <button className="btn btn-outline btn-warning mt-5">Discover More <AiOutlineDoubleRight className='ml-1'></AiOutlineDoubleRight> </button>
              <button className='hover:text-yellow-400 text-white flex items-center mt-10 text-lg ml-5'>How it work <AiOutlineDoubleRight className='ml-1'></AiOutlineDoubleRight></button>
            </div>
          </div>
          <div className="absolute flex bottom-8 right-3">
            <a href="#slide2" className="btn btn-circle mr-2">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={travelBanner} className="w-full" alt='' />
          <div className='absolute top-72 left-10'>
            <h1 className='text-6xl text-white font-bold'>Travel & <br /> Adventure</h1>
            <div className='flex justify-center items-center'>
              <button className="btn btn-outline btn-warning mt-5">Discover More <AiOutlineDoubleRight className='ml-1'></AiOutlineDoubleRight> </button>
              <button className='hover:text-yellow-400 text-white flex items-center mt-10 text-lg ml-5'>How it work <AiOutlineDoubleRight className='ml-1'></AiOutlineDoubleRight></button>
            </div>
          </div>
          <div className="absolute flex bottom-8 right-3">
            <a href="#slide3" className="btn btn-circle mr-2">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousle;