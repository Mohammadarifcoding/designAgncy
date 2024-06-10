import React from 'react';
import bar from '/bar.svg'
import art1 from '/ArtOfSubtlety/art1.svg'
import art2 from '/ArtOfSubtlety/art2.svg'
import Button from '../../../Shared/Button/Button';


const ArtOfSubtlety = () => {
    return (
      <div className="relative py-20">
        <img
          className="absolute  left-0 w-[120px] md:-left-8 top-[250px] lg:-left-5 lg:top-24 lg:w-[180px] xl:left-0 xl:w-[200px]"
          src={art1}
          alt="s1"
        />
        <img
          className="absolute -right-14  w-[130px] md:-right-10 top-[250px] md:w-[150px] lg:-right-5 lg:top-24 lg:w-[180px] xl:right-0 xl:w-[200px]"
          src={art2}
          alt="s2"
        />
        <p className="text-center text-black/80">They said it best</p>
        <h3 className="mx-auto max-w-[650px] py-10 text-center text-4xl font-medium">
          “CreativeOnDemand shows that they know the art of subtlety.”
        </h3>
        <img className="mx-auto mb-10" src={bar} alt="bar" />
        <h1 className="heading-1 mx-auto max-w-[700px] text-center">
          It’s “you’ll never go back” better
        </h1>
        <p className="description-1 mx-auto my-8 max-w-[560px] text-center">
          CreativeOnDemand replaces unreliable freelancers for one flat monthly
          fee, with designs delivered so fast that it will blow your mind.
        </p>
        <div className="mt-10 flex justify-center">
          <Button>See Plans</Button>
        </div>
      </div>
    );
};

export default ArtOfSubtlety;