import React from "react";
import {Typography} from "antd";
import ModalLogin from "../Login/ModalLogin";
import HeroIllustrator from "../../../assets/HeroIllustrator";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row md:py-28 w-11/12 md:w-2/3 mx-auto mt-24">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <Typography.Title
          level={1}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Simplify Your Inventory and Profit Tracking with Neubusiness
        </Typography.Title>
        <p className="text-lg md:text-xl mb-10">
          Choose the perfect solution for your business needs—whether you're
          just starting out or scaling up, Neubusiness ERP has the right tools
          to keep your operations smooth and your profits growing.
        </p>

        <div className="mt-12">
          <ModalLogin />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center">
        <HeroIllustrator />
      </div>
    </section>
  );
};

export default HeroSection;
