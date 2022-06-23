import React from "react";
import cn from "classnames";
import s from "./styles.module.css";


export const Menu = () => {
  return (
    <>
      <div className={s.menu}>
        <span className={s.menu_menu}>A</span>
        <span className={s.menu_menu}>B</span>
        <span className={s.menu_menu}>C</span>
        <span className={s.menu_menu}>C</span>
        <span className={s.menu_menu}>C</span>
      </div>
    </>
  );
};
