import * as React from "react";
import View from "View";
import ScrollView from "ScrollView";
import RestaurantCard from "RestaurantCard";
import { FormattedMessage } from "react-intl";
import "./SearchResults.scss";
import { RestaurantInfo } from "model";
import { SearchModel } from "model";

class SearchResults extends React.Component<SearchModel> {
  render() {
    return (
      <View grow>
        <ScrollView>
          <View className="heading">
            <h2>
              {<FormattedMessage id="SearchResults.entrypoint" />}
              {this.props.location}
            </h2>
          </View>
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
