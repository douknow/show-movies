import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// 导入 AppBar 组件
import AppBar from './components/AppBar';

// 导入 css
require('./index.css');

const App = () => (
  <MuiThemeProvider>
    <AppBar />
  </MuiThemeProvider>
);

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
