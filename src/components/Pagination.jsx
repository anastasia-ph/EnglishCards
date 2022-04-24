import React from "react";

const Pagination = (props) => {
    return (
        <div className="pagination__block">
            <div className="pagination__left">&#11160;</div>
            <p className="pagination__page-number">{props.number}</p>
            <div className="pagination__right">&#11162;</div>
        </div>
    )
}
export default Pagination