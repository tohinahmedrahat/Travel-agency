import React from 'react';
import bg from '../../../assets/img/video-1.jpg'
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { MdOutlineHiking } from 'react-icons/md';
import "./GetStarted.css"


const GetStarted = () => {
    return (
        <div className='mt-10'>
            <div className='relative'>
                <img src={bg} alt="" />
                <div className='absolute top-14 left-10'>
                    <h1 className='text-5xl text-white font-bold'>Ready to Get Started <br /> your Travel Camping Us</h1>
                    <button className="btn btn-outline btn-success mt-7">Watch Video <AiOutlineDoubleRight className='ml-2'></AiOutlineDoubleRight></button>
                </div>
            </div>
            <div className='w-3/4 pb-16 mx-auto mt-[-120px] custom-review'> 
                <div className='pt-16 md:pl-20 grid md:grid-cols-4 gap-6'>
                    <div className=''>
                        <MdOutlineHiking className='w-24 h-24 text-green-300'></MdOutlineHiking>
                        <h1 className='text-5xl font-bold text-black mt-2'>365K+</h1>
                        <h5 className='text-xl text-black mt-2'>Happy Travel</h5>
                    </div>
                    <div className=''>
                        <MdOutlineHiking className='w-24 h-24 text-green-300'></MdOutlineHiking>
                        <h1 className='text-5xl font-bold text-black mt-2'>365K+</h1>
                        <h5 className='text-xl text-black mt-2'>Happy Travel</h5>
                    </div>
                    <div className=''>
                        <MdOutlineHiking className='w-24 h-24 text-green-300'></MdOutlineHiking>
                        <h1 className='text-5xl text-black font-bold mt-2'>365K+</h1>
                        <h5 className='text-xl text-black mt-2'>Happy Travel</h5>
                    </div>
                    <div className=''>
                        <MdOutlineHiking className='w-24 h-24 mr-0 text-green-300'></MdOutlineHiking>
                        <h1 className='text-5xl text-black font-bold mt-2'>365K+</h1>
                        <h5 className='text-xl text-black mt-2'>Happy Travel</h5>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GetStarted;