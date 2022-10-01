import React from "react";

const AddNote = ({onClick}) => {
    return (
        <div className="AddNote">
            <button onClick={onClick}>Add Note +</button>
        </div>
    );
};

export default AddNote;
