import React from "react";
import "./forms.css"

const NewNoteForm = ({newNoteSubmitOnClick}) => {
    return (
        <div className="NewNoteForm">
            <div className="note-form">
                <h3>Add New Note</h3>
                <input placeholder="Category: " />
                <input placeholder="Title: " />
                <input placeholder="Text: " />
                <input placeholder="Color: " />
            <button onClick={newNoteSubmitOnClick}>Submit</button>
            </div>
        </div>
    );
};

export default NewNoteForm;
