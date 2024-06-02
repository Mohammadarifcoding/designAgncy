import Container from "../../../Shared/Container/Container";

const Hero = () => {
  return (
    <Container>
      <div className="bg-gray-100 py-20">
        <h2 className="heading-1 text-center max-w-[1000px] mx-auto">
          Unlimited POD Designs That Convert – Tailored Just for You
        </h2>
        <p className="description-1 max-w-[800px] mx-auto text-center my-8">
          Unlock Creative Freedom with Our Flexible POD Design Subscriptions –
          Pause or Cancel Anytime
        </p>
        <div className="flex justify-center  ">
         <button className="px-10 bg-gradient-to-b from-black border-t-2 border-white shadow-normal-hover  to-gray-800 hover:shadow-custom-hover  transition-all duration-500 text-white py-5 rounded-lg ">See plans</button>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
Hero;
