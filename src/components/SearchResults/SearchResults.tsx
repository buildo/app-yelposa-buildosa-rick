import * as React from "react";
import View from "View";
import RestaurantCard from "RestaurantCard";
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
      <View column>
        <View className="heading">
          <h2>
            {<FormattedMessage id="SearchResults.entrypoint" />}
            {this.props.location}
          </h2>
        </View>

        <View column className="listing">
          {this.props.places.map((place: string) => (
            <RestaurantCard name={place} />
          ))}
        </View>
      </View>
    );
  }
}

export default SearchResults;
