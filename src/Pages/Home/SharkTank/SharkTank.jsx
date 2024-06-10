import React from 'react';
import Container from '../../../Shared/Container/Container';

const SharkTank = () => {
    const SharkTankData = [
        {
            title:'Totally async',
            description:"Don't like meetings? We don't either; so much so that we've outlawed them completely."
        },
        {
            title:'Manage with Trello',
            description:"Manage your design board using Trello. View active, queued and completed tasks with ease."
        },
        {
            title:'Invite your team',
            description:"Invite your entire team, so anyone can submit requests and track their progress."
        }
    ]
    return (
        <Container>
        <div className='flex lg:flex-row flex-col my-20 gap-10 justify-center' >
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
            <div className='flex flex-col gap-10'>
               {
                SharkTankData.map((item)=>(
                    <div className='flex flex-col gap-5'>
                            <h2 className='sm:text-4xl text-2xl'>{item.title}</h2>
                            <p className='sm:text-2xl text-xl text-gray-700'>{item.description}</p>

                    </div>
                ))
               }
            </div>
        </div>
        </Container>

    );
};

export default SharkTank;