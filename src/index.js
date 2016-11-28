import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// 导入 AppBar 组件
import AppBar from './components/AppBar';
// 导入 Container 组件
import Container from './components/Container';
// 导入数据获取组件
import getData from './components/getData';
// 导入Loader 组件
import Loader from './components/Loader';

// 导入 css
require('./index.css');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    };
    getData.getData('popular', 1, function (data) {
      this.setState({
        datas: data.results
      });
      this.loadEnd();
    }.bind(this));
  };

  changeData(data) {
    this.setState({
      datas: data
    });
    this.loadEnd();
  };

  loadStart() {
    document.getElementById('loader').style.display= 'block';
    document.getElementById('loader').style.opacity = 1;
  }

  fade(elem) {
    var op = 1;
    var ff = setInterval(function () {
      if (op < .01) {
        clearInterval(ff);
        elem.style.display = 'none';
      }
      elem.style.opacity = op;
      elem.style.filter = 'alpha(opacity=' + op * 100 + ')';
      op *= .9;
    }, 10);
  }

  loadEnd() {
    setTimeout(function () {
      this.fade(document.getElementById('loader'));
    }.bind(this), 200);
  };

  render() {
    return (
      <div>
        <Loader />
        <MuiThemeProvider>
          <AppBar
            changeData={this.changeData.bind(this)}
            loadStart={this.loadStart.bind(this)}
            loadEnd={this.loadEnd.bind(this)}
          />
        </MuiThemeProvider>
        <Container data={this.state.datas} />
      </div>
    );
  };
}

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
