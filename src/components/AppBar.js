import React from 'react';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem'

const styleLeft = {
  display: 'none'
}

export default class AppBarInMine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      disabled: false
    };
  };

  handleChange(event, index, value) {
    this.setState(
      {
        value: value,
        disabled: true
      }
    );
  };

  render() {
    return (
      <AppBar
        title="Show movies"
        iconStyleLeft={styleLeft}
        iconElementRight={
          <DropDownMenu
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            disabled={this.state.disabled}
            className="dropDown"
          >
            <MenuItem value={1} primaryText="Most popular" />
            <MenuItem value={2} primaryText="New time" />
          </DropDownMenu>
        }
      >
      </AppBar>
    );
  };
}
