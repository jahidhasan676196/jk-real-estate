import React from 'react';
import Navbar from '../Shared/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { BiDollar } from "react-icons/bi";
import { FaChartArea } from "react-icons/fa";

const Details = () => {
    const cards=useLoaderData()
    const params=useParams()
    const card=cards.find(card=>card.id==params.userId)
    const {img,estate_title,description,price,status,area,location,facilities,segment_name}=card
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex gap-8 mt-10'>
                <div className='flex-1 '>
                    <img src={img} alt="" />
                </div>
                <div className='flex-1  space-y-6'>
                    <h3 className='text-black font-bold text-3xl'>{estate_title}</h3>
                    <p className='text-[#595959] font-semibold text-lg'>{segment_name}</p>
                    <hr />
                    <p className='flex items-center gap-2 text-[#00e673]'><FaLocationDot></FaLocationDot>{location}</p>
                    <hr />
                    <div className=' p-8 border rounded-lg bg-[#9873FF1A] space-y-4 text-[#474747] font-bold text-xl'>
                        <h3 className='text-[#1A1919] font-extrabold text-xl'>Flat details</h3>
                        <hr className='w-1/2' />
                        <p className='flex items-center'><BiDollar></BiDollar>Price:<span className='text-[#757575] font-medium'>{price} $</span></p>
                        <p className='flex items-center gap-2'><FaChartArea></FaChartArea>Area:<span className='text-[#757575] font-medium'>{area}</span></p>
                        <div>
                            <h3>Our facilities:</h3>
                        {
                            facilities.map(fa=><li className='text-[#757575] font-medium'>{fa}</li>)
                        }
                        </div>
                    </div>
                    <p className='text-lg font-bold text-black'>Overview</p>
                    <p className='text-base font-medium text-[#706F6F]'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;