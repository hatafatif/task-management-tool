import React from "react";
import "./Sidebar.css";
import Name from "./Name";
import SearchCat from "./SearchCat";
import AddCat from "./AddCat";
import Categories from "./Categories";

const Sidebar = ({ notes }) => {
    return (
        <div className="Sidebar">
            <Name />
            <SearchCat />
            <Categories notes={notes} />
            <AddCat />
        </div>
    );
};

export default Sidebar;
