import React from "react";
import Image from "next/image";
import classnames from "classnames";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Container,
} from "reactstrap";

import { NORMAL_LINKS, AUTH_LINKS } from "@/utils/constants";

const Header: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <img src="/images/logo/header-stable-icon.png" />
      <section></section>
    </div>
  );
};

export default Header;
