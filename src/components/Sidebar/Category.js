import React from "react";

const Category = ({ cat_id, category, desc }) => {
    return (
        <div className="Category">
            <div className="cat-name">{cat_id}: {category}</div>
            <div className="cat-desc">{desc}</div>
        </div>
    );
};

export default Category;
