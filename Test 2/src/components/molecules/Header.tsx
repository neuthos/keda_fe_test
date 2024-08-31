import React, {useState} from "react";
import {Layout, Menu, Drawer, Button} from "antd";
import {Link} from "react-router-dom";
import ModalLogin from "../pages/Login/ModalLogin";
import {MenuOutlined} from "@ant-design/icons";

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const menuItems = [
    {key: "home", label: "Home", path: "/"},
    {key: "about", label: "About", path: "#about"},
    {key: "pricing", label: "Pricing", path: "#pricing"},
    {key: "contact", label: "Contact", path: "#contact"},
  ];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout.Header className="bg-transparent w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link
            to="/"
            className="text-2xl font-bold text-white"
            aria-label="Go to homepage"
          >
            Neubusiness
          </Link>
        </div>

        <Menu
          mode="horizontal"
          className="border-0 bg-transparent font-semibold w-full items-center justify-center hidden md:flex"
        >
          {menuItems.map(({key, label, path}) => (
            <Menu.Item key={key}>
              <Link to={path} aria-label={label}>
                {label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>

        <div className="md:hidden">
          <Button type="link" onClick={showDrawer}>
            <MenuOutlined className="text-black text-2xl" />
          </Button>
        </div>

        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          open={visible}
          className="mobile-menu"
        >
          <Menu
            mode="vertical"
            className="border-0 bg-transparent font-semibold"
          >
            {menuItems.map(({key, label, path}) => (
              <Menu.Item key={key}>
                <Link to={path} aria-label={label} onClick={onClose}>
                  {label}
                </Link>
              </Menu.Item>
            ))}
            <Menu.Item key="join" className="text-center">
              <Link to="/login" aria-label="Join Us" onClick={onClose}>
                <Button type="primary" block>
                  Join Us
                </Button>
              </Link>
            </Menu.Item>
          </Menu>
        </Drawer>

        <div className="hidden md:flex">
          <ModalLogin />
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
