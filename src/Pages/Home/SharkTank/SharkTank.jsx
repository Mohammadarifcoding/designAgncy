import React from 'react';
import Container from '../../../Shared/Container/Container';

const SharkTank = () => {
    return (
        <Container>
        <div className='flex lg:flex-row flex-col my-20 justify-center' >
            <div className='bg-white md:p-16 sm:p-8 p-5 rounded-xl'>
             <h2 className='md:text-4xl sm:text-3xl text-2xl font-medium'>"Design is everything, and these guys have nailed it."</h2>
             <div className='flex  items-end mt-5'>
                <div className='flex-1   text-gray-800 md:text-xl sm:text-base text-sm '>
                    <h2>Kevin O'Leary</h2>
                    <h2>Shark Tank</h2>
                </div>
                <div className='flex-1'><img className=' w-full' src="/SharkTank/sharktank.png" alt="" /></div>
                
             </div>
            </div>
            <div className='flex flex-col gap-4'>
 f
            </div>
        </div>
        </Container>

    );
};

export default SharkTank;