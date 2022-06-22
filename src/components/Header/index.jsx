import React from "react";
import cn from "classnames";
import s from "./styles.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./img/Logo.svg";
import { Menu } from "../Menu/Menu";

export const Header = ({ children, user }) => {
  return (
    <>
      <header className={s.header}>
        <div className={s.logo}>
          <Logo />
        </div>

        <div className={cn(s["header-wrapper"], "container")}></div>
        <div>
          {/* <Menu/> */}
        </div>
        <div className={s.portfolio}>Portfolio</div>
        <div className={s.text}>
          Agency provides a full service range including technical skills,
          design, business understanding.
        </div>
      </header>
    </>
  );
};
