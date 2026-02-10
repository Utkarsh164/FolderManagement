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

    latest = tree.child.map((childeNode) => {
      return insertChild(childeNode, folderId, name, isFolder);
    });
    return { ...tree, child: latest };
  };

  const deleteNode = (currentNode, nodeId) => {
    if (!currentNode.child) return currentNode;
    let latest = [];
    latest = currentNode.child
      .filter((check) => check.id !== nodeId)
      .map((childNode) => deleteNode(childNode, nodeId));
    return { ...currentNode, child: latest };
  };


  return { insertChild, deleteNode };
};
export default useTraverseTree;
