import React, { useState } from "react";
import "./forms.css";

const NewCatForm = ({ onSubmit, onCancel }) => {
    const [titleInput, setTitleInput] = useState("");
    const [descInput, setDescInput] = useState("");
    const [showWarning, setShowWarning] = useState(false);

    const newCat = { title: "", desc: "" };

    const handleOnClick = () => {
        if (titleInput === "" || descInput === "") {
            console.log("Title or text empty");
            setShowWarning(true);
            return;
        }
        setShowWarning(false);
        newCat.title = titleInput;
        newCat.desc = descInput;
        onSubmit(newCat);
    };

    return (
        <div className="NewCatForm">
            <div className="note-form">
                <div className="cross-button" onClick={onCancel}>
                    x
                </div>
                <h3>Add New Category</h3>
                <input
                    placeholder="Title: "
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                />
                <input
                    placeholder="Desc: "
                    value={descInput}
                    onChange={(e) => setDescInput(e.target.value)}
                />
                <button onClick={handleOnClick}>Submit</button>
                {showWarning && (
                    <div className="warning">
                        {" "}
                        Please fill in all the fields.{" "}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewCatForm;
