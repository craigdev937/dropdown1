import React from "react";
import "./Button.css";
import { Link } from "react-router";

export const Button = () => {
    return (
        <React.Fragment>
            <Link to="signup">
                <button className="btn">Sign Up</button>
            </Link>
        </React.Fragment>
    );
};



