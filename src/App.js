import "./App.css";
import { Folder } from "./components/Folder";
import { FOLDER_DATA } from "./constants/data";

function App() {
  return (
    <div className="App">
      {FOLDER_DATA.map(({ id, name, isFolder, items }) => (
        <Folder id={id} name={name} isFolder={isFolder} items={items} />
      ))}
    </div>
  );
}

export default App;
