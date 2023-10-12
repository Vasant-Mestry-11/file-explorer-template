import { useState } from "react";
import "./App.css";
import { Folder } from "./components/Folder";
import { FOLDER_DATA } from "./constants/data";

function App() {
  const [explorer] = useState(FOLDER_DATA);
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}

export default App;
