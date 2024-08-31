import React from "react";
import {Image} from "antd";
import Business1 from "../../../assets/home/business1.svg";
import Business2 from "../../../assets/home/business2.svg";
import Business3 from "../../../assets/home/business3.svg";

const BrandLogos: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {[
            Business1,
            Business2,
            Business3,
            Business1,
            Business2,
            Business3,
          ].map((src, index) => (
            <div key={index} className="flex items-center justify-center">
              <div
                className={`w-[120px] h-[120px] bg-white rounded-[8px] ${
                  index % 2 === 0 ? "-mb-20" : ""
                } flex items-center justify-center`}
              >
                <Image
                  preview={false}
                  src={src}
                  alt="business-logo"
                  className="rounded-[8px] border border-black"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;
