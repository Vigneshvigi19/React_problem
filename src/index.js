import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

class Myapp extends React.Component{
state={
  one:[
      {name:"vignesh",age:21},
      {name:"Meghana",age:21}
    ]
}
  render(){
    return(
      <div>
        <App vignesh={this.state.one}/>
      </div>
    );
  }
}
ReactDOM.render(<Myapp/>, document.querySelector('#root'));
