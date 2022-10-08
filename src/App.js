import { useState, React, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NoteSection from "./components/NoteSection/NoteSection";
import NewNoteForm from "./components/Forms/NewNoteForm";
import NewCatForm from "./components/Forms/NewCatForm";

const defaultNotes = [
    {
        cat_id: 0,
        category: "Uncategorized Notes",
        desc: "All your notes go here by default",
        notes: [],
    },
];

const colors = ["Green", "Blue", "Yellow", "Red", "Purple"];

const App = () => {
    // Variable to get existing notes from local storage.
    let existingNotes = JSON.parse(localStorage.getItem("notes"));
    if (existingNotes.length === 0) existingNotes = defaultNotes;
    // Main state to keep all the data
    const [notes, setNotes] = useState(existingNotes || defaultNotes);
    const [categories, setCategories] = useState();

    /*
    useEffect when notes are changed. This function does 3 things:
        1. Overwrites data in localStorage.
        2. Updates categories state.
        3. If the selected category is deleted, it updates the selected category.
    */
    useEffect(() => {
        if (notes.length === 0) {
            setNotes(defaultNotes);
        }
        const tempCategories = [];

        notes.forEach((obj) => {
            if (tempCategories.indexOf(obj.category) === -1)
                tempCategories.push(obj.category);
        });

        setCategories(tempCategories);
        // Save notes (or overwrite) them when notes are updated.
        localStorage.removeItem("notes");
        localStorage.setItem("notes", JSON.stringify(notes));

        let checkDeletedCat = true;
        notes.forEach(cat => {
            if (cat.cat_id === selectedCategory.cat_id){
                checkDeletedCat = false;
            }
        })
        checkDeletedCat && setSelectedCategory(notes[0])

        console.log(notes);
    }, [notes]);

    // Functionality to select a category from sidebar.
    const [selectedCategory, setSelectedCategory] = useState(notes[0]);

    const selectCategory = (e) => {
        const current_cat_id = e.currentTarget.id;
        const clickedCat = notes.filter((cat) => cat.cat_id == current_cat_id);
        // debug
        setSelectedCategory(clickedCat[0]);
    };
    useEffect(
        () =>
            console.log(
                `Selected Category is now: ${selectedCategory.category}`
            ),
        [selectedCategory]
    );

    //Functionality to deal with NewCatForm.
    const [newCatPressed, setNewCatPressed] = useState(false);
    const handleNewCatSubmit = (receivedCat) => {
        setNewCatPressed(false);
        const notesCopy = notes.slice();
        const newCat = {
            cat_id: receivedCat.title + Math.random().toString(),
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
                    id: receivedNote.title + Math.random().toString(),
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
        setNotes(tempNotes);
    };

    // Functionality to delete categories
    const deleteCat = (catToDeleteID) => {
        if (notes.length == 1) {
            console.log("We need at least one category");
        } else {
            console.log(`Delete category with id: ${catToDeleteID}`);
            let tempNotes = notes.slice();
            tempNotes = tempNotes.filter(
                (category) => category.cat_id !== catToDeleteID
            );
            setNotes(tempNotes);
        }
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
                deleteCat={deleteCat}
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
