import React from "react";
import Card from "./Card";
import add from "../assets/icons_FEtask/add.svg";
import dot_menu from "../assets/icons_FEtask/3 dot menu.svg";
import NoPriorityIcon from "../assets/icons_FEtask/No-priority.svg";
import LowPriorityIcon from "../assets/icons_FEtask/Img - Low Priority.svg";
import MediumPriorityIcon from "../assets/icons_FEtask/Img - Medium Priority.svg";
import HighPriorityIcon from "../assets/icons_FEtask/Img - High Priority.svg";
import UrgentPriorityIcon from "../assets/icons_FEtask/SVG - Urgent Priority colour.svg";
import grey from "../assets/icons_FEtask/SVG - Urgent Priority grey.svg";

import Backlog from "../assets/icons_FEtask/Backlog.svg";
import todo from "../assets/icons_FEtask/To-do.svg";
import progress from "../assets/icons_FEtask/in-progress.svg";
import done from "../assets/icons_FEtask/Done.svg";
import cancel from "../assets/icons_FEtask/Cancelled.svg";

const titleIconMap = {
  0: NoPriorityIcon,
  1: LowPriorityIcon,
  2: MediumPriorityIcon,
  3: HighPriorityIcon,
  4: UrgentPriorityIcon,
  Todo: todo,
  "In progress": progress,
  Backlog: Backlog,
  Done: done,
  Cancelled: cancel,
  "usr-1": grey,
  "usr-2": grey,
  "usr-3": grey,
  "usr-4": grey,
  "usr-5": grey,
};

function Column({ title, tickets, users }) {
  const priorityLabelMap = {
    0: "No Priority",
    1: "Low Priority",
    2: "Medium Priority",
    3: "High Priority",
    4: "Urgent Priority",
    "usr-1": users[0].name,
    "usr-2": users[1].name,
    "usr-3": users[2].name,
    "usr-4": users[3].name,
    "usr-5": users[4].name,
  };

  const displayTitle = priorityLabelMap[title] || title;
  const icon = titleIconMap[title];

  return (
    <div className="column">
      <div
        style={{
          fontSize: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="column-header"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "4px",
          }}
        >
          {icon && (
            <img
              src={icon}
              alt={`${title} icon`}
              style={{ marginRight: "6px" }}
            />
          )}
          <h3 style={{ margin: 0, fontWeight: "600" }}>{displayTitle}</h3>
          <span
            style={{ fontSize: "14px", color: "#808080", paddingLeft: "6px" }}
          >
            {tickets.length}
          </span>
        </div>

        <div style={{ paddingTop: "6px", paddingRight: "8px" }}>
          <img
            style={{ paddingLeft: "2px", color: "#808080" }}
            src={add}
            alt="Add"
          />
          <img
            style={{ paddingLeft: "2px", color: "#808080" }}
            src={dot_menu}
            alt="Menu"
          />
        </div>
      </div>

      {tickets.map((ticket) => (
        <Card
          key={ticket.id}
          ticket={ticket}
          user={users.find((u) => u.id === ticket.userId)}
        />
      ))}
    </div>
  );
}

export default Column;
