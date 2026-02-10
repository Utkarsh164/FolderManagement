import { useState } from "react";

const Folder = ({ handleAddChild, handleDelete, data }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({ visiblity: false, isdirectory: null });
  const openFolder = () => {
    setOpen(!open);
  };
  const handleInputView = (isdirectory) => {
    setOpen(true);
    setInput({ visiblity: true, isdirectory });
  };

  const addChild = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleAddChild(data.id, e.target.value, input.isdirectory);
      setInput({ ...input, visiblity: false });
    }
  };
  if (data.isFolder) {
    return (
      <div>
        <div>
          <span className="folder-row" onClick={openFolder}>
            📂 {data.name}
          </span>
          <span
            className="add-btn"
            onClick={() => {
              handleInputView(true);
            }}
          >
            +📂
          </span>
          <span
            className="add-file-btn"
            onClick={() => {
              handleInputView(false);
            }}
          >
            +📄
          </span>

          <span onClick={()=>handleDelete(data.id)}>🗑️</span>
        </div>
        <div
          className="folder-children"
          //style={{ display: open ? "block" : "none" }}
        >
          {open && (
            <>
              {input.visiblity && (
                <div>
                  <span>{input.isdirectory ? "📂" : "📄"}</span>
                  <input
                    type="text"
                    autoFocus
                    className="input-box"
                    onBlur={() => {
                      setInput({ ...input, visiblity: false });
                    }}
                    onKeyDown={(e) => {
                      addChild(e);
                    }}
                  />
                </div>
              )}
              {data.child.map((obj) => {
                return (
                  <Folder
                    key={obj.id}
                    handleAddChild={handleAddChild}
                    handleDelete={handleDelete}
                    data={obj}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    );
  }
  return <div>📄 {data.name}</div>;
};

export default Folder;
