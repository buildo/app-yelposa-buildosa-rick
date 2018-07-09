import * as React from "react";
import View from "View";
import Panel from "Panel";
import "./restaurantCard.scss";
import { RestaurantInfo } from "model";

const RestaurantCard: React.SFC<RestaurantInfo> = props => {
  const infoToBeRendered: RestaurantInfo = {
    name: props.isPlaceholder ? "..." : props.name,
    rating: props.isPlaceholder ? 0 : props.rating,
    phone: props.isPlaceholder ? "..." : props.phone,
    image: props.isPlaceholder
      ? "http://muslimholidays.net/wp-content/uploads/2014/04/default-placeholder-90x90.png"
      : props.image,
    isPlaceholder: props.isPlaceholder
  };

  return (
    // console.log(infoToBeRendered.toString());
    <Panel
      className={props.isPlaceholder ? "cardplaceholder" : "card"}
      type="floating"
    >
      <View height="80">
        <View shrink basis="100%" className="content">
          <View>
            <img className="image" src={infoToBeRendered.image} />
          </View>
          <View column>
            <View className="name">{infoToBeRendered.name}</View>
            <View className="rating">
              <svg className="icon icon-star-full">
                <symbol id="icon-star-full" viewBox="0 0 16 16">
                  <title>star-full</title>
                  <path d="M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899z" />
                </symbol>
                <use xlinkHref="#icon-star-full" />
              </svg>
              <span>
                {infoToBeRendered.isPlaceholder ? "..." : props.rating + "/5"}
              </span>
            </View>
            <View className="phone">
              <svg className="icon icon-phone">
                <symbol id="icon-phone" viewBox="0 0 16 16">
                  <title>phone</title>
                  <path d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z" />
                </symbol>
                <use xlinkHref="#icon-phone" />
              </svg>
              <span>{infoToBeRendered.phone}</span>
            </View>
          </View>
        </View>
      </View>
    </Panel>
  );
};

export default RestaurantCard;
