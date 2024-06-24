import React from 'react';
import BookCall from '../Join/BookCall/BookCall';

const Pricing = () => {
    const pricingPlans = [
        {
            plan: "Starter",
            price: 35,
            paymentLink: "https://buy.stripe.com/3cs01tdh05HMdtSbII",
            features: [
                "1 Request at a time",
                "Average 2/3-day delivery",
                "5 Design Per Month",
                "Cancel anytime",
                "15 Day Money Back Guarantee"
            ]
        },
        {
            plan: "Standard",
            price: 245,
            paymentLink: "https://buy.stripe.com/14kcOffp8eei3TifZ2",
            features: [
                "1 request at a time",
                "Average 24-48 hours delivery",
                "Unlimited POD Designs",
                "Access to 5000+ Premade Design Library",
                "Limited users",
                "Cancel anytime",
                "15 Day Money Back Guarantee"
            ]
        },
        {
            plan: "Pro",
            price: 395,
            paymentLink: "https://buy.stripe.com/00g4hJ1yi9Y20H68wB",
            features: [
                "3 requests at a time",
                "Average 24-48 hours delivery",
                "Access to 5000+ Premade Design Library",
                "Unlimited POD Designs",
                "Unlimited users",
                "Design Research",
                "Niche Research",
                "Cancel anytime",
                "15 Day Money Back Guarantee"
            ]
        }
    ];
    
    return (
        <div className="max-w-[450px] rounded-xl relative bg-white">
        {/* <img className='absolute right-0 rounded-r-xl' src="https://assets-global.website-files.com/5837424ae11409586f837994/65de149940ab9eb5eaf6a916_4.svg" alt="" / */}
        <div className=" flex flex-col gap-7 rounded-xl border-t-2 border-white bg-gradient-to-b  px-6 py-6 text-black sm:px-8 sm:py-8 md:px-10 md:py-10">

          <h2 className="text-3xl font-[580]  md:text-4xl">
            MemberShip
          </h2>
          {/* book call */}
          <BookCall />
        </div>
      </div>
    );
};

export default Pricing;