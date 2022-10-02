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
        notes: [
            {
                id: 1,
                title: "Regret",
                text: "It is necessary to suffer. It is a part of life.",
                color: "yellow",
            },
            {
                id: 2,
                title: "More Regret",
                text: "It is necessary to suffer more. It is a part of life.",
                color: "green",
            },
            {
                id: 3,
                title: "Intense Regret",
                text: "It is necessary to intensely suffer. It is a part of life.",
                color: "red",
            },
        ],
    },
    {
        cat_id: 2,
        category: "Hobby",
        desc: "All the sleep related ...err..hobby related stuff goes here.",
        notes: [
            {
                id: 1,
                title: "Sleep",
                text: "It is necessary to sleep. It is a part of life.",
                color: "green",
            },
            {
                id: 2,
                title: "More Sleep",
                text: "It is necessary to sleep more. It is a part of life.",
                color: "yellow",
            },
            {
                id: 3,
                title: "Intense Sleep",
                text: "It is necessary to intensely sleep. It is a part of life.",
                color: "blue",
            },
            {
                id: 4,
                title: "Intense Sleep",
                text: "It is necessary to intensely sleep. It is a part of life.",
                color: "red",
            },
            {
                id: 5,
                title: "Super Sleep",
                text: "It is necessary to super sleep. It is a part of life.",
                color: "purple",
            },
        ],
    },
    {
        cat_id: 3,
        category: "Health",
        desc: "All the health related ...err..nvm yeah, health related stuff goes here.",
        notes: [
            {
                color: "yellow",
                id: 1,
                title: "Sleep",
                text: "It is necessary to kinda sorta take care of your health. It is a part of life.",
            },
            {
                color: "yellow",
                id: 2,
                title: "More Sleep",
                text: "It is necessary to sleep more. It is a part of life.",
            },
            {
                color: "yellow",
                id: 3,
                title: "Intense Sleep",
                text: "It is necessary to intensely sleep. It is a part of life.",
            },
        ],
    },
    {
        cat_id: 4,
        category: "Gymnastics",
        desc: "All the health related ...err..nvm yeah, health related stuff goes here.",
        notes: [
            {
                color: "yellow",
                id: 1,
                title: "Sleep",
                text: "It is necessary to kinda sorta take care of your health. It is a part of life.",
            },
        ],
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
        const clickedCat = notes.filter((cat) => cat.cat_id == current_cat_id);
        // debug
        setSelectedCategory(clickedCat[0]);
    };

    //Functionality to toggle NewNoteForm.
    const [newNotePressed, setNewNotePressed] = useState(false);
    const handleNewNoteSubmit = () => {
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
