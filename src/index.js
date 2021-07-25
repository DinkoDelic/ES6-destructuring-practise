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
      // When destructuring arrays, we can name individual items anything
      // we want but with destructuring objects, the names have to match
      // object property names
      // If we wish to rename we can use : to pick a new name
      //(example colorsByPopularity: colors)
      const {
        model,
        coloursByPopularity: [firstColor],
        speedStats: { topSpeed }
      } = car;
      //const [firstColor] = colors;
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
