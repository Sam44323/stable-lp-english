import React from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
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

import { DROPDOWN_LINKS, HEADER_LINK } from "@/utils/constants";

const Header: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="px-10 py-10 bg-transparent relative large-screen:static  mobile:px-1 mobile:py-4">
      {/**
       * @description: section for screen >= tablets
       */}
      <section className="mobile:hidden md:flex large-screen:relative flex-row justify-between align-middle max-w-6xl ml-auto mr-auto">
        <img src="/images/logo/stable-icon-header.svg" className="h-7" />
        <div className="flex flex-row justify-between align-middle w-fit">
          <div
            className="flex flex-row justify-between align-middle w-[400px]
             mt-1.5 mr-5
          "
          >
            {HEADER_LINK.map((item, index) => {
              return router.pathname === item.href ? (
                <Link
                  key={index}
                  href={item.href}
                  className={classNames(
                    "no-underline text-link-active font-900 hover:text-link-active font-work-sans text-sm"
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className={classNames(
                    "no-underline text-link-inactive font-900 hover:text-link-active font-work-sans text-sm"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="relative">
              <div
                className="flex items-center align-middle hover:cursor-pointer"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <p className="no-underline my-0 mr-1.5 text-link-active font-900 hover:text-link-active font-work-sans text-sm">
                  More
                </p>
                <Image
                  src="/images/logo/nav-arrow.svg"
                  className={classNames(
                    "transition-all",
                    dropdownOpen && "rotate-180"
                  )}
                  height={10}
                  width={10}
                  alt="nav-arrow"
                />
              </div>
              {dropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 bg-black/0 z-[99]"
                    onClick={() => setDropdownOpen(false)}
                  ></div>
                  <div className="flex flex-col bg-blue-link  pt-1 items-start w-36 absolute top-10 z-[100] rounded-md">
                    {DROPDOWN_LINKS.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className={classNames(
                          "no-underline text-white font-900 px-4 py-1 hover:bg-black font-work-sans text-sm mb-1 w-[90%] mx-auto rounded-md"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className="pill-btn hover:ease-in duration-100 hover:scale-105 ml-5 text-[14px]"
            onClick={() => router.push("/coming-soon")}
          >
            Get Started
          </div>
        </div>
        {router.pathname === "/" && (
          <div>
            <Image
              src="/images/gradients/header-ellipse.png"
              alt="header-ellipse"
              height={700}
              width={700}
              className="absolute top-0 right-0 -z-[1] large-screen:hidden"
            />
            <Image
              src="/images/gradients/hder-ellipse-full.png"
              alt="header-ellipse"
              height={700}
              width={700}
              className="absolute top-0 right-0 -z-[1] hidden large-screen:block"
            />
          </div>
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
                  src="/images/logo/stable-icon-header.svg"
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
                  <NavItem>
                    <div className="relative">
                      <div
                        className="flex items-center align-middle hover:cursor-pointer"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                      >
                        <p className="no-underline my-0 mr-1.5 text-link-active font-900 hover:text-link-active font-work-sans text-sm">
                          More
                        </p>
                        <Image
                          src="/images/logo/nav-arrow.svg"
                          className={classNames(
                            "transition-all",
                            dropdownOpen && "rotate-180"
                          )}
                          height={10}
                          width={10}
                          alt="nav-arrow"
                        />
                      </div>
                      {dropdownOpen && (
                        <>
                          <div
                            className="fixed inset-0 bg-black/0 z-[99]"
                            onClick={() => setDropdownOpen(false)}
                          ></div>
                          <div className="flex flex-col bg-blue-link  pt-1 items-start w-36 absolute top-10 z-[100] rounded-md">
                            {DROPDOWN_LINKS.map((item, index) => (
                              <Link
                                key={index}
                                href={item.href}
                                onClick={() => setDropdownOpen(false)}
                                className={classNames(
                                  "no-underline text-white font-900 px-4 py-1 hover:bg-black font-work-sans text-sm mb-1 w-[90%] mx-auto rounded-md"
                                )}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </NavItem>
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
