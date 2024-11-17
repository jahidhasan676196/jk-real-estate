import React from 'react';
import { Link } from 'react-router-dom';

const Fechared = ({card}) => {
    const {img,estate_title,description}=card
    return (
        <div className="card  border mt-14 ">
         <figure>
           <img className='w-full h-full'
             src={img}
             alt="Shoes" />
         </figure>
         <div className="card-body">
           <h2 className="card-title text-[#131313] text-2xl font-bold">{estate_title}</h2>
           {
            description.length>200?<><p className='text-[#131313CC] font-medium text-base'>{description.slice(0,190)}
            <Link className='text-blue-800 font-bold ml-8'>Read More...</Link></p></>:""
           }
         </div>
       </div>
    );
};

export default Fechared;