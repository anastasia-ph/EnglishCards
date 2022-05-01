import React from "react";
import "./../styles/pagination.scss"

const Pagination = (props) => {
    return (
        <div className="pagination__container">
            <div className="pagination__block">
                <div className="pagination__button">&#11160;</div>
                <p className="pagination__page-number">{props.number}</p>
                <div className="pagination__button">&#11162;</div>
            </div>
        </div>
    )
}
export default Pagination