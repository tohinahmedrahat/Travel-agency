import React, { useState } from 'react';
import travel from '../../../assets/img/travel.jpg'
import tent from '../../../assets/img/Boutique_Camping_option_2.webp'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Availability.css'


const Availability = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className='grid md:grid-cols-2 mt-6 pb-8'>
            <div className='bg-[#F9F9F7] py-10 md:pl-10'>
                <h4 className='text-4xl mt-5 font-bold text-black'>Find Best Camping <br /> <span className='font-normal'>Availability</span> </h4>
                <form action="" className='mt-5'>
                    <label htmlFor="" className='text-xl text-black'>Check In</label>
                    <DatePicker className='w-3/4 bg-[#F9F9F7] border-b-gray-400 border-b-2 pl-2 py-2 mb-5 mt-2 font-bold text-black outline-0' selected={startDate} onChange={(date) => setStartDate(date)} />
                    <label htmlFor="" className='text-xl text-black'>Check Out</label>
                    <DatePicker className='w-3/4 bg-[#F9F9F7] border-b-gray-400 border-b-2 pl-2 py-2 mb-5 mt-2 font-bold text-black outline-0' selected={startDate} onChange={(date) => setStartDate(date)} />
                    <input placeholder='Guest' className='w-3/4 bg-[#F9F9F7] border-b-gray-400 border-b-2 pl-2 py-2 mb-5 mt-2 font-bold text-black outline-0' type="number" /><br />
                    <label htmlFor="" className='text-xl text-black'>Accommodation</label><br />
                    <select name="Accommodation" className='w-3/4 bg-[#F9F9F7] border-b-gray-400 border-b-2 pl-2 py-2 mt-2 font-bold text-black outline-0'>
                        <option value="classic-tent">Classic Tent</option>
                        <option value="Forest Tent" selected>Forest Tent</option>
                        <option value="Small Trailer">Small Trailer</option>
                        <option value="Tree House Tent">Tree House Tent</option>
                        <option value="Couple Tent">Couple Tent</option>
                    </select>
                        <button className='btn-grad mt-5'>Check Availability</button>
                </form>
            </div>
            <div className='relative'>
                <div className='h-full absolute right-0 w-3/4 bg-yellow-400'></div>
                <div className='absolute md:mr-20 top-10 md:ml-[-50px]'>
                    <img src={tent} className="h-[508px]" alt="" />
                </div>
                <div className='absolute w-[265px] right-12 top-40'>
                    <img src={travel} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Availability;