import React, { useState } from "react";

const Event_Handling = () => {
  const [upper, setUpper] = useState("JavaScript");
  function Handler() {
    setUpper(upper.toLocaleUpperCase());
  }
  let obj = ' "Mern" ';
  let obj1 = "10";
  let obj2 = {
    1: "one",
    2: "two",
  };
  let obj3 = '{"1":"one", "2":"two"}';
  return (
    <div>
      <button onClick={Handler}>Click</button>
      <p>{JSON.parse(obj)}</p>
      <p>{JSON.parse(obj1)}</p>
      <p>{console.log(JSON.parse(obj3))}</p>
      <p>{JSON.stringify(obj2)}</p>
      <p>{upper}</p>
    </div>
  );
};

export default Event_Handling;
