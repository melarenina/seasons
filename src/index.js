import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

if (module.hot) {
  module.hot.accept();
}
class App extends React.Component {
  state = { lat: null, errorMessage: '' }; //Initializing state

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // Successful callback
      (position) => this.setState({ lat: position.coords.latitude }),
      // Failure Callback
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please, accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

/*------------------------------------NOTES------------------------------------

State must always be initialized when a component is created

NEVER DO LIKE THIS: 
this.state.lat = position.coords.latitude

React says we have to define render
Avoid to call methods inside of render, because it will be called many many times.
This method has the purpose to only return jsx

*/
