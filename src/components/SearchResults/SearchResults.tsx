import * as React from "react";
import View from "View";
import { FormattedMessage } from "react-intl";
import "./searchResults.scss";
import SearchListContainer from "SearchListContainer/SearchListContainer";

type Props = {
  location: string;
  range: number;
};

class SearchResults extends React.Component<Props> {
  render() {
    return (
      <View column className="results">
        <View className="heading">
          <h2>
            {<FormattedMessage id="SearchResults.entrypoint" />}
            {this.props.location}
          </h2>
        </View>

        <SearchListContainer
          location={this.props.location}
          range={this.props.range}
        />
      </View>
    );
  }
}

export default SearchResults;
