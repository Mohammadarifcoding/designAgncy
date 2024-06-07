import React from 'react';
import Marquee from 'react-fast-marquee';
import PortfolioData from '../../../Data/Portfolio';
import Button from '../../../Shared/Button/Button';

const Portfolio = () => {
    return (
        <div className='flex flex-col gap-7 pb-20'>
                <Marquee>
        <div className='flex gap-8 '>
            {
                PortfolioData.map((item)=>(
                    <img className='lg:w-[400px] md:w-[300px]  w-[250px] rounded-xl' src={item} alt="" />
                ))
            }
        </div>
       
        </Marquee>
        <div className='mx-auto flex justify-center cursor-pointer'>
         <Button>View More</Button>
     </div>

        </div>

        
    );
};

export default Portfolio;