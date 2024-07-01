const pricingPlans = [
  {
    id: 0,
    plan: "Starter",
    price: 35,
    paymentLink: "https://buy.stripe.com/3cs01tdh05HMdtSbII",
    title:"One request at a time, cancel anytime",
    features: [
      "1 Request at a time",
      "Average 2/3-day delivery",
      "5 Design Per Month",
      "Cancel anytime",
      "15 Day Money Back Guarantee",
    ],
  },
  {
    id: 1,
    plan: "Standard",
    price: 245,
    paymentLink: "https://buy.stripe.com/14kcOffp8eei3TifZ2",
    title:"One request at a time, cancel anytime",

    features: [
      "1 request at a time",
      "Average 24-48 hours delivery",
      "Unlimited POD Designs",
      "Access to 5000+ Premade Design Library",
      "Limited users",
      "Cancel anytime",
      "15 Day Money Back Guarantee",
    ],
  },
  {
    id:2,
    plan: "Pro",
    price: 395,
    paymentLink: "https://buy.stripe.com/00g4hJ1yi9Y20H68wB",
    title:"Three request at a time, cancel anytime",

    features: [
      "3 requests at a time",
      "Average 24-48 hours delivery",
      "Access to 5000+ Premade Design Library",
      "Unlimited POD Designs",
      "Unlimited users",
      "Cancel anytime",
      "15 Day Money Back Guarantee",
    ],
  },
];
export default pricingPlans;
