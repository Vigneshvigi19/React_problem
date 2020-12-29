import React from 'react';
import Add from './add_del';
import Alter from './Add';


class App extends React.Component{
 
 state={
  one:[
      {name:"Vignesh", age:21, weight:81, id:1},
      {name:'Mahi', age:21, weight:53, id:3}
    ]
}
  addIt = (data)=>{
    data.id = Math.random();
      let temp=[...this.state.one, data];
      this.setState({
        one:temp
      })
    }

    delIt = (id)=>{
      
        let temp=this.state.one.filter(abc=>{
          return id!==abc.id
        })

        this.setState({
          one:temp
        })
    }
  render(){
    return (
      <div>
        <Alter addIt={this.addIt}/>
        <Add vignesh={this.state.one} delIt={this.delIt}/>
        
      </div>
    )
  }
  
    
};
export default App;
