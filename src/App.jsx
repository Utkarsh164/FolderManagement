import { useState } from "react";
import "./App.css";
import folderData from "./Data/folderData";
import Folder from "./components/folder";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [explorerData, setExplorerData] = useState(folderData);
  const { insertChild, deleteNode } = useTraverseTree();
  const handleAddChild = (folderId, name, isFolder) => {
    let newTree = insertChild(explorerData, folderId, name, isFolder);
    setExplorerData(newTree);
  };

  const handleDelete = (nodeId) => {
    let newTree = deleteNode(explorerData, nodeId);
    setExplorerData(newTree);
  };

  return (
    <div className="screen">
      <div className="sideBar">
        <Folder
          handleAddChild={handleAddChild}
          handleDelete={handleDelete}
          data={explorerData}
        />
      </div>
    </div>
  );
}

export default App;
