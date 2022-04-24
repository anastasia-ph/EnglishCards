import React from "react";

const TableContainer = (props) => {

    return <table>
        <tbody>
            <tr>
                <td>{props.word}</td>
                <td>{props.transcript}</td>
                <td>{props.translation}</td>
                <td>{props.category}</td>
            </tr>
        </tbody></table>
}

export default TableContainer;