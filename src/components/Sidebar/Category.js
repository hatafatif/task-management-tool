import React, { useState } from "react";

const Category = ({
    cat_id,
    category,
    desc,
    onClick,
    selectedCategory,
    deleteCat,
    totalNotes,
}) => {
    let isSelected = "";
    if (selectedCategory.category === category) {
        isSelected = "selected";
    }

    const [isHover, setHover] = useState(false);

    return (
        <div
            id={cat_id}
            className={`Category ${isSelected}`}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="cat-content">
                <div className="cat-name">{category}</div>
                <div className="cat-desc">{desc}</div>
            </div>
            <div className="cat-buttons">
            {totalNotes > 1 && isHover && (
                <div className="cat-delete" onClick={() => deleteCat(cat_id)}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            )}
            </div>
        </div>
    );
};

export default Category;
