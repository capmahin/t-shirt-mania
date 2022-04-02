import React from "react";
import "./Grandpa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

const Grandpa = () => {
  return (
    <div className="grandpa">
      <Father></Father>
      <Uncle></Uncle>
      <Aunty></Aunty>
    </div>
  );
};

export default Grandpa;
