import React from 'react';
import classic from '../../../assets/img/classic-tent.jpg'
import forest from '../../../assets/img/forest-camping.jpg'
import small from '../../../assets/img/small-trailer.jpg'
import "./PopularService.css"

const PopularService = () => {
    return (
        <div className='mt-8'>
            <h5 className='text-center text-xl'>Popular Services</h5>
            <h1 className='text-center text-5xl font-bold mt-2 leading-snug'>Amazing Camping For <br /> <span className='font-light'>Real Adventure</span></h1>
            <div className='mt-4 grid md:grid-cols-3 gap-4 md:mx-5'>
                <div className='bg-white text-black'>
                    <div className='relative overflow-hidden'>
                        <img src={classic} alt="" />
                        <div className='shape'></div>
                    </div>
                    <div className='px-9 py-5'>
                        <h2 className="card-title relative custom-title mb-2">Classic Tent</h2>
                        <p>Sit amet consectetur adipisc fermentumat tellusaliquam arcu uturnacon sequat</p>
                        <hr className='border-gray-400 border-1 mt-3' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularService;