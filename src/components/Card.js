import React from "react";
import NoPriorityIcon from "../assets/icons_FEtask/No-priority.svg";
import LowPriorityIcon from "../assets/icons_FEtask/Img - Low Priority.svg";
import MediumPriorityIcon from "../assets/icons_FEtask/Img - Medium Priority.svg";
import HighPriorityIcon from "../assets/icons_FEtask/Img - High Priority.svg";
import UrgentPriorityIcon from "../assets/icons_FEtask/SVG - Urgent Priority colour.svg";

import Backlog from "../assets/icons_FEtask/Backlog.svg";
import todo from "../assets/icons_FEtask/To-do.svg";
import progress from "../assets/icons_FEtask/in-progress.svg";
import done from "../assets/icons_FEtask/Done.svg";
import cancel from "../assets/icons_FEtask/Cancelled.svg";

import UserIcon from "../assets/userIcon.jpg";

const getPriorityIcon = (priority) => {
  switch (String(priority)) {
    case "0":
      return NoPriorityIcon;
    case "1":
      return LowPriorityIcon;
    case "2":
      return MediumPriorityIcon;
    case "3":
      return HighPriorityIcon;
    case "4":
      return UrgentPriorityIcon;
    default:
      return NoPriorityIcon;
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case "Todo":
      return todo;
    case "Backlog":
      return Backlog;
    case "In progress":
      return progress;
    case "Done":
      return done;
    case "Cancelled":
      return cancel;
  }
};

function Card({ ticket, user }) {
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between" }} className="card-header">
        <span style={{ color: "#808080" }}>{ticket.id}</span>
        <img src={UserIcon} style = {{ display: "flex", width: "20px", height: "20px", borderRadius: "50%", alignItems: "center",}}/>
      </div>

      <div>
        <p
          style={{
            fontWeight: "400",
            fontSize: "15px",
            margin: "5px 0",
            paddingLeft: "0px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={getStatusIcon(ticket.status)}
            style={{ width: "14px", height: "14px", paddingRight: "4px" }}
          />
          {ticket.title}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          paddingTop: "4px",
          paddingLeft: "2px",
        }}
      >
        <img
          src={getPriorityIcon(ticket.priority)}
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "4px",
            border: "1px solid #ddd",
            padding: "3px",
            marginRight: "5px",
          }}
        />
        <span
          style={{
            color: "#808080",
            display: "flex",
            fontSize: "12px",
            borderRadius: "4px",
            border: "1px solid #ddd",
            padding: "4px",
            paddingRight: "6px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#bbb",
              borderRadius: "50%",
              marginRight: "5px",
              alignSelf: "center",
            }}
          />
          {ticket.tag}
        </span>
      </div>
    </div>
  );
}

export default Card;
