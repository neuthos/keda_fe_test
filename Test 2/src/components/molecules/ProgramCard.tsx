import {Button, Image} from "antd";

interface ProgramCardInterface {
  image: string;
  title: string;
  description: string;
}
const ProgramCard = ({image, title, description}: ProgramCardInterface) => {
  return (
    <>
      <div className="program-card max-w-full md:max-w-[250px]">
        <div className="overflow-hidden">
          <Image
            src={image}
            alt="program-one-1"
            className="w-full md:max-h-[150px]"
          />
        </div>
        <div className="text-white my-3 flex flex-col items-center text-center">
          <p className="text-[20px] font-bold mb-3">{title}</p>
          <p className="text-[12px] font-semibold mb-3">{description}</p>

          <Button
            target="__blank"
            className="bg-white rounded-2xl text-[14px] mt-4"
          >
            See more
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProgramCard;
