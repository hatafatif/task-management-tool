import React from "react";
import Category from "./Category";
import SearchCat from "./SearchCat";

const Categories = ({ notes, onClick, selectedCategory, deleteCat }) => {
    return (
        <div className="Categories">
            <h2>Categories</h2>
            <SearchCat />
            {notes.map((obj) => (
                <Category
                    key={obj.cat_id}
                    cat_id={obj.cat_id}
                    category={obj.category}
                    deleteCat={deleteCat}
                    desc={obj.desc}
                    onClick={onClick}
                    selectedCategory={selectedCategory}
                    totalNotes={notes.length}
                />
            ))}
        </div>
    );
};

export default Categories;
