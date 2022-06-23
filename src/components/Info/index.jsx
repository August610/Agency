import React from "react";
import { Link } from "react-router-dom";
import s from "./styles.module.css";
import cn from "classnames";
import { Button } from '../../components/Button/Button';


// const click = (e) => {
//   e.preventDefault();
//   alert("Есть контакт");
// }

export const Info = ({ setLead, handleDeleteCard }) => {

  function setActiveLead(e) {
    e.preventDefault();
    setLead(true);
  }

  return (
    <form className={s.info}>
      <div>
        {/* <Link to={`/createPost`}>
          <div>
            <Button onClick={handleDeleteCard} >Del</Button>
          </div>
        </Link> */}
        <div>
          <button onClick={setActiveLead}>Load more  </button>
          {/* <Button </Button> */}
        </div>
      </div>
    </form>
  );
};
