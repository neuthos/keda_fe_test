import React from "react";
import {Form, Input, Button, message} from "antd";

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    message.success("Message sent successfully!");
    form.resetFields();
  };

  return (
    <section id="contact" className="py-16">
      <div className="mb-10 w-11/12 md:w-2/3 mx-auto text-center">
        <h2 className="mb-3 text-black font-extrabold text-4xl md:text-[52px]">
          We're Here to Help You Succeed
        </h2>
        <p className="text-xl">
          At Neubusiness, we believe that great support is the backbone of a
          successful partnership. Whether you have questions about our ERP
          solutions, need technical assistance, or want to learn more about how
          we can help your business grow, our team is just a message away.
        </p>
      </div>
      <div className="flex flex-col md:flex-row bg-white w-11/12 md:w-[80%] mx-auto p-10 rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.0637857702595!2d116.15793257584137!3d-8.589866091455022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb94654c2be73%3A0x4aba68620d2c7bab!2sTamnaka!5e0!3m2!1sid!2sid!4v1725096848452!5m2!1sid!2sid"
            width="100%"
            // height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[200px] md:h-[450px]"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-11/12 md:w-3/4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
              className="max-w-lg mx-auto"
            >
              {["name", "email", "message"].map((field) => (
                <Form.Item
                  key={field}
                  name={field}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                >
                  {field === "message" ? (
                    <Input.TextArea rows={4} />
                  ) : (
                    <Input />
                  )}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full"
                  size="large"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
