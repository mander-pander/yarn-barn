import Link from "next/link";
import { useState } from "react";
import NavItem from "./NavItem";
import Image from 'next/image';

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Yarn", href: "/yarn" },
  { text: "Patterns", href: "/patterns" },
  { text: "Tools and Accessories", href: "/tools" },
  { text: "Learn", href: "/learn" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <span>
            <Image src="/yrnbrn_s.gif" width={250} height={70}/>
          </span>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
