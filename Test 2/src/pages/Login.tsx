import React from "react";
import {Form, Input, Button, Card} from "antd";
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Login form values:", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to Your Account
        </h2>
        <Form name="login" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{required: true, message: "Please input your username!"}]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{required: true, message: "Please input your password!"}]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center">
          <Link to="/">Back to Home</Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
