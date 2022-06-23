import React from "react";
import s from "./styles.module.css";

import { Card } from "../Card";
import ContentLoader from "react-content-loader";

export const Cards = ({ goods, filterArr, handleDeleteCard}) => {

  return (
    <>
      <div className={s.cards}>
        {goods?.map((dataItem, index) => {
          return (<Card key={`${index}`} {...dataItem} handleDeleteCard={handleDeleteCard} filterArr={filterArr}/>)
        })}
      </div>

    </>

  );
};
