export const FOLDER_DATA = [
  {
    id: 1,
    name: "root",
    isFolder: true,
    items: [
      {
        id: 2,
        name: "src",
        isFolder: true,
        items: [
          {
            id: 3,
            name: "components",
            isFolder: true,
            items: [{ id: 5, name: "Folders.js", isFolder: false, items: [] }],
          },
          {
            id: 4,
            name: "constants",
            isFolder: true,
            items: [{ id: 5, name: "data.js", isFolder: false, items: [] }],
          },
          { id: 5, name: "App.js", isFolder: false, items: [] },
        ],
      },
      { id: 6, name: "package.json", isFolder: false, items: [] },
      { id: 7, name: "package-lock.json", isFolder: false, items: [] },
    ],
  },
];
