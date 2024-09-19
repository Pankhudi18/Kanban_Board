import React from "react";
import DisplayOptions from "./DisplayOptions";

function Header({ grouping, setGrouping, sorting, setSorting }) {
  return (
    <header className="app-header">
      <DisplayOptions
        grouping={grouping}
        setGrouping={setGrouping}
        sorting={sorting}
        setSorting={setSorting}
      />
    </header>
  );
}

export default Header;
