import React from "react";
import Note from "./Note";

const Notes = ({ notes, onDelete, categoryID }) => {
    const toShow = notes.length > 0;
    const noteForEmpty = {
        id: "NULL",
        color: "empty",
        text: "Click the button below to enter a new note",
        title: "No Tasks Entered",
    };

    return (
        <div className="Notes">
            {toShow ? (
                <>
                    {notes.map((note) => (
                        <Note
                            key={note.id}
                            note={note}
                            onDelete={onDelete}
                            categoryID={categoryID}
                        />
                    ))}
                </>
            ) : (
                <Note
                    key={noteForEmpty.id}
                    note={noteForEmpty}
                    onDelete={() => console.log("Empty note cannot be removed")}
                />
            )}
        </div>
    );
};

export default Notes;
