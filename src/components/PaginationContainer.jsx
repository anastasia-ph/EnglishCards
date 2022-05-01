import React from "react";
import "./../styles/pagination.scss"

function PaginationContainer({ children }) {
    return (
        <div className="pagination__container">
            {children}
        </div>)
}

export default PaginationContainer
