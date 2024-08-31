import React from "react";
import ProgramCard from "../../molecules/ProgramCard";

const programData = [
  {
    image:
      "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Streamlined Operations",
    description:
      "Our ERP system helps you manage inventory, track sales, and analyze profits effortlessly.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?q=80&w=3572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Data-Driven Decisions",
    description:
      "Gain valuable insights with our advanced analytics and reporting features.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Streamlined Operations",
    description:
      "Our ERP system helps you manage inventory, track sales, and analyze profits effortlessly.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?q=80&w=3572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Data-Driven Decisions",
    description:
      "Gain valuable insights with our advanced analytics and reporting features.",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 text-white bg-[#1a2b48]">
      <div className="w-11/12 md:w-2/3 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="mb-5 font-extrabold text-[40px] md:text-[52px]">
            About Us
          </h2>
          <p className="text-l md:text-xl">
            At Neubusiness, we are driven by a passion to simplify the complex
            world of business management for entrepreneurs and businesses of all
            sizes. Our journey began with a vision to create an ERP system that
            not only meets the demands of today's fast-paced market but also
            empowers business owners to focus on what truly matters—growing
            their business.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full">
          {programData.map((program, index) => (
            <ProgramCard
              key={index}
              image={program.image}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
