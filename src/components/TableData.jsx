import React, { useState } from "react";
import "./../styles/colors.scss";
import "./../styles/fonts.scss";
import "./../styles/table.scss"
import "./../styles/buttons.scss";


const TableData = (props) => {
    const [state, setState] = useState(props);
    const [saved, setSaved] = useState()
    const handleClickSaved = () => {
        setSaved(!saved)
    }
    const handleClick = () => {
        props.onClick(props.word);
    };
    const handleSave = () => {
        handleClickRevert()
        handleClickSaved()
    }
    const handleClickRevert = () => {
        props.onClick("")

    }

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.dataset.name]: event.target.value,
        });
    }
    const handleCancel = () => {
        setState({
            ...props
        })
    }

    return (
        <tr className="table__row">
            <td className="table__column table-font-text">{props.isSelected ? <input data-name={"word"} value={state.word} onChange={handleChange} /> : saved ? state.word : props.word}</td>
            <td className="table__column table-font-text">{props.isSelected ? <input data-name={"transcript"} value={state.transcript} onChange={handleChange} /> : saved ? state.transcript : props.transcript}</td>
            <td className="table__column table-font-text">{props.isSelected ? <input data-name={"translation"} value={state.translation} onChange={handleChange} /> : saved ? state.translation : props.translation}</td>
            <td className="table__column table-font-text">{props.isSelected ? <input data-name={"category"} value={state.category} onChange={handleChange} /> : saved ? state.category : props.category} </td>
            <td className="table__column_buttons">
                {!props.Header && props.isSelected && <div className="table__column_buttons"><div onClick={handleSave} className="save-button">&#10003;</div> <div className="delete-button" onClick={handleCancel}>&#128465;</div></div>}
                {!props.Header && !props.isSelected && <div className="edit-button" onClick={handleClick}>&#9998;</div>
                }
            </td>
        </tr >


    )
}
export default TableData;
