import React, { useState } from "react";
import display from "../assets/icons_FEtask/Display.svg";
import down from "../assets/icons_FEtask/down.svg";

function DisplayOptions({ grouping, setGrouping, sorting, setSorting }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortingChange = (e) => {
    const newSorting = e.target.value;
    setSorting(newSorting);

    if (newSorting === "priority") {
      setGrouping("status");
    }
  };

  return (
    <div className="display-options">
      <button
        style={{
          backgroundColor: "#ffffff",
          height: "30px",
          fontWeight: "bold",
          alignItems: "center",
          border: "none",
          borderRadius: "4px",
          display: "flex",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          border: "1px solid #E5E7EB",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          style={{ paddingRight: "6px", paddingLeft: "6px" }}
          src={display}
        />
        Display <img style={{ paddingLeft: "2px" }} src={down} />
      </button>

      {isOpen && (
        <div
          className="options-dropdown"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              paddingTop: "10px",
            }}
          >
            <label style={{ flexShrink: 0 }}>Grouping</label>
            <select
              value={grouping}
              onChange={(e) => setGrouping(e.target.value)}
              style={{
                height: "26px",
                width: "100px",
                borderRadius: "4px",
                border: "1px solid #E5E7EB",
                flexShrink: 0,
              }}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "10px",
              width: "100%",
            }}
          >
            <label style={{ flexShrink: 0 }}>Ordering</label>
            <select
              value={sorting}
              onChange={handleSortingChange}
              style={{
                height: "26px",
                width: "100px",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #E5E7EB",
                flexShrink: 0,
              }}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayOptions;
