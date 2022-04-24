import React from "react";

const TableRow = ({ props }) => {

    return <tr className="table__container" >
        <td className="table__container" > {props.word}</td>
        <td className="table__container" > {props.transcript}</td>
        <td className="table__container" > {props.translation}</td>
        <td className="table__container" > {props.category}</td>
    </tr>
}

export default TableRow;