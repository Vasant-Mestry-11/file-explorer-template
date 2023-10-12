import { useState } from "react";

export const Folder = ({ id, name, isFolder, items }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div key={id} className="folder__container">
      <div
        className="wrapper"
        style={{
          backgroundColor: isFolder && "#d2d2d2",
        }}
      >
        <p className="folder__name">
          {isFolder ? "📁" : "📄"}
          {name}
        </p>
        {isFolder && (
          <div className="buttons">
            <button>File</button>
            <button>Folder</button>
          </div>
        )}
      </div>
      {isFolder &&
        items.map(({ id, name, isFolder, items }) => (
          <Folder id={id} name={name} isFolder={isFolder} items={items} />
        ))}
    </div>
  );
};
