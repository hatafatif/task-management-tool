import React from "react";
import "./Sidebar.css";
import Name from "./Name";
import AddCat from "./AddCat";
import Categories from "./Categories";

const Sidebar = ({ notes, onClick, selectedCategory, newCatOnClick }) => {
    
    return (
        <div className="Sidebar">
            <Name />
            <Categories notes={notes} onClick={onClick} selectedCategory={selectedCategory} />
            <AddCat onClick={newCatOnClick} />
        </div>
    );
};

export default Sidebar;
