import React from 'react';
import Column from './Column';
import { groupTickets, sortTickets } from '../utils/helpers';

function KanbanBoard({ tickets, users, grouping, sorting }) {
  const statusColumns = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'];
  const groupedTickets = groupTickets(tickets, grouping);
  const sortedGroupedTickets = sortTickets(groupedTickets, sorting);

  const renderColumns = () => {
    if (grouping === 'status') {
      return statusColumns.map(status => (
        <Column 
          key={status} 
          title={status} 
          tickets={sortedGroupedTickets[status] || []} 
          users={users} 
        />
      ));
    } else {
      return Object.entries(sortedGroupedTickets).map(([group, tickets]) => (
        <Column key={group} title={group} tickets={tickets} users={users} />
      ));
    }
  };

  return (
    <div className="kanban-board" style={{ display: 'flex', justifyContent: 'space-between' }}>
      {renderColumns()}
    </div>
  );
}

export default KanbanBoard;
