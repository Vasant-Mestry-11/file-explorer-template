import { Folder } from "./Folder";

const Folders = ({ explorer }) => {
  return explorer.map(({ id, name, isFolder, items }) => (
    <Folder id={id} name={name} isFolder={isFolder} items={items} />
  ));
};

export default Folders;
