import React from "react";

const Category = ({ name }) => {
    return (
        <div className="Category">
            <div className="cat-name">1. {name}</div>
            <div className="cat-desc">This is me writing a generic description.</div>
        </div>
    );
};

export default Category;
