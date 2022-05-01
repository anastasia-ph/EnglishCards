import React from "react";
import "./../styles/colors.scss";
import "./../styles/fonts.scss";
import "./../styles/table.scss"
import "./../styles/buttons.scss";

const TableContainer = ({ children }) => {

    return <table cellpadding="3" cellspacing="0" className="table__placement">
        <tbody className="table__placement">
            {children}
        </tbody>
    </table>
}

export default TableContainer;