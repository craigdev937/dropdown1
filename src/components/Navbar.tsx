import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router";
import { FaFirstdraft } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { Dropdown } from "./Dropdown";
import { Button } from "./Button";

export const Navbar = () => {
    const [click, setClick] = React.useState(false);
    const [drop, setDrop] = React.useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDrop(false);
        } else {
            setDrop(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDrop(false);
        } else {
            setDrop(false);
        }
    };

    return (
        <React.Fragment>
            <nav className="navbar">
                <Link
                    to={"/"}
                    className="navbar__logo"
                    onClick={closeMenu}
                >
                    EPIC
                    <FaFirstdraft className="firstdraft" />
                </Link>
                <aside 
                    className="menu__icon" 
                    onClick={handleClick}
                >
                    {click ? 
                        <FaTimes className="fatimes" /> : 
                        <FaBars className="fabars" />}
                </aside>
                <ul className={click ? 
                        "nav__menu active" : 
                        "nav__menu"}
                >
                    <li className="nav__item">
                        <Link 
                            to={"/"}
                            className="nav__links"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li 
                        className="nav__item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to={"/services"}
                            className="nav__links"
                            onClick={closeMenu}
                        >
                            Services <FaCaretDown className="fa__caret-down" />
                        </Link>
                        {drop && <Dropdown />}
                    </li>
                    <li className="nav__item">
                        <Link
                            to={"/products"}
                            className="nav__links"
                            onClick={closeMenu}
                        >
                            Products
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to={"/contact"}
                            className="nav__links"
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/signup"}
                            className="nav__mobile"
                            onClick={closeMenu}
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
            <Outlet />
        </React.Fragment>
    );
};


