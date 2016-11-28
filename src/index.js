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
    }.bind(this));
  };
  changeData(data) {
    console.log(data);
    this.setState({
      datas: data
    });
  };
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar changeData={this.changeData.bind(this)} />
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
