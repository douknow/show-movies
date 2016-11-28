import React from 'react';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem'
import getData from './getData';
import Container from './Container';

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
    switch (this.state.value) {
      case 1:
        var type = 'top_rated', page = 1;
        getData.getData(type, page, function (data) {
          console.log(data);
          this.setState(
            {
              disabled: false
            }
          );
        }.bind(this));
        break;
      case 2:
        var type = 'popular', page = 1;
        getData.getData(type, page, function (data) {
          console.log(data);
          this.setState(
            {
              disabled: false
            }
          );
        }.bind(this));
        break;
      default:
    };
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
