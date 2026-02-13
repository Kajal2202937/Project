import React from "react";
let item = ["Hello", "Bhumi"];
const Demo = () => {
  return (
    <React.Fragment>
      {item.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </React.Fragment>
  );
};

// function Demo() {
//   const isLoggedIn = true;

//   if (isLoggedIn) {
//     return <h1>Welcome User 😊</h1>;
//   } else {
//     return <h1>Please Login 😢</h1>;
//   }
// }

// function Demo() {
//   const isLoggedIn = false;

//   return <div>{isLoggedIn ? <h1>Dashboard</h1> : <h1>Login Page</h1>}</div>;
// }

// function Demo() {
//   const showMsg = true;
//   return <div>{showMsg && <h2>Welcome Back 🎉</h2>}</div>;
// }

export default Demo;
