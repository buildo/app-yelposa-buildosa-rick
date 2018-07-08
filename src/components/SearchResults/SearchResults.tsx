import * as React from "react";
import View from "View";
import ScrollView from "ScrollView";
import RestaurantCard from "RestaurantCard";
import { FormattedMessage } from "react-intl";
import "./searchResults.scss";
import { RestaurantInfo } from "model";
import { SearchModel } from "model";

class SearchResults extends React.Component<SearchModel> {
  render() {
    return (
      <View column className="results">
        <View className="heading">
          <h2>
            {<FormattedMessage id="SearchResults.entrypoint" />}
            {this.props.location}
          </h2>
        </View>
        <ScrollView>
          <View column className="listing">
            {this.props.places.map((place: RestaurantInfo) => (
              <RestaurantCard
                name={place.name}
                rating={place.rating}
                phone={place.phone}
                image={place.image}
                isPlaceholder={place.isPlaceholder}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SearchResults;
