import React from "react";

export default class AwesomeAnimals extends React.Component {
  state = {
    animalsByAwesomeness: [
      "Chicken",
      "Sloth",
      "Porcupine",
      "Killer whale",
      "Velociraptor"
    ]
  };

  render() {
    return (
      <ul>
        {this.state.animalsByAwesomeness.map((animal, id) => {
          return (
            <li key={id}>
              {id}: {animal}
            </li>
          );
        })}
      </ul>
    );
  }
}
