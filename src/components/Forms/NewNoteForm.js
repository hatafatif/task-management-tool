import React from "react";
import "./forms.css";
import { useState } from "react";

const NewNoteForm = ({ onSubmit, onCancel, categories, colors }) => {
    const [colorSelect, setColorSelect] = useState(colors[0]);
    const [categorySelect, setCategorySelect] = useState(categories[0]);
    const [titleInput, setTitleInput] = useState("");
    const [textInput, setTextInput] = useState("");
    const [showWarning, setShowWarning] = useState(false);
    const newNote = {title: "", text: "", color: "", category: ""};

    const handleSubmit = () => {
        if (titleInput === "" || textInput === ""){
            console.log("Title or text empty")
            setShowWarning(true)
            return
        }
        setShowWarning(false)
        
        newNote.title = titleInput
        newNote.text = textInput
        newNote.category = categorySelect
        newNote.color = colorSelect.toLowerCase()

        //debug
        // console.log("Sending the new note object")
        // console.log(newNote)

        onSubmit(newNote)

    }

    return (
        <div className="NewNoteForm">
            <div className="note-form">
                <div className="cross-button" onClick={onCancel}>
                    x
                </div>
                <h3>Add New Note</h3>
                <input
                    placeholder="Title: "
                    onChange={(e) => setTitleInput(e.target.value)}
                    value={titleInput}
                    required
                />
                <input
                    placeholder="Text: "
                    onChange={(e) => setTextInput(e.target.value)}
                    value={textInput}
                    required
                />
                <div className="dropdowns">
                    <div className="dropdown category-dropdown">
                        <label>Category: </label>
                        <select
                            onChange={(e) => setCategorySelect(e.target.value)}
                            value={categorySelect}
                        >
                            {categories.map((category) => {
                                return (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="dropdown color-dropdown">
                        <label>Color: </label>
                        <select
                            onChange={(e) => setColorSelect(e.target.value)}
                            value={colorSelect}
                        >
                            {colors.map((color) => (
                                <option key={color} value={color}>
                                    {color}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button onClick={handleSubmit}>Submit</button>
                {showWarning ? <div className="warning">  Please fill in all the fields.  </div> : <></>}
            </div>
        </div>
    );
};

export default NewNoteForm;
