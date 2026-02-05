const useTraverseTree = () => {
  const insertChild = (tree, folderId, name, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.child.unshift({
        id: new Date().getTime(),
        name,
        isFolder,
        child: [],
      });
      return tree;
    }
    let latest = [];

    latest =tree.child.map((childeNode) => {
        return insertChild(childeNode, folderId, name, isFolder);
      })
    return { ...tree, child:latest };
  };
  return { insertChild };
};
export default useTraverseTree;
