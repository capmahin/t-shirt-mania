import React from "react";
import "./Father.css";
import MySelf from "../MySelf/MySelf";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";

const Father = ({ house }) => {
  return (
    <div>
      <h1>Father</h1>
      <p>{house}</p>
      <MySelf></MySelf>
      <Brother></Brother>
      <Sister></Sister>
    </div>
  );
};

export default Father;
