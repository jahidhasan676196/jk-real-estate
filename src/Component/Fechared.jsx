import React from 'react';
import { Link } from 'react-router-dom';
import Details from './Details';

const Fechared = ({card}) => {
    const {id,img,estate_title,description}=card
    return (
        <div className="card  border mt-14 ">
         <figure>
           <img className='w-full h-full'
             src={img}
             alt="Shoes" />
         </figure>
         <div className="card-body text-start">
           <h2 className="card-title text-[#131313] text-2xl font-bold">{estate_title}</h2>
           <p>{description.slice(0,200)}</p>
           <Link to={`/details/${id}`} className='text-blue-800 font-bold ml-8'><button className='btn bg-[#5c85d6] text-white text-center'>View Property</button></Link>
         </div>
       </div>
    );
};

export default Fechared;