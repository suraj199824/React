import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child", key: "child-1" },
      [
        React.createElement("h1", { key: "h1-1" }, "This is h1 tag"),
        React.createElement("h2", { key: "h2-1" }, "This is h2 tag")
      ]
    ),
    React.createElement(
      "div",
      { id: "child", key: "child-2" },
      [
        React.createElement("div", { id: "title", key: "title" }, "Namaste React!!"),
        React.createElement("h1", { key: "h1-2" }, "This is h1 tag"),
        React.createElement("h2", { key: "h2-2" }, "This is h2 tag")
      ]
    )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
