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
  location: string;
  range: number;
};

class App extends React.Component<State> {
  state = {
    location: "milano",
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
          location={this.state.location}
          range={this.state.range}
        />
      </View>
    );
  }
}

export default App;
