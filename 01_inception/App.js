const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React using React"
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(heading);

/*
<div id="parent">
  <div id="child">
    <h1>I am inside child</h1>
    <h2>I am sibling of h1 inside child</h2>
  </div>
</div> 
*/

const parent = React.createElement(
  "div",
  { id: "parent", style: { color: "orange" } },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I am inside child1"),
      React.createElement("h2", {}, "I am sibling of h2 inside child1"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am inside child2"),
      React.createElement("h2", {}, "I am sibling of h2 inside child2"),
    ]),
  ]
);
root.render(parent);
