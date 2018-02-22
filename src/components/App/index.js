import React, { Component } from 'react';
import routes from 'Routes';


class App extends Component {
  render() {
    return (
      <div className="App" style={{userSelect: "none"}}>
        {routes}
      </div>
    );
  }
}

export default App;
