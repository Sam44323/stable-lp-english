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
} from "reactstrap";

import { HEADER_LINK } from "@/utils/constants";
import classNames from "classnames";

const Header: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const router = useRouter();

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="px-10 py-10 bg-transparent relative mobile:px-1 mobile:py-4">
      {/**
       * @description: section for screen >= tablets
       */}
      <section className="mobile:hidden md:flex flex-row justify-between align-middle max-w-6xl ml-auto mr-auto">
        <img src="/images/logo/header-stable-icon.png" className="h-7" />
        <div className="flex flex-row justify-between align-middle w-fit">
          <div
            className="flex flex-row justify-between align-middle w-78
             mt-1.5 mr-5
          "
          >
            {HEADER_LINK.map((item, index) => {
              return router.pathname === item.href ? (
                <Link
                  key={index}
                  href={item.href}
                  className={classNames(
                    "no-underline text-link-active font-900 hover:text-link-active font-work-sans"
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className={classNames(
                    "no-underline text-link-inactive font-900 hover:text-link-active font-work-sans"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="pill-btn hover:ease-in duration-100 hover:scale-105">
            Get Started
          </div>
        </div>
        {router.pathname === "/" && (
          <Image
            src="/images/gradients/header-ellipse.png"
            alt="header-ellipse"
            height={700}
            width={700}
            className="absolute top-0 right-0 -z-[1]"
          />
        )}
      </section>
      {/**
       * @description: section for mobile
       */}
      <section className="mobile:block hidden">
        <div>
          <div>
            <Navbar color="faded" light>
              <NavbarBrand
                style={{
                  paddingLeft: 10,
                }}
              >
                <Image
                  src="/images/logo/header-stable-icon.png"
                  height={30}
                  width={100}
                  alt="stable-img"
                  priority
                />
              </NavbarBrand>
              <NavbarToggler
                onClick={toggleNavbar}
                style={{
                  border: collapsed ? "none" : "1px solid #000",
                  outline: "none",
                  boxShadow: "none",
                }}
              />
              <Collapse isOpen={!collapsed} navbar className="ml-4 mt-4">
                <Nav navbar>
                  {HEADER_LINK.map((item, index) => (
                    <NavItem key={index}>
                      {router.pathname === item.href ? (
                        <Link
                          href={item.href}
                          className="no-underline font-work-sans text-link-active"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <Link
                          href={item.href}
                          className="no-underline font-work-sans text-link-inactive"
                        >
                          {item.name}
                        </Link>
                      )}
                    </NavItem>
                  ))}
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
