import React from 'react';
import Add from './add_del';
import Alter from './Add';


class App extends React.Component{
 // console.log('hey', props)
 state={
  one:[
      {name:"Vignesh", age:11, weight:81, id:1},
      {name:"Gill", age:20, weight:74, id:2},
      {name:'Mahima', age:31, weight:53, id:3}
    ]
}
  addIt = (data)=>{
    data.id = Math.random();
      let temp=[...this.state.one, data];
      this.setState({
        one:temp
      })
    }


  render(){
    return (
      <div>
        <Add vignesh={this.state.one}/>
        <Alter addIt={this.addIt}/>
      </div>
    )
  }
  
    
};
export default App;
