import React from "react";
import Note from "./Note";

const Notes = ({ notes }) => {
    const toShow = notes.length > 0;
    const noteForEmpty = {
        color: "empty",
        text: "Click the button below to enter a new note",
        title: "No Tasks Entered",
    };

    return (
        <div className="Notes">
            {toShow ? (
                <>
                    {notes.map((note) => (
                        <Note key={note.id} note={note} />
                    ))}
                </>
            ) : (
                <Note key={noteForEmpty.id} note={noteForEmpty} />
            )}
        </div>
    );
};

export default Notes;
