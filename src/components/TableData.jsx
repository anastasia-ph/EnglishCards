import React from "react";
import "./../styles/colors.scss";
import "./../styles/fonts.scss";
import "./../styles/table.scss"
import "./../styles/buttons.scss";


const TableData = (props) => {
    return (
        <tr className="table__row">
            <td className="table__column table-font-text">{props.Active ? <input value={props.word} /> : props.word}</td>
            <td className="table__column table-font-text">{props.Active ? <input value={props.transcript} /> : props.transcript}</td>
            <td className="table__column table-font-text">{props.Active ? <input value={props.translation} /> : props.translation}</td>
            <td className="table__column table-font-text">{props.Active ? <input value={props.category} /> : props.category} </td>
            <td className="table__column_buttons">
                {!props.Header && props.Active && <div div className="save-button">&#10003;</div>}
                {!props.Header && !props.Active && <div className="table__column_buttons"><div className="edit-button">&#9998;</div>
                    <div className="delete-button">&#128465;</div></div>}
            </td>
        </tr >


    )
}
export default TableData;
