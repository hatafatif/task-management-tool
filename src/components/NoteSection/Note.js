import React, { useState } from "react";

const Note = ({ note, onDelete, categoryID }) => {
    const [showButtons, setShowButtons] = useState(false);
    const thisNote = {
        categoryID: categoryID,
        noteID: note.id,
    };
    //debug
    // console.log(note)
    const noteClass = `Note ${note.color}`;
    return (
        <div
            className={noteClass}
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
        >
            <div className="note-content">
                <div className="note-title">{note.title}</div>
                <div className="note-text">{note.text}</div>
            </div>
            {showButtons && note.id !== "NULL" && (
                <div
                    className="note-buttons"
                    onClick={() => onDelete(thisNote)}
                >
                    <i className="fa-solid fa-xmark"></i>
                </div>
            )}
        </div>
    );
};

export default Note;
