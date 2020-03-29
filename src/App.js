import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Landing from './components/Landing';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Landing />
      </React.Fragment>
    );
  }
}

export default App;