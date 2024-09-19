import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard";
import Header from "./components/Header";
import { fetchTickets } from "./services/api";
import "./styles/App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [viewState, setViewState] = useState(() => {
    const savedState = localStorage.getItem("viewState");
    return savedState
      ? JSON.parse(savedState)
      : {
          grouping: "status",
          sorting: "priority",
        };
  });

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTickets();
      setTickets(data.tickets);
      setUsers(data.users);
      setIsLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    localStorage.setItem("viewState", JSON.stringify(viewState));
  }, [viewState]);

  const setGrouping = (grouping) => {
    setViewState((prevState) => ({ ...prevState, grouping }));
  };

  const setSorting = (sorting) => {
    setViewState((prevState) => ({ ...prevState, sorting }));
  };

  if (isLoading) {
    return <div> Loading... </div>;
  }

  return (
    <div className="App">
      <Header
        grouping={viewState.grouping}
        setGrouping={setGrouping}
        sorting={viewState.sorting}
        setSorting={setSorting}
      />
      <KanbanBoard
        tickets={tickets}
        users={users}
        grouping={viewState.grouping}
        sorting={viewState.sorting}
      />
    </div>
  );
}

export default App;
