import React, { Component } from 'react'
import Loadable from 'react-loadable'

const AsyncComponent = Loadable({
	loader: () => import("./Video"),
	loading: () => <div>loading...</div>
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <AsyncComponent/>
      </div>
    );
  }
}

export default App;
