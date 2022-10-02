import React from "react";

const Category = ({ cat_id, category, desc, onClick, selectedCategory }) => {
    let isSelected = ""
    
    if (selectedCategory.category === category){
        isSelected = "selected" 
    }

    return (
        <div id={cat_id} className={`Category ${isSelected}`} onClick={onClick}>
            <div className="cat-name">{cat_id}: {category}</div>
            <div className="cat-desc">{desc}</div>
        </div>
    );
};

export default Category;
