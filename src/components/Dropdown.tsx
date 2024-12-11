import React from "react";
import "./Dropdown.css";
import { Link } from "react-router";
import { dBase } from "../data/MarketData";

export const Dropdown = () => {
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);

    return (
        <React.Fragment>
            <ul
                onClick={handleClick}
                className={click ? 
                    "dmenu clicked" : 
                    "dmenu"}
            >
                {dBase.map((item) => (
                    <li key={item.id}>
                        <Link
                            className={item.cName}
                            to={item.path}
                            onClick={() => setClick(false)}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
};



