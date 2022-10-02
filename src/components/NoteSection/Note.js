import React from "react";


const Note = ({ note }) => {
    //debug
    // console.log(note)
    const noteClass = `Note ${note.color}`
    return (
        <div className={noteClass}>
            <div className="note-title">
                {note.title}
            </div>
            <div className="note-text">{note.text}</div>
        </div>
    );
};

export default Note;
