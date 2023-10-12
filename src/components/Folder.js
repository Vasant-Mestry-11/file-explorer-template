export const Folder = ({ id, name, isFolder, items }) => {
  return (
    <div key={id} className="folder__container">
      <p className="folder__name">
        {isFolder ? "📁" : "📄"}
        {name}
      </p>
      {isFolder &&
        items?.map(({ id, name, isFolder, items }) => (
          <Folder id={id} name={name} isFolder={isFolder} items={items} />
        ))}
    </div>
  );
};
