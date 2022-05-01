import React from "react";
import "./../styles/card.scss"
import "./../styles/colors.scss"
import "./../styles/fonts.scss"
const Card = (props) => {
    return (
        <div className="card__body">
            <span className="card__main-font card_bottom-margin">{props.word}</span>
            <span className="card__small-font">{props.transcript}</span>
            <span className="card__small-font">{props.translation}</span>
            <span className="card__small-font">{props.category}</span>
        </div>
    )
}
export default Card