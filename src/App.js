import './App.css';
import Sidebar from './components/Sidebar'; 
import NoteSection from './components/NoteSection';

function App() {
  return (
    <div className="App">
    <div className='window'>

    <Sidebar />
    <NoteSection />
    </div>
    </div>
  );
}

export default App;
