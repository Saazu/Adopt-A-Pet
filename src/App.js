const Pet = ({ animal, name, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {}, //attributes
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Adu",
        animal: "Dog",
        breed: "Cockatiel",
      }),
      React.createElement(Pet, {
        name: "Poku",
        animal: "Dog",
        breed: "Bulldog",
      }),
      React.createElement(Pet, {
        name: "Kwabena",
        animal: "Dog",
        breed: "Shepherd",
      }),
    ]
    //children
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
