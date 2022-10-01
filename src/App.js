import { useState, React } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NoteSection from "./components/NoteSection/NoteSection";

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
            },
            {
                id: 2,
                title: "More Regret",
                text: "It is necessary to suffer more. It is a part of life.",
            },
            {
                id: 3,
                title: "Intense Regret",
                text: "It is necessary to intensely suffer. It is a part of life.",
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
            },
            {
                id: 2,
                title: "More Sleep",
                text: "It is necessary to sleep more. It is a part of life.",
            },
            {
                id: 3,
                title: "Intense Sleep",
                text: "It is necessary to intensely sleep. It is a part of life.",
            },
        ],
    },
    {
        cat_id: 3,
        category: "Health",
        desc: "All the health related ...err..nvm yeah, health related stuff goes here.",
        notes: [
            {
                id: 1,
                title: "Sleep",
                text: "It is necessary to sleep. It is a part of life.",
            },
            {
                id: 2,
                title: "More Sleep",
                text: "It is necessary to sleep more. It is a part of life.",
            },
            {
                id: 3,
                title: "Intense Sleep",
                text: "It is necessary to intensely sleep. It is a part of life.",
            },
        ],
    },
];

const App = () => {
    const [notes, setNotes] = useState(defaultNotes);
    // debug
    console.log("Start of App component");
    console.log(notes);

    return (
        <div className="App">
            <Sidebar notes={notes} />
            <NoteSection notes={notes} />
        </div>
    );
};

export default App;
