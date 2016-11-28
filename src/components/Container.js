import React from 'react';
import Card from './Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTitle} from 'material-ui/GridList';

class Cards extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var cards = [];
    var _data = this.props.data;
    for (var i = 0; i < _data.length; i ++) {
      var singleData = {
        post: 'http://image.tmdb.org/t/p/w500/' + _data[i].poster_path,
        title: _data[i].title
      };

      var SingleCard = <MuiThemeProvider key={i}><Card key={i} title={singleData.title} poster={singleData.post} /></MuiThemeProvider>
      cards.push(SingleCard);
    }
    return (
      <div className="container">
        {cards}
      </div>
    );
  };
}

export default Cards;
