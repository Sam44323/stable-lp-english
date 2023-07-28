import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Container,
} from "reactstrap";

import { NORMAL_LINKS, AUTH_LINKS, HEADER_LINK } from "@/utils/constants";
import classNames from "classnames";

const Header: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const router = useRouter();

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="px-10 py-10 bg-transparent relative">
      {/**
       * @description: section for screen >= tablets
       */}
      <section className="sm:hidden md:flex flex-row justify-between align-middle">
        <img src="/images/logo/header-stable-icon.png" className="h-7" />
        <div className="flex flex-row justify-between align-middle w-fit">
          <div
            className="flex flex-row justify-between align-middle w-78
             mt-1.5 mr-5
          "
          >
            {HEADER_LINK.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={classNames(
                  "no-underline text-link-inactive font-900 hover:text-link-active",
                  router.pathname === "/" ? "text-link-active" : ""
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pill-btn hover:ease-in duration-100 hover:scale-105">
            Get Started
          </div>
          <Image
            src="/images/gradients/header-ellipse.png"
            alt="header-ellipse"
            height={700}
            width={700}
            className="absolute top-0 right-0 -z-[1]"
          />
        </div>
      </section>
      {/**
       * @description: section for mobile
       */}
      <section className="sm:block md:hidden"></section>
    </div>
  );
};

export default Header;
