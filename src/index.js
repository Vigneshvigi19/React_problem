import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

class Myapp extends React.Component{

  render(){
    return(
      <div>
        <App />
      </div>
    );
  }
}
ReactDOM.render(<Myapp/>, document.querySelector('#root'));
