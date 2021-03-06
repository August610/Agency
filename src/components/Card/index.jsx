import React, { useState } from "react";
import "./styles.css";
import cn from "classnames";
import { Button } from "../Button/Button";


export const Card = ({ name, description, picture, discount, wight, filterArr, handleDeleteCard, id }) => {
    const [active, setActive] = useState(false);

    const headerStyle = {
        backgroundImage: `url(../../img/Bitmap-5.jpg)`,
    }

    function deleteCard() {
        handleDeleteCard(id);
    }

    return (
        <>
            <div
                // className="card" 
                className={cn('card',
                    {
                        'card-active': active
                    })}
                style={{ backgroundImage: `url(${picture})` }}
                onClick={() => { active ? setActive(false) : setActive(true) }}>
                <div className="name_card">{name}</div>
                <div>
                    {/* <Button onClick={() => e.stopPropagation(filter)}>{description}</Button> */}
                    <button onClick={(e) => e.stopPropagation(filterArr(description))}>{description}</button>
                </div>
                <button onClick={deleteCard}>Delete</button>

                {/* <img src={picture}></img> */}
                {/* <img src={logo}></img> */}
            </div>

            {/* <div className="title_1">
                <Img/>
            </div> */}


        </>
    );
};
