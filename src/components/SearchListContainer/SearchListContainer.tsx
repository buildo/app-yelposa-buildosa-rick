import * as React from "react";
import View from "View";
import ScrollView from "ScrollView";
import "./searchListContainer.scss";
import { restaurantsList } from "queries";
import { declareQueries } from "@buildo/bento/data";

const queries = declareQueries({ restaurantsList });

type Props = typeof queries.Props;
class SearchListContainer extends React.Component<Props> {
  render() {
    const restaurantList = this.props.restaurantsList;
    if (restaurantList.ready == true) {
      return (
        <View column className="ListContainer">
          <ScrollView>
            {/* <View column className="listing">
              {this.props.places.map((place: RestaurantInfo) => (
                <RestaurantCard
                  name={place.name}
                  rating={place.rating}
                  phone={place.phone}
                  image={place.image}
                  isPlaceholder={place.isPlaceholder}
                />
              ))}
            </View> */}
          </ScrollView>
        </View>
      );
    } else {
      return <View column className="results" />;
    }
  }
  // }
}

export default queries(SearchListContainer) as React.ComponentType<{
  location: string;
  range: number;
}>;
