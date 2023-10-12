import { useState } from "react";

export const Folder = ({ explorer, handleInsertNode }) => {
  const [expanded, setExpanded] = useState(false);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: null,
  });

  const { id, name, isFolder, items } = explorer;

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpanded(true);
    setShowInput({
      isVisible: true,
      isFolder,
    });
  };

  const addAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      // add logic
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);

      setShowInput((prevState) => ({ ...prevState, isVisible: false }));
    }
  };

  if (isFolder) {
    return (
      <div id={id} style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpanded((prev) => !prev)}>
          <span>📁 {name}</span>
          <div className="buttons">
            <button className="btn" onClick={(e) => handleNewFolder(e, false)}>
              + File
            </button>
            <button className="btn" onClick={(e) => handleNewFolder(e, true)}>
              + Folder
            </button>
          </div>
        </div>

        <div
          style={{
            display: expanded ? "block" : "none",
            paddingLeft: "1rem",
          }}
        >
          {showInput.isVisible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                className="inputContainer__input"
                autoFocus
                onBlur={() => {
                  setShowInput((prevState) => ({
                    ...prevState,
                    isVisible: false,
                  }));
                }}
                onKeyDown={addAddFolder}
              />
            </div>
          )}
          {items.map((exp) => {
            return <Folder key={exp.id} explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span className="file" id={id}>
        📄 {name}
      </span>
    );
  }
};
