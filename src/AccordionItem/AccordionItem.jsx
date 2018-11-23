import React from "react";

import "./styles.css";

const AccordionItem = ({ collapsed, onClick, title, children }) => {
  return (
    <div className="accordion" onClick={() => onClick(title)}>
      <h2 className="title">{title}</h2>
      <div className="body">{!collapsed && children}</div>
    </div>
  );
};

export default AccordionItem;
