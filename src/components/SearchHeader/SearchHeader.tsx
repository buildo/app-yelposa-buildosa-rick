import * as React from "react";
import View from "View";
import Input from "Input";
import Dropdown from "Dropdown";
import { FormattedMessage } from "react-intl";
import "./searchheader.scss";
import { injectIntl, InjectedIntlProps } from "react-intl";
import debounce = require("lodash/debounce");

type State = {
  value: string;
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

interface SearchHeaderProps {
  location: string;
  range: number;
  onChangeLocation: (newLocation: string) => void;
  onChangeRange: (newRange: number) => void;
}

class SearchHeaderWrapper extends React.Component<
  SearchHeaderProps & InjectedIntlProps,
  State
> {
  state = { value: "" };

  onChangeInputLocation = (newLocation: string) => {
    this.setState({ value: newLocation }, () => {
      this.onChangeLocationDebounced(newLocation);
    });
  };

  onChangeLocationDebounced = debounce(this.props.onChangeLocation, 1000);

  onChangeDropdown = (newRange: number) => {
    this.props.onChangeRange(newRange);
  };

  render() {
    return (
      <View
        column
        height={200}
        shrink={false}
        hAlignContent="center"
        vAlignContent="center"
        className="search"
      >
        <View className="welcomemessage">
          <FormattedMessage id="SearchHeader.hello" />
        </View>
        <View hAlignContent="center">
          <View className="label">
            <FormattedMessage id="SearchHeader.searcharestaurant" />
          </View>
          <Input
            placeholder={this.props.intl.formatMessage({
              id: "SearchHeader.placeholder"
            })}
            value={this.state.value}
            onChange={this.onChangeInputLocation}
          />
          <View className="label">
            <FormattedMessage id="SearchHeader.within" />
          </View>
          <View className="switch-view-dropdown">
            <Dropdown
              options={dropdownOptions}
              value={this.props.range}
              onChange={this.onChangeDropdown}
              size="small"
            />
          </View>
        </View>
      </View>
    );
  }
}

/*
With component props = InjectedIntlProps (no other props) the signature
of injectIntl is broken and doesn't work as expected, so it's mandatory
to add the type param when invoking injectIntl.
*/
const SearchHeader = injectIntl<SearchHeaderProps>(SearchHeaderWrapper);
export default SearchHeader;
