import React from "react";
import Special from "../Special/Special";
import "./MySelf.css";

const MySelf = ({ house, ornament }) => {
  return (
    <div>
      <h4>My-Self</h4>
      <p>
        <small>house:{house}</small>
        <Special ornament={ornament}></Special>
      </p>
    </div>
  );
};

export default MySelf;
