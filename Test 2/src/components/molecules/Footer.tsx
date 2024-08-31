import React from "react";
import {Layout} from "antd";

const {Footer: AntFooter} = Layout;

const Footer: React.FC = () => {
  return (
    <AntFooter className="text-center bg-transparent">
      © 2024 Neubusiness. All rights reserved.
    </AntFooter>
  );
};

export default Footer;
