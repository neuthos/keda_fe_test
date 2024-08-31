import React from "react";
import PricingCard from "../../molecules/PricingCard";

const tiers = [
  {
    name: "Basic",
    price: "$9.99",
    features: [
      "Record incoming goods",
      "Record outgoing goods",
      "Track profit results",
    ],
  },
  {
    name: "Business",
    price: "$29.99",
    features: [
      "Record incoming and outgoing goods",
      "Track profit",
      "Analyze sales results with CHART",
      "24/7 Support",
    ],
  },
  {
    name: "Entrepreneur",
    price: "$59.99",
    features: [
      "Record incoming and outgoing goods",
      "Track profit",
      "Analyze sales results with CHART",
      "24/7 Support",
      "Export data to Excel",
      "AI Revenue Prediction",
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="w-11/12 md:w-2/3 mx-auto">
        <h2 className="mb-5 text-center text-primary font-extrabold text-4xl md:text-[52px]">
          Pricing
        </h2>
        <p className="text-center text-lg md:text-xl mb-10">
          At Neubusiness, we understand that every business has unique
          requirements. That's why we've designed a range of flexible pricing
          tiers that cater to different stages of growth, ensuring you get
          exactly what you need, when you need it.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingCard
              key={index}
              name={tier.name}
              price={tier.price}
              features={tier.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
