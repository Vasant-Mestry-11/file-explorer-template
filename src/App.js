import "./App.css";
import Folders from "./components/Folders";
import { FOLDER_DATA } from "./constants/data";

function App() {
  return (
    <div className="App">
      <Folders explorer={FOLDER_DATA} />
    </div>
  );
}

export default App;
