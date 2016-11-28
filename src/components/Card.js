import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {
  width: 200,
  float: 'left'
}

class CardMy extends React.Component {
  render() {
    return (
      <Card style={style}>
        <CardMedia
          overlay={<CardTitle title={this.props.title} />}
        >
          <img src={this.props.poster} alt={this.props.title} />
        </CardMedia>
      </Card>
    );
  };
}

export default CardMy;
