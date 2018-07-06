import * as React from "react";
import View from "View";
import Input from "Input";
import Dropdown from "Dropdown";
import { FormattedMessage } from "react-intl";
import "./searchheader.scss";
import { injectIntl, InjectedIntlProps } from "react-intl";

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

interface SearchHeaderProps {}

class SearchHeaderWrapper extends React.Component<
  SearchHeaderProps & InjectedIntlProps,
  State
> {
  state = {
    location: "",
    range: dropdownOptions[0].value
  };

  onChangeLocation = (newLocation: string) => {
    this.setState({
      location: newLocation
    });
  };

  onChangeDropdown = (newRange: number) => {
    this.setState({
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
            value={location}
            onChange={onChangeLocation}
          />
          <View className="label">
            <FormattedMessage id="SearchHeader.within" />
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

/*
With component props = InjectedIntlProps (no other props) the signature
of injectIntl is broken and doesn't work as expected, so it's mandatory
to add the type param when invoking injectIntl.
*/
const SearchHeader = injectIntl<SearchHeaderProps>(SearchHeaderWrapper);
export default SearchHeader;
