import * as React from "react";
import "./searchListContainer.scss";
import { restaurantsList } from "queries";
import { declareQueries } from "@buildo/bento/data";
import RestaurantCard from "RestaurantCard";
import IOYelpBusiness from "model";

const queries = declareQueries({ restaurantsList });

type Props = {
  location: string;
  range: number;
} & typeof queries.Props;
class SearchListContainer extends React.Component<Props> {
  render() {
    const res = this.props.restaurantsList;
    if (res.ready == true) {
      console.log(res.value[0]);
      return res.value.map((place: IOYelpBusiness) => (
        <RestaurantCard
          key={place.name}
          name={place.name}
          rating={place.rating}
          phone={place.phone}
          image={place.image_url}
          isPlaceholder={false}
        />
      ));
    } else if (res.ready == false && res.loading == true) {
      return (
        <RestaurantCard
          name={""}
          rating={1}
          phone={""}
          image={""}
          isPlaceholder={true}
        />
      );
    } else {
      return null;
    }
  }
}

export default queries(SearchListContainer) as React.ComponentType<{
  location: string;
  range: number;
}>;
