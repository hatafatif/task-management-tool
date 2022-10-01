import React from "react";
import "./NoteSection.css";
import Header from "./Header";
import Notes from "./Notes";
import AddNote from "./AddNote";

const NoteSection = ({ category, newNoteOnClick }) => {

    return (
        <div className="NoteSection">
            <Header text={category.category} />
            <Notes notes={category.notes} />
            <AddNote onClick={newNoteOnClick}/>
        </div>
    );
};

export default NoteSection;
