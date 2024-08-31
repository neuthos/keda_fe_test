import {ArrowRightOutlined, CheckOutlined} from "@ant-design/icons";
import {Button, Image} from "antd";

interface Props {
  name: string;
  price: string;
  features: string[];
}
const PricingCard = ({features, name, price}: Props) => {
  return (
    <>
      <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl flex flex-col items-center justify-between ">
        <div>
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300 ">
            <Image
              preview={false}
              src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
              className="rounded-[8px]"
              width={60}
              height={60}
            />
            <div className="ml-5 ">
              <span className="block text-xl font-semibold">{name}</span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  $&thinsp;
                </span>
                <span className="text-3xl font-bold">{price}</span>
              </span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500 ">
            {features?.map((label) => (
              <li className="flex text-lg mb-2">
                <CheckOutlined />
                <span className="ml-3">{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-auto" />
        <Button
          iconPosition="end"
          icon={<ArrowRightOutlined className="ml-2" />}
          type="primary"
          size="large"
          className="font-bold py-5 px-4 w-full"
        >
          Choose Plan
        </Button>
      </div>
    </>
  );
};

export default PricingCard;
