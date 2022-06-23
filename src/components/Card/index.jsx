import React from "react";
import "./styles.css";
import logo from '../../img/Bitmap-5.jpg';


import { Button } from "../Button/Button";


export const Card = ({ name, description, picture, discount, wight }) => {

    const headerStyle = {
        backgroundImage: `url(../../img/Bitmap-5.jpg)`,
    }
    return (
        <>
            <div className="card" style={{ backgroundImage: `url(${picture})` }}>
                <div className="name_card">{name}</div>
                <div>
                    <Button>{description}</Button>
                </div>

                {/* <img src={picture}></img> */}
                {/* <img src={logo}></img> */}
            </div>

            {/* <div className="title_1">
                <Img/>
            </div> */}


        </>
    );
};
