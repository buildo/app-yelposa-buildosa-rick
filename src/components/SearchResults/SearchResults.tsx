import * as React from "react";
import View from "View";
import { FormattedMessage } from "react-intl";
import "./SearchResults.scss";

type Props = {
  places: Array<string>;
  location: string;
  isSearching: boolean;
};

class SearchResults extends React.Component<Props> {
  render() {
    return (
      <View className="listing">
        <View className="heading">
          <h2>{<FormattedMessage id="SearchResults.entrypoint" />}</h2>
          <span>{this.props.location}</span>
        </View>
        {this.props.places.map((place: string) => <span>{place}</span>)}
        <View />
      </View>
    );
  }
}

export default SearchResults;
