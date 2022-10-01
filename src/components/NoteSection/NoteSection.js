import React from "react";
import "./NoteSection.css";
import Header from "./Header";
import Notes from "./Notes";
import AddNote from "./AddNote";

const NoteSection = ({ category }) => {

    return (
        <div className="NoteSection">
            <Header text={category.category} />
            <Notes notes={category.notes} />
            <AddNote />
        </div>
    );
};

export default NoteSection;
