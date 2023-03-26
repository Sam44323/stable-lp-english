import React from "react";
import Image from "next/image";
import classnames from "classnames";
import Link from "next/link";
import styles from "./Header.module.scss";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

import { NORMAL_LINKS, AUTH_LINKS } from "@/utils/constants";

const Header: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.MobileContainer}>
        <div>
          <Navbar color="faded" light>
            <NavbarBrand
              style={{
                paddingLeft: 10,
              }}
            >
              <Image
                src="/images/header-icon-stable.svg"
                height={30}
                width={100}
                alt="stable-img"
                priority
              />
            </NavbarBrand>
            <NavbarToggler
              onClick={toggleNavbar}
              className="me-2"
              style={{
                border: collapsed ? "none" : "1px solid #000",
                outline: "none",
                boxShadow: "none",
              }}
            />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                {NORMAL_LINKS.map((item, index) => (
                  <NavItem className={styles.NavItemContainer} key={index}>
                    <Link
                      href={item.href}
                      className={classnames([...item.classNames])}
                    >
                      {item.name}
                    </Link>
                  </NavItem>
                ))}
                <Container className={styles.AuthMobileContainer}>
                  {AUTH_LINKS.map((item, index) => (
                    <NavItem className={styles.NavItemContainer} key={index}>
                      <Link
                        href={item.href}
                        className={classnames([...item.classNames])}
                        passHref
                      >
                        {item.name}
                      </Link>
                    </NavItem>
                  ))}
                </Container>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
      <div className={styles.DesktopContainer}>
        <section className={styles.IconContainer}>
          <Image
            src="/images/header-icon-stable.svg"
            height={100}
            width={190}
            alt="stable-img"
            priority
          />
        </section>
        <section className={styles.LinksContainer}>
          {NORMAL_LINKS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={classnames([...item.classNames])}
            >
              {item.name}
            </Link>
          ))}
        </section>
        <section className={styles.AuthLinkContainer}>
          {AUTH_LINKS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={classnames([...item.classNames])}
            >
              {item.name}
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Header;
