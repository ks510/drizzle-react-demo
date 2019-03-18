import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      drizzleState: null // stores the state of drizzle store
    };
  }

  componentDidMount() {
    const { drizzle } = this.props; // get drizzle from props

    //subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {
      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe(); // safely unsubscribe to prevent memory leaks
  }


  render() {
    return (
      <div>{ this.state.loading
              ? "Loading Drizzle..."
              : <div className="App">Drizzle is ready</div>
            }
      </div>
    );
  }

  renderLoading() {

  }
}

export default App;
