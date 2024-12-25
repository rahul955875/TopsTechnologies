const root = ReactDOM.createRoot(document.querySelector("#root"));

const container = React.createElement(
  "div",
  { className: "container", id: "container1" },
  [
    React.createElement(
      "section",
      { className: "section1", key: 1 },
      [
        React.createElement(
          "h2",
          { className: "heading", key: 1 },
          "This is heading"
        ),
      ],
      React.createElement("img", {
        key: 2,
        src: "https://tse3.mm.bing.net/th?id=OIP.QdIrCNdF2ZVylABjjes1LAHaGq&pid=Api&P=0&h=180",
        style: { width: "200px", filter: "blur(10px)" },
      })
    ),  React.createElement(
        "section",
        { className: "section1", key: 2 },
        [
          React.createElement(
            "h2",
            { className: "heading", key: 1 },
            "This is heading 2"
          ),
        ],
        React.createElement("img", {
          key: 2,
          src: "https://tse3.mm.bing.net/th?id=OIP.QdIrCNdF2ZVylABjjes1LAHaGq&pid=Api&P=0&h=180",
          style: { width: "200px", filter: "drop-shadow(0 0 15px yellow)" }, className: 'reactImg'
        })
      )
  ]
);

root.render(container);
