import React from "react";

const Inline = () => {
  const arr = [
    { name: "Kajal", age: "20" },
    { name: "Bhumi", age: "19" },
    { name: "Prerna", age: "21" },
  ];
  let res = arr.map((e, i) => {
    return (
      <React.Fragment key={i}>
        {Object.entries(e).map(([k, v], index) => {
          return (
            <React.Fragment key={index}>
              <p>key: {k}</p>
              <p>value: {v}</p>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  });

  return <div>{res}</div>;
};

export default Inline;
