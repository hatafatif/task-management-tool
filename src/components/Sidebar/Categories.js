import React from "react";
import Category from "./Category";

const Categories = ({ notes, onClick, selectedCategory}) => {
    return (
        <div className="Categories">
            <h2>Categories</h2>
            {notes.map((obj) => (
                <Category
                    key={obj.cat_id}
                    cat_id={obj.cat_id}
                    category={obj.category}
                    desc={obj.desc}
                    onClick={onClick}
                    selectedCategory={selectedCategory}
                />
            ))}
        </div>
    );
};

export default Categories;
