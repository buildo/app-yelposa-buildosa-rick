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
  range: number;
};
class App extends React.Component<State> {
  state = {
    places: [
      {
        name: "Fevah 4 the Sushi ",
        rating: 5,
        phone: "3289436673",
        image:
          "https://s3-media4.fl.yelpcdn.com/bphoto/49rixgj-p_VQhzDbt4Vn4g/180s.jpg",
        isPlaceholder: false
      },
      {
        name: "Da Gió",
        rating: 5,
        phone: "0202020",
        image:
          "https://s3-media2.fl.yelpcdn.com/bphoto/5kbwMuOqZ4s0-ZGVa0QOwQ/180s.jpg",
        isPlaceholder: false
      },
      {
        name: "Claudioloso",
        rating: 5,
        phone: "0202020",
        image:
          "https://s3-media1.fl.yelpcdn.com/bphoto/z0sqOMEJIyZZcqq_dDQolA/180s.jpg",
        isPlaceholder: false
      },
      {
        name: "",
        rating: 5,
        phone: "",
        image: "",
        isPlaceholder: true
      },
      {
        name: "",
        rating: 5,
        phone: "",
        image: "",
        isPlaceholder: true
      }
    ],
    isSearching: false,
    location: "",
    range: 100
  };

  render() {
    return (
      <View column height="100%" className="app">
        <SearchHeader
          location={this.state.location}
          range={this.state.range}
          onChangeLocation={(newLocation: string) => {
            this.setState({ location: newLocation });
          }}
          onChangeRange={(newRange: number) => {
            this.setState({ range: newRange });
          }}
        />
        <SearchResults
          places={this.state.places}
          location={this.state.location}
          range={this.state.range}
          isSearching={this.state.isSearching}
        />
      </View>
    );
  }
}

export default App;
