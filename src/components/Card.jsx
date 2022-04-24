import React from "react";
const Card = (props) => {
    return (
        <div className="card__body">
            <span className="card__text-word">{props.word}</span>
            <span className="card__text">{props.transcript}</span>
            <span className="card__text">{props.translate}</span>
            <span className="card__text">{props.category}</span>
        </div>
    )
}
export default Card