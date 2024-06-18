import Lottie from "lottie-react";
import repeat from "../../public/WhatWeCreate/l1.json";
import folder from "../../public/WhatWeCreate/l2.json";
import thumb from "../../public/WhatWeCreate/l3.json";
import ml1 from "../../public/MembershipBenefits/ml1.json";
import ml2 from "../../public/MembershipBenefits/ml2.json";
import ml3 from "../../public/MembershipBenefits/ml3.json";
import ml4 from "../../public/MembershipBenefits/ml4.json";
import ml5 from "../../public/MembershipBenefits/ml5.json";
import ml6 from "../../public/MembershipBenefits/ml6.json";

export const RepeatLottie = () => {
  return <Lottie animationData={repeat}></Lottie>;
};
export const FolderLottie = () => {
  return <Lottie animationData={folder}></Lottie>;
};
export const ThumbLottie = () => {
  return <Lottie animationData={thumb}></Lottie>;
};

// membershipBenifits 

export const DashboardLottie = () => {
  return <Lottie animationData={ml1}></Lottie>;
};
export const BoltLottie = () => {
  return <Lottie animationData={ml2}></Lottie>;
};
export const NoteLottie = () => {
  return <Lottie animationData={ml3}></Lottie>;
};
export const TickLottie = () => {
  return <Lottie animationData={ml4}></Lottie>;
};
export const UpDownLottie = () => {
  return <Lottie animationData={ml5}></Lottie>;
};
export const FingerLottie = () => {
  return <Lottie animationData={ml6}></Lottie>;
};