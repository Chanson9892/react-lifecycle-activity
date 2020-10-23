import React, { Component } from 'react';
import './App.css';
import Child from './Child';

class App extends Component {
  constructor() {
    super();
    this.state = {
      year: 1999,
      showBaby: false
    };

    alert('Where am I?: In App constructor');
    console.log('Where am I?: In App constructor');
  }

  componentDidMount() {
    alert('Where am I?: In App componentDidMount()');
    alert('Just a moment, adding stuff to the DOM for you');
    console.log('Where am I?: In App componentDidMount()');
  }

  componentDidUpdate() {
    alert('Where am I?: In App componentDidUpdate()');
    console.log('Where am I?: In App componentDidUpdate()');
  }

  render() {
    alert('Where am I?: In App render');
    console.log('Where am I?: In App render');
    alert('Do you see anything in the DOM?');

    return (
      <div>
        <p>This is going to be a really annoying activity with lots of clicking.</p>
        <p>I know, I know, all the alerts make it feel like it's 1999.</p>

        <div>
          <span>{this.state.year}</span>
          <button onClick={() => { this.setState({year: this.state.year + 1}) }}>+</button>
        </div>

        <div>
          <button onClick={() => { this.setState({showBaby: true}) }}>Show Child</button>
          <button onClick={() => { this.setState({showBaby: false}) }}>Remove Child</button>
        </div>

        {this.state.showBaby ? <Child /> : null}
      </div>
    )
  }
}

export default App;
