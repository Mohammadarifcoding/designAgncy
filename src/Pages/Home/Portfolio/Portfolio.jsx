import React from 'react';
import Marquee from 'react-fast-marquee';
import PortfolioData from '../../../Data/Portfolio';
import Button from '../../../Shared/Button/Button';

const Portfolio = () => {
    return (
        <div className='flex flex-col gap-7 pb-20'>
                <Marquee>
        <div className='flex  '>
            {
                PortfolioData.map((item)=>(
                    <img className=' md:w-[300px]  mx-4 w-[250px] rounded-2xl' src={item} alt="" />
                ))
            }
        </div>
       
        </Marquee>
        <div  className='mx-auto flex justify-center cursor-pointer'>
         <Button>View More</Button>
     </div>

        </div>

        
    );
};

export default Portfolio;