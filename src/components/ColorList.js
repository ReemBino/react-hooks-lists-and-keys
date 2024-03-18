import React from 'react';

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  return (
    <div>
      <h1>
        "firebrick", "rebeccapurple", "salmon", "darkslategray", "hotpink",
      </h1>
      <ol>
        {colors.map((color) => {
          return (
            <li key={color} style={{ color }}>
              {color}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ColorList;
