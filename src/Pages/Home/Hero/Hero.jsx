import Marquee from "react-fast-marquee";
import BrandName from "../../../Data/BrandName";
import Button from "../../../Shared/Button/Button";
import Container from "../../../Shared/Container/Container";
import bannerLeft from "/banner/banner-left.svg";
import bannerRight from "/banner/banner-right.svg";

const Hero = () => {
  return (
    <Container className="p-0 md:p-0 lg:p-0">
      <div className=" z-0 py-20 relative overflow-hidden  ">
        <div className="absolute md:left-0 -left-10 -z-10 lg:mt-0 md:mt-[150px] sm:mt-[250px] mt-[350px]">
          <img
            className="md:h-[250px]  sm:h-[190px]  xsm:h-[150px]  md:w-[170px] sm:w-[140px] w-[110px]"
            src={bannerLeft}
            alt=""
          />
        </div>
        <div className="absolute md:right-0 -right-12 -z-10 lg:mt-[100px] md:mt-[150px] sm:mt-[200px] mt-[250px]">
          <img
            className="md:h-[250px]  sm:h-[190px]  xsm:h-[150px] md:w-[170px] sm:w-[140px] w-[110px]"
            src={bannerRight}
            alt=""
          />
        </div>
        <div className="z-100 flex gap-4 flex-col">
          <h2 className="heading-1 text-center max-w-[1000px] mx-auto">
          Unlimited POD Designs on Subscriptions.
          </h2>
          <p className="description-1 max-w-[800px] mx-auto text-center my-4">
          Unlock Creative Freedom with Our Flexible POD Design Subscriptions – Cancel Anytime 
          </p>
          <div className="flex justify-center">
            <Button>See Plans</Button>
          </div>
          <div className="flex justify-center text-[12px]">Available Now</div>
          <div className="flex justify-center my-10">
            <Button className='px-0  rounded-full' OuterClassName={'rounded-full mx-4'}>
              <div className="flex  lg:max-w-[700px] md:max-w-[500px] sm:max-w-[490px] xsm:max-w-[350px] max-w-[250px]">
                <Marquee>
                  <div className="flex">
                  {BrandName.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6">
                      <div className="">{item.name}</div>
                      <div className="bg-blue-500 w-[7px] h-[7px] mr-6 rotate-45"></div>
                    </div>
                  ))}
                  </div>
                 
                </Marquee>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;

