// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import { cars } from "./practice";

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    {cars.map((car) => {
      const { model, coloursByPopularity, speedStats } = car;
      const [firstColor] = coloursByPopularity;
      const { topSpeed } = speedStats;
      return (
        <tr>
          <td>{model}</td>
          <td>{topSpeed}</td>
          <td>{firstColor}</td>
        </tr>
      );
    })}
  </table>,
  document.getElementById("root")
);
