import React, { useState } from "react";
import "./../styles/colors.scss";
import "./../styles/fonts.scss";
import "./../styles/table.scss"
import "./../styles/buttons.scss";

const TableContainer = ({ children, ...props }) => {

    return <table cellPadding="3" cellSpacing="0" className="table__placement" >
        <tbody className="table__placement">
            {children}
        </tbody>
    </table>
}

export default TableContainer;