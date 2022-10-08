import { useState, React, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NoteSection from "./components/NoteSection/NoteSection";
import NewNoteForm from "./components/Forms/NewNoteForm";
import NewCatForm from "./components/Forms/NewCatForm";

const defaultNotes = [
    {
        cat_id: 1,
        category: "Office Work",
        desc: "Pending tasks at my 9-5",
        notes: [],
    },
    {
        cat_id: 2,
        category: "Freelance Work",
        desc: "Pending freelance tasks",
        notes: [],
    },
    {
        cat_id: 3,
        category: "Learning",
        desc: "Different things I want to learn",
        notes: [],
    },
    {
        cat_id: 4,
        category: "Health",
        desc: "All the health related stuff",
        notes: [],
    },
];

const colors = ["Green", "Blue", "Yellow", "Red", "Purple"];

const App = () => {
    // Main state to keep all the data
    const [notes, setNotes] = useState(defaultNotes);
    const [categories, setCategories] = useState([]);

    // Functionality to delete notes
    const deleteNote = (noteToDelete) => {
        const tempNotes = notes.slice();
        tempNotes.forEach((category, i) => {
            if (category.cat_id == noteToDelete.categoryID) {
                category.notes.forEach((note, j) => {
                    if (note.id == noteToDelete.noteID) {
                        tempNotes[i].notes = tempNotes[i].notes.filter(
                            (savedNote) => savedNote.id !== note.id
                        );
                    }
                });
            }
        });
        setNotes(tempNotes)
    };

    // useEffect to get new categories and colors when notes state is set, also save notes in local storage.
    useEffect(() => {
        const tempCategories = [];

        notes.forEach((obj) => {
            if (tempCategories.indexOf(obj.category) === -1)
                tempCategories.push(obj.category);
        });

        setCategories(tempCategories);
        console.log(notes);
    }, [notes]);

    // Functionality to select a category from sidebar.
    const [selectedCategory, setSelectedCategory] = useState(notes[0]);

    const selectCategory = (e) => {
        const current_cat_id = parseInt(e.currentTarget.id);
        const clickedCat = notes.filter((cat) => cat.cat_id === current_cat_id);
        // debug
        setSelectedCategory(clickedCat[0]);
    };

    //Functionality to deal with NewCatForm.
    const [newCatPressed, setNewCatPressed] = useState(false);
    const handleNewCatSubmit = (receivedCat) => {
        setNewCatPressed(false);
        const notesCopy = notes.slice();
        const newCat = {
            cat_id: notesCopy.length + 1,
            category: receivedCat.title,
            desc: receivedCat.desc,
            notes: [],
        };

        notesCopy.push(newCat);
        setNotes(notesCopy);
        console.log("Received New Cat");
        console.log(receivedCat);
    };
    const handleNewCatCancel = () => setNewCatPressed(false);

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
            {newNotePressed && (
                <NewNoteForm
                    onSubmit={handleNewNoteSubmit}
                    onCancel={handleNewNoteCancel}
                    categories={categories}
                    colors={colors}
                    notes={notes}
                    selectedCategory={selectedCategory}
                />
            )}
            {newCatPressed && (
                <NewCatForm
                    onSubmit={handleNewCatSubmit}
                    onCancel={handleNewCatCancel}
                />
            )}
            <Sidebar
                notes={notes}
                selectedCategory={selectedCategory}
                onClick={selectCategory}
                newCatOnClick={() => setNewCatPressed(true)}
            />
            <NoteSection
                category={selectedCategory}
                newNoteOnClick={() => setNewNotePressed(true)}
                deleteNote={deleteNote}
            />
        </div>
    );
};

export default App;
