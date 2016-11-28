import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class CardMy extends React.Component {
  render() {
    return (
      <Card className="singleCard">
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
