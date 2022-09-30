import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NoteSection from "./components/NoteSection/NoteSection";

function App() {
    return (
        <div className="App">
            <Sidebar />
            <NoteSection />
        </div>
    );
}

export default App;
