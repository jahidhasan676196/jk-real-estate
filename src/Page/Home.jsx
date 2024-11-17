import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from '../Component/Banner';
import Footer from '../Shared/Footer';
import Fechared from '../Component/Fechared';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const cards=useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='mt-20'>
                <h1 className='text-[#131313] font-bold text-4xl text-center'>Our Fechared</h1>
              <div className='grid grid-cols-3 gap-6'>
              {
                    cards.map(card=><Fechared key={card.id} card={card}></Fechared>)
                }
              </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;