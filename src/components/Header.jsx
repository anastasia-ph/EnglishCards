import React from "react";
import "./../styles/header.scss";
import "./../styles/colors.scss";
import "./../styles/fonts.scss";

const Header = ({ children }) => {
    return (
        <div className="header"> {children} </div>
    )
}

export default Header;