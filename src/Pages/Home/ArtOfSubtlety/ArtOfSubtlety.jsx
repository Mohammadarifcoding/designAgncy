import React from "react";
import Button from "../../../Shared/Button/Button";
import art1 from "/ArtOfSubtlety/art1.svg";
import art2 from "/ArtOfSubtlety/art2.svg";
import bar from "/bar.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const ArtOfSubtlety = () => {
  return (
    <div className="relative py-20">
      <motion.img
        initial={{ x: "-50px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        loading="lazy"
        className="absolute left-0 top-[310px] w-[110px] sm:top-[250px] md:-left-8 lg:-left-5 lg:top-24 lg:w-[180px] xl:left-0 xl:w-[200px]"
        src={art1}
        alt="s1"
      />
      <motion.img
        initial={{ x: "50px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        loading="lazy"
        className="absolute -right-14 top-[310px] w-[120px] sm:top-[250px] md:-right-10 md:w-[150px] lg:-right-5 lg:top-24 lg:w-[180px] xl:right-0 xl:w-[200px]"
        src={art2}
        alt="s2"
      />
      <motion.p
        initial={{ y: "50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-black/80"
      >
        They said it best
      </motion.p>
      <motion.h3
        initial={{ y: "50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[650px] px-1 py-10 text-center text-2xl font-medium xsm:text-3xl sm:text-4xl"
      >
        “CreativeOnDemand shows that they know the art of subtlety.”
      </motion.h3>
      <motion.img
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        loading="lazy"
        className="mx-auto mb-10"
        src={bar}
        alt="bar"
      />
      <motion.h1
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="heading-1 mx-auto max-w-[700px] text-center"
      >
        It’s “you’ll never go back” better
      </motion.h1>
      <motion.p
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="description-1 mx-auto my-8 max-w-[560px] text-center"
      >
        CreativeOnDemand replaces unreliable freelancers for one flat monthly
        fee, with designs delivered so fast that it will blow your mind.
      </motion.p>
    </div>
  );
};

export default ArtOfSubtlety;
