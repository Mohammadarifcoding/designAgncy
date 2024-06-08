import Lottie from "lottie-react";
import repeat from "../../public/WhatWeCreate/l1.json";
import folder from "../../public/WhatWeCreate/l2.json";
import thumb from "../../public/WhatWeCreate/l3.json";

export const RepeatLottie = () => {
  return <Lottie animationData={repeat}></Lottie>;
};
export const FolderLottie = () => {
  return <Lottie animationData={folder}></Lottie>;
};
export const ThumbLottie = () => {
  return <Lottie animationData={thumb}></Lottie>;
};
