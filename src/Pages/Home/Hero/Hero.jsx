import Container from "../../../Shared/Container/Container";
import bannerLeft from '../../../../public/banner/banner-left.svg'
import bannerRight from '../../../../public/banner/banner-right.svg'

const Hero = () => {
  return (
		<Container className="p-0 md:p-0 lg:p-0">
			<div className=" z-0 py-20 relative overflow-hidden  ">
				<div className="absolute md:left-0 -left-10 -z-10 lg:mt-0 md:mt-[150px] sm:mt-[250px] mt-[350px]">
					<img className="md:h-[250px]  sm:h-[190px]  xsm:h-[150px] w-[110px]" src={bannerLeft} alt="" />
				</div>
				<div className="absolute md:right-0 -right-12 -z-10 lg:mt-[100px] md:mt-[150px] sm:mt-[200px] mt-[250px]">
					<img className="md:h-[250px]  sm:h-[190px]  xsm:h-[150px] w-[110px]" src={bannerRight} alt="" />
				</div>
				<div className="z-100">
					<h2 className="heading-1 text-center max-w-[1000px] mx-auto">Unlimited POD Designs That Convert – Tailored Just for You</h2>
					<p className="description-1 max-w-[800px] mx-auto text-center my-8">Unlock Creative Freedom with Our Flexible POD Design Subscriptions – Pause or Cancel Anytime</p>
					<div className="flex justify-center">
						<div className="w-max hover:shadow-custom-hover transition-all rounded-xl  duration-500">
							<button className="px-10 bg-gradient-to-b from-black hover:from-[#292929] border-t-2 border-white to-gray-800 hover:to-gray-900  text-white py-5 rounded-xl inner-shadow">
								See plans
							</button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Hero;
Hero;
