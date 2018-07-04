import * as React from 'react';
import View from 'View';
import { FormattedMessage } from 'react-intl';
import './search.scss';

/*

The search component instead holds some control state, handled with React state.
This means it will be reinitialized to `10` every time the component
is unmounted and re-mounted.
*/

type State = {
  value: string,
}

export default class Search extends React.Component<{}, State> {
  state = {
    value: '...type something here!',
  };

  onLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; //This is the new value

    let valueIsVoid = value.length == 0

    if (!value) {
      this.setState({ value: '' });
    } if (valueIsVoid) {
      this.setState({ value: "...type something here!" });
    }
    else {
      this.setState({ value });
    }

  }

  render() {
    const {
      state: { value },
      onLengthChange
    } = this;

    return (
      <View column className='search'>
      <FormattedMessage id='Search.hello'/>
        <View vAlignContent='center'>
          <View className='label'><FormattedMessage id='Search.near'/></View>
          <input
            type='string'
            value={value}
            onChange={onLengthChange}
          />
        </View>
      </View>
    )
  }
}
