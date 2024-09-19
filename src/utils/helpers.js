export function groupTickets(tickets, grouping) {
  let groups = {};

  for (let ticket of tickets) {
    let groupKey;

    if (grouping === "status") {
      groupKey = getStatusDisplay(ticket.status);
    } else if (grouping === "user") {
      groupKey = ticket.userId;
    } else {
      groupKey = ticket[grouping];
    }

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(ticket);
  }

  return groups;
}

function getStatusDisplay(status) {
  const statusMap = {
    backlog: "Backlog",
    todo: "Todo",
    "in progress": "In progress",
    done: "Done",
    cancelled: "Cancelled",
  };
  return statusMap[status.toLowerCase()] || status;
}

export function sortTickets(groupedTickets, sorting) {
  let sortedGroups = {};

  for (let [group, tickets] of Object.entries(groupedTickets)) {
    sortedGroups[group] = tickets.sort((a, b) => {
      if (sorting === "priority") {
        return b.priority - a.priority;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  }

  return sortedGroups;
}
