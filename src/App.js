import { useState } from "react";
import "./App.css";
import { Folder } from "./components/Folder";
import { FOLDER_DATA } from "./constants/data";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [explorer, setExplorer] = useState(FOLDER_DATA);

  const { insertNode } = useTraverseTree(explorer);

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorer, folderId, item, isFolder);
    setExplorer(finalTree);
  };
  return (
    <div className="App">
      <Folder explorer={explorer} handleInsertNode={handleInsertNode} />
    </div>
  );
}

export default App;
