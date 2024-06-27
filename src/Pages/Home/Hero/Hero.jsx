import Marquee from "react-fast-marquee";
import BrandName from "../../../Data/BrandName";
import Button from "../../../Shared/Button/Button";
import Container from "../../../Shared/Container/Container";
import bannerLeft from "/banner/banner-left.svg";
import bannerRight from "/banner/banner-right.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container className="p-0 md:p-0 lg:p-0">
      <div className="relative z-0 overflow-hidden pb-20 pt-10">
        <div className="absolute -left-10 -z-10 mt-[350px] sm:mt-[250px] md:left-0 md:mt-[150px] lg:mt-0">
          <img
            loading="lazy"
            className="w-[100px] xsm:h-[150px] sm:h-[190px] sm:w-[140px] md:h-[280px] md:w-[190px]"
            src={bannerLeft}
            alt=""
          />
        </div>
        <div className="absolute -right-12 -z-10 mt-[250px] sm:mt-[200px] md:right-0 md:mt-[150px] lg:mt-[100px]">
          <img
            loading="lazy"
            className="w-[100px] xsm:h-[150px] sm:h-[190px] sm:w-[140px] md:h-[280px] md:w-[190px]"
            src={bannerRight}
            alt=""
          />
        </div>
        <div className="z-100 flex flex-col gap-4">
          <h2 className="heading-1 mx-auto max-w-[900px] text-center">
            Unlimited POD Designs on Subscriptions.
          </h2>
          <p className="description-1 mx-auto mb-4 mt-3 max-w-[800px] px-2 text-center">
            Unlock Creative Freedom with Our Flexible POD Design Subscriptions –
            Cancel Anytime
          </p>
          <a href="#plans">
            {" "}
            <div className="mt-10 flex cursor-pointer justify-center">
              <Button>See Plans</Button>
            </div>
          </a>

          <div className="flex justify-center text-[12px]">Available Now</div>
          <div className="my-10 flex justify-center">
            <Button
              className="rounded-full px-0"
              OuterClassName={"rounded-full mx-4"}
            >
              <div className="flex max-w-[250px] xsm:max-w-[350px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[900px]">
                <Marquee>
                  <div className="flex">
                    {BrandName.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-6">
                        <img
                          loading="lazy"
                          className="max-w-[100px]"
                          src={item.img}
                          alt=""
                        />
                        {/* <div className="">{item.name}</div> */}
                        <div className="mr-6 h-[7px] w-[7px] rotate-45 bg-blue-500"></div>
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
