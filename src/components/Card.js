import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class CardMy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '100%',
      height: '300px'
    };
    window.addEventListener('resize', function () {
      var width = this.refs.img.width;
      this.setState(
        {
          height: width * 1.45
        }
      );
    }.bind(this));
  };
  componentDidMount() {
    var width = this.refs.img.width;
    this.setState(
      {
        height: width * 1.45
      }
    );
  }
  render() {
    return (
      <Card className="singleCard">
        <CardMedia
          overlay={<CardTitle title={this.props.title} />}
        >
          <div className="img">
            <img width={this.state.width} ref="img" height={this.state.height} src={this.props.poster} />
          </div>
        </CardMedia>
      </Card>
    );
  };
}

export default CardMy;
