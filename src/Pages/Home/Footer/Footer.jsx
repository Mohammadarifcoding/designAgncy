import React from 'react';
import Button from '../../../Shared/Button/Button';
import logoIcon from "../../../../public/logo/logo-no-bg.png";
import  fs1 from "../../../../public/Footer/fs1.svg"
import  fs2 from "../../../../public/Footer/fs2.svg"

const Footer = () => {
    const navLinks = [
      "Latest projects",
      "Pricing",
      "Contact",
      "Client login",
      "Get started",
      "Terms & conditions",
      "Privacy policy",
    ];
    return (
      <div className="relative py-20">
        <img
          loading="lazy"
          className="absolute left-0 top-0 w-[80px] sm:top-0 md:top-[200px] md:w-[120px] lg:top-20 lg:w-[150px] xl:w-[200px]"
          src={fs1}
          alt="fs1"
        />
        <img
          loading="lazy"
          className="absolute right-0 top-0 w-[80px] sm:top-0 md:top-[200px] md:w-[120px] lg:top-20 lg:w-[150px] xl:w-[200px]"
          src={fs2}
          alt="fs2"
        />
        <div className="px-6">
          <h2 className="heading-1 z-10 mx-auto max-w-[900px] px-1 pb-10 text-center -tracking-wide">
            See if CreativeOnDemand is right for you. (It totally is.)
          </h2>
          <p className="description-1 z-10 mx-auto max-w-[520px] px-1 text-center">
            Get a guided tour through CreativeOnDemand, and find out how you and
            your team can change the way you source design, forever.
          </p>
          <div className="flex justify-center py-6">
            <Button className="">Book a call</Button>
          </div>
          <img
            loading="lazy"
            className="mx-auto my-10 w-full max-w-[700px] object-cover"
            src={logoIcon}
            alt="Logo Icon"
          />
          <div className="mx-auto flex max-w-[700px] flex-wrap justify-center gap-x-[100px] gap-y-8 py-8">
            {navLinks?.map((each, idx) => (
              <div className="text-sm text-gray-600" key={idx}>
                {each}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Footer;