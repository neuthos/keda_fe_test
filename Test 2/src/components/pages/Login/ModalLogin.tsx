import {useState} from "react";
import {Button, Modal, Form, Input} from "antd";
import {GoogleOutlined} from "@ant-design/icons";

const ModalLogin = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        className="font-semibold w-[150px] h-[40px]"
        type="primary"
        onClick={showModal}
      >
        Join Us
      </Button>

      <Modal
        title="Login"
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="p-6"
      >
        <div className="flex flex-col space-y-4">
          <Form
            layout="vertical"
            className="space-y-4"
            initialValues={{remember: true}}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{required: true, message: "Please input your email!"}]}
            >
              <Input type="email" placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{required: true, message: "Please input your password!"}]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Login
              </Button>
            </Form.Item>
          </Form>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <Button
            type="default"
            className="w-full flex items-center justify-center"
          >
            <GoogleOutlined className="mr-2" />
            Login with Google
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalLogin;
