const folderData = {
  id: 1,
  name: "Root",
  isFolder: true,
  child: [
    {
      id: 2,
      name: "src",
      isFolder: true,
      child: [
        {
          id: 3,
          name: "Text File",
          isFolder: false,
          child: [],
        },
      ],
    },
    {
      id: 4,
      name: "Public",
      isFolder: true,
      child: [
        {
          id: 5,
          name: "Pic",
          isFolder: false,
          child: [],
        },
        {
          id: 6,
          name: "Logo",
          isFolder: false,
          child: [],
        },
        {
          id: 7,
          name: "Chumma",
          isFolder: true,
          child: [{ id: 8, name: "In Chumma", isFolder: false, child: [] }],
        },
        { id: 8, name: "Empty", isFolder: true, child: [] },
      ],
    },
  ],
};
export default folderData;
