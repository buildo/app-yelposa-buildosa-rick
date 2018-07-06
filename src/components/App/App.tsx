/*

This component is the entry point for our app.
It must be named exactly `App` and live in the `components/App` folder.
Typical tasks performed in this component are:
- general app layout
- choosing the correct component to render based on the current view

In this simple example it does a bit of both.

*/

import * as React from "react";
import View from "View";
import SearchHeader from "SearchHeader";
import SearchResults from "SearchResults";

type State = {
  places: Array<string>[];
  isSearching: boolean;
  location: string;
};
class App extends React.Component<State> {
  state = {
    places: [
      {
        name: "posto1",
        rating: 5,
        phone: "0202020",
        image: "lol",
        isPlaceholder: true
      },
      {
        name: "posto2",
        rating: 5,
        phone: "0202020",
        image: "lol",
        isPlaceholder: true
      },
      {
        name: "posto3",
        rating: 5,
        phone: "0202020",
        image: "lol",
        isPlaceholder: true
      }
    ],
    isSearching: false,
    location: "Milano"
  };
  render() {
    return (
      <View column height="100%" className="app">
        <SearchHeader />
        <SearchResults
          places={this.state.places}
          location={this.state.location}
          isSearching={this.state.isSearching}
        />
      </View>
    );
  }
}

export default App;
