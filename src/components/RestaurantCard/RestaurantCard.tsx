import * as React from "react";
import View from "View";
import "./RestaurantCard.scss";

type Props = {
  name: string;
};

class RestaurantCard extends React.Component<Props> {
  render() {
    return <View>{this.props.name}</View>;
  }
}

export default RestaurantCard;
