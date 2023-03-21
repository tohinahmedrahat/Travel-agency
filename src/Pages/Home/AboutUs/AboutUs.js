import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import twoperson from '../../../assets/img/twopersontent.jpg'

const AboutUs = () => {
    return (
        <div className='grid md:grid-cols-2 mt-7 gap-12'>
            <div>
                <img src={twoperson} alt="" />
            </div>
            <div>
                <h4 className='capitalize text-xl'>about us</h4>
                <h1 className='capitalize text-4xl font-bold mt-2'>We’re Most Trusted Travel <br /> <span className='font-normal'>Partner Aroud The World</span> </h1>
                <p className='mt-5'>Sit amet consectetur adipiscing elit. At donec et fusce orci tellus aliquam vitae. Metus nibh laoreet velit, diam enim. Justo sagittis fringilla ulputatey honcus justo, cras sed</p>
                <div className='flex items-center mt-5'>
                    <BsCheckCircleFill className='w-6 h-6'></BsCheckCircleFill>
                    <h6 className='ml-3'>Wild Camping</h6>
                </div>
                <div className='flex items-center mt-2'>
                    <BsCheckCircleFill className='w-6 h-6'></BsCheckCircleFill>
                    <h6 className='ml-3'>Family Camping</h6>
                </div>
                <div className='flex items-center mt-2'>
                    <BsCheckCircleFill className='w-6 h-6'></BsCheckCircleFill>
                    <h6 className='ml-3'>Tent Camping</h6>
                </div>
                <button className="btn btn-outline btn-warning mt-5">Learn More <AiOutlineArrowRight className='ml-1'></AiOutlineArrowRight></button>
            </div>
        </div>
    );
};

export default AboutUs;