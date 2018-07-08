import * as React from "react";
import View from "View";
import Panel from "Panel";
import "./RestaurantCard.scss";
import { RestaurantInfo } from "model";

const RestaurantCard: React.SFC<RestaurantInfo> = props => {
  if (props.isPlaceholder == false) {
    return (
      <Panel className="card" type="floating">
        <View height="80" className="card">
          <View shrink className="description">
            <img src={`${props.image}`} />
            <View column>
              <View className="name">{props.name}</View>
              <View className="subtitle">
                <svg className="icon icon-star-full">
                  <symbol id="icon-star-full" viewBox="0 0 16 16">
                    <title>star-full</title>
                    <path d="M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899z" />
                  </symbol>
                  <use xlinkHref="#icon-star-full" />
                </svg>
                <View className="rating">{props.rating}</View>
                <svg className="icon icon-phone">
                  <symbol id="icon-phone" viewBox="0 0 16 16">
                    <title>phone</title>
                    <path d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z" />
                  </symbol>
                  <use xlinkHref="#icon-phone" />
                </svg>
                <View className="phone">{props.phone}</View>
              </View>
            </View>
          </View>
        </View>
      </Panel>
    );
  } else {
    return (
      <Panel className="card" type="floating">
        <View height="80" className="card">
          <View shrink className="description">
            <img src="https://cdn-images-1.medium.com/max/242/1*meum96zjiygZPcHIt8v9iw@2x.png" />
            <View column>
              <View className="name">Nome Ristorante Placeholder</View>
              <View className="subtitle">
                <svg className="icon icon-star-full">
                  <symbol id="icon-star-full" viewBox="0 0 16 16">
                    <title>star-full</title>
                    <path d="M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899z" />
                  </symbol>
                  <use xlinkHref="#icon-star-full" />
                </svg>
                <View className="rating">6 / 5</View>
                <svg className="icon icon-phone">
                  <symbol id="icon-phone" viewBox="0 0 16 16">
                    <title>phone</title>
                    <path d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z" />
                  </symbol>
                  <use xlinkHref="#icon-phone" />
                </svg>
                <View className="phone">091363850</View>
              </View>
            </View>
          </View>
        </View>
      </Panel>
    );
  }
};

export default RestaurantCard;
