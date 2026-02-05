import { useState } from "react";
import "./App.css";
import folderData from "./Data/folderData";
import Folder from "./components/folder";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [explorerData, setExplorerData] = useState(folderData);
  const { insertChild } = useTraverseTree();
  const handleAddChild = (folderId, name, isFolder) => {
    var newTree = insertChild(explorerData, folderId, name, isFolder);
    setExplorerData(newTree);
  };

  return (
    <div className="screen">
      <div className="sideBar">
        <Folder handleAddChild={handleAddChild} data={explorerData} />
      </div>
    </div>
  );
}

export default App;
