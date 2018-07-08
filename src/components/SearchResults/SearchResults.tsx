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
    if (this.props.location != "") {
      return (
        <View column className="results">
          <View className="heading">
            <div className="description">
              {<FormattedMessage id="SearchResults.entrypoint" />}
            </div>
            <div className="values">{this.props.location}</div>
            <div className="description">
              {<FormattedMessage id="SearchResults.within" />}
            </div>
            <div className="values">{this.props.range} m</div>
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
    } else {
      return <View column className="results" />;
    }
  }
}

export default SearchResults;
