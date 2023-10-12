import { useState } from "react";

export const Folder = ({ explorer }) => {
  const [expanded, setExpanded] = useState(false);

  const { id, name, isFolder, items } = explorer;

  if (isFolder) {
    return (
      <div id={id} style={{ marginTop: 5, marginLeft: "1rem" }}>
        <div className="folder" onClick={() => setExpanded((prev) => !prev)}>
          <span>📁 {name}</span>
        </div>

        <div
          style={{
            display: expanded ? "block" : "none",
          }}
        >
          {items.map((exp) => {
            return <Folder explorer={exp} />;
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
