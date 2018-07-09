import * as React from "react";
import View from "View";
import { FormattedMessage } from "react-intl";
import "./searchResults.scss";
import SearchListContainer from "SearchListContainer/SearchListContainer";
import ScrollView from "ScrollView";

type Props = {
  location: string;
  range: number;
  rangeLabel: string;
};

class SearchResults extends React.Component<Props> {
  render() {
    return this.props.location != "" ? (
      <View column className="results">
        <View className="heading">
          <div className="description">
            {<FormattedMessage id="SearchResults.entrypoint" />}
          </div>
          <div className="values">{this.props.location}</div>
          <div className="description">
            {<FormattedMessage id="SearchResults.within" />}
          </div>
          <div className="values">{this.props.rangeLabel}</div>
        </View>
        <ScrollView>
          <View column height="100%" className="listing">
            <SearchListContainer
              location={this.props.location}
              range={this.props.range}
            />
          </View>
        </ScrollView>
      </View>
    ) : null;
  }
}

export default SearchResults;
