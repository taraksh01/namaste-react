import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React using React"
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent", style: { color: "orange", backgroundColor: "#212121" } },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "Child h1 inside child1 div"),
      React.createElement("h2", {}, "Sibling h2 inside child1 div"),
    ]),
    React.createElement(
      "div",
      { id: "child2" },
      React.createElement("h2", {}, "h2 inside child2 div")
    ),
  ]
);

root.render(parent);

// Using JSX style
const heading2 = <h2>Namaste react again 🚀</h2>;
root.render(heading2);
