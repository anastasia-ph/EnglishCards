import React, { useState } from "react";
import "./../styles/card.scss"
import "./../styles/colors.scss"
import "./../styles/fonts.scss"
const Card = (props) => {
    const [checked, setChecked] = useState();

    const handleClick = () => {
        setChecked(!checked)
    };
    return (

        <div className="card__body">
            <span className="card__main-font card_bottom-margin block_size">{props.word}</span>
            <span className="card__small-font block_size">{props.transcript}</span>
            <span className="card__small-font block_size">{props.category}</span>
            {checked ? <span onClick={handleClick} className="card__small-font block_size">{props.translation}</span> : <div className="card__translation_button card__small-font" onClick={handleClick}> Показать перевод </div>}
        </div>
    )
}
export default Card