import React from "react";
import "./forms.css";

const NewNoteForm = ({ onSubmit, onCancel, categories, colors }) => {

    

    return (
        <div className="NewNoteForm">
            <div className="note-form">
                <div className="cross-button" onClick={onCancel}>
                    x
                </div>
                <h3>Add New Note</h3>
                <input placeholder="Title: " />
                <input placeholder="Text: " />
                <div className="dropdowns">
                    <div className="dropdown category-dropdown">
                        <label >Category: </label>
                        <select name="cateogory-dropdown">
                            {categories.map((category) => {
                                console.log(category);
                                return (
                                    <option
                                        key={category}
                                        value={category}
                                    >
                                        {category}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="dropdown color-dropdown">
                        <label>Color: </label>
                        <select>
                            {colors.map((color)=>
                             <option key={color} value={color.toLowerCase()}>{color}</option>   
                            )}
                        </select>
                    </div>
                </div>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default NewNoteForm;
