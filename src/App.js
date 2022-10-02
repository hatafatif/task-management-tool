import { useState, React, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NoteSection from "./components/NoteSection/NoteSection";
import NewNoteForm from "./components/Forms/NewNoteForm";

const defaultNotes = [
    {
        cat_id: 1,
        category: "Work",
        desc: "All the work related regre...err..goes here.",
        notes: [],
    },
    {
        cat_id: 2,
        category: "Hobby",
        desc: "All the sleep related ...err..hobby related stuff goes here.",
        notes: [],
    },
    {
        cat_id: 3,
        category: "Health",
        desc: "All the health related ...err..nvm yeah, health related stuff goes here.",
        notes: [],
    },
];

const colors = ["Green", "Blue", "Yellow", "Red", "Purple"];

const App = () => {
    // Main state to keep all the data
    const [notes, setNotes] = useState(defaultNotes);
    const [categories, setCategories] = useState([]);

    // useEffect to get new categories and colors when notes state is set
    useEffect(() => {
        const tempCategories = [];

        defaultNotes.forEach((obj) => {
            if (tempCategories.indexOf(obj.category) === -1)
                tempCategories.push(obj.category);
        });

        setCategories(tempCategories);
    }, [notes]);

    // Functionality to select a category from sidebar.
    const [selectedCategory, setSelectedCategory] = useState(notes[0]);

    const selectCategory = (e) => {
        const current_cat_id = parseInt(e.currentTarget.id);
        const clickedCat = notes.filter((cat) => cat.cat_id === current_cat_id);
        // debug
        setSelectedCategory(clickedCat[0]);
    };

    //Functionality to deal with NewNoteForm.
    const [newNotePressed, setNewNotePressed] = useState(false);
    const handleNewNoteSubmit = (receivedNote) => {
        const notesCopy = notes.slice();
        console.log("New note received");
        console.log(receivedNote);

        notesCopy.forEach((obj) => {
            if (obj.category === receivedNote.category) {
                obj.notes.push({
                    color: receivedNote.color,
                    id: obj.notes.length + 1,
                    title: receivedNote.title,
                    text: receivedNote.text,
                });
            }
        });

        setNotes(notesCopy);
        setNewNotePressed(!newNotePressed);
    };
    const handleNewNoteCancel = () => {
        setNewNotePressed(!newNotePressed);
    };

    // debug
    // console.log("Start of App component");
    // console.log(notes);

    return (
        <div className="App">
            {newNotePressed ? (
                <NewNoteForm
                    onSubmit={handleNewNoteSubmit}
                    onCancel={handleNewNoteCancel}
                    categories={categories}
                    colors={colors}
                    notes={notes}
                    selectedCategory={selectedCategory}
                />
            ) : (
                <></>
            )}
            {/* <NewCatForm /> */}
            <Sidebar
                notes={notes}
                selectedCategory={selectedCategory}
                onClick={selectCategory}
            />
            <NoteSection
                category={selectedCategory}
                newNoteOnClick={() => setNewNotePressed(!newNotePressed)}
            />
        </div>
    );
};

export default App;
