import React from "react";
import Note from "./Note";

const Notes = ({ notes }) => {
  //debug
    // console.log(notes);
    return (
        <div className="Notes">
            {notes.map((note) => (
                <Note key={note.id} note={note} />
            ))}
        </div>
    );
};

export default Notes;
