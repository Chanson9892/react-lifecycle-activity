import React, {Component} from 'react';

class Child extends Component {
  constructor(props) {
    super(props);

     alert('Where am I?: In Child constructor');
     console.log('Where am I?: In Child constructor');
  }

  componentDidMount() {
    alert('Where am I?: In Child componentDidMount()');
    alert('Just a moment, adding stuff to the DOM for you');
    console.log('Where am I?: In Child componentDidMount()');
  }

  componentWillUnmount() {
    alert('Where am I?: In Child componentWillUnmount()');
    console.log('Where am I?: In Child componentWillUnmount()');
  }

  render() {
    alert('Where am I?: In Child render');
    console.log('Where am I?: In Child render');

    return (
      <div className="frame">
        <img src="https://media.tenor.com/images/ec9264b65d038bdba2eef3ce1f6f976f/tenor.gif" alt="derpy cat" />
      </div>
    )
  }
}

export default Child;