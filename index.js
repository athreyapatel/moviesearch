import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>React Movie S</h1>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));