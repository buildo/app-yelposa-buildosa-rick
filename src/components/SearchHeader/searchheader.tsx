import * as React from "react";
import View from "View";
import Input from "Input";
import Dropdown from "Dropdown";
import { FormattedMessage } from "react-intl";

/*
The search component instead holds some control state, handled with React state.
This means it will be reinitialized to `10` every time the component
is unmounted and re-mounted.
*/

type State = {
  location: string;
  range: number;
};

const dropdownOptions = [
  {
    value: 2000,
    label: "2 km"
  },
  {
    value: 1000,
    label: "1 km"
  },
  {
    value: 500,
    label: "500 m"
  },
  {
    value: 200,
    label: "200 m"
  }
];

export default class Search extends React.Component<{}, State> {
  state = {
    location: "",
    range: dropdownOptions[0].value
  };

  onChangeLocation = (newLocation: string) => {
    let previousState = this.state;

    this.setState({
      location: newLocation,
      range: previousState.range
    });
  };

  onChangeDropdown = (newRange: number) => {
    let previousState = this.state;

    this.setState({
      location: previousState.location,
      range: newRange
    });
  };

  render() {
    const {
      state: { location, range },
      onChangeLocation,
      onChangeDropdown
    } = this;

    return (
      <View
        column
        height={200}
        hAlignContent="center"
        vAlignContent="center"
        className="search"
      >
        <FormattedMessage id="Search.hello" />
        <View hAlignContent="center">
          <View className="label">
            <div id="welcomemessage">
              <span>
                <FormattedMessage id="Search.searcharestaurant" />
              </span>
            </div>
          </View>
          <Input
            placeholder="...insert address here!"
            value={location}
            onChange={onChangeLocation}
          />
          <View className="label">
            <FormattedMessage id="Search.within" />
          </View>
          <View className="switch-view-dropdown">
            <Dropdown
              options={dropdownOptions}
              value={range}
              onChange={onChangeDropdown}
              size="small"
            />
          </View>
        </View>
      </View>
    );
  }
}
