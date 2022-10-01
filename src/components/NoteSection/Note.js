import React from "react";

const Note = ({ note }) => {
    return (
        <div className="Note">
            <div className="note-title">
                {note.id}{". "}
                <div>{note.title}</div>
            </div>
            <div className="note-text">{note.text}</div>
        </div>
    );
};

export default Note;
